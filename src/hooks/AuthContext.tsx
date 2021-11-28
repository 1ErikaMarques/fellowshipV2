import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User extends SignInCredentials {
    userId?: string;
    name: string;
    profilePic?: string;
    postalCode: string;
    birthdayDate: string;
    neighbourhood: string;
}

export interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUp extends User, SignInCredentials {
}

interface updateUserProfile {
    email?: string;
    name?: string;
    postalCode?: string;
    neighbourhood?: string;
    profilePic?: string;
}

interface AuthContextData {
    userInfo: AuthState;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signUp: (signUp: SignUp) => Promise<void>;
    updateUserInfo: (userInfo: updateUserProfile) => void;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState<AuthState>({} as AuthState);

    /**
     * função para fazer login
     * @param email email do usuario
     * @param password senha do usuario
     */
    async function signIn({ email, password }: SignInCredentials) {
        await api.post<AuthState>('/auth/login', {
            email,
            password
        }).then(resp => {
            const { token, user } = resp.data;
            setData({ token, user });
            sessionStorage.setItem('loggedUser', JSON.stringify({
                token: token,
                user: user
            }));
            setIsAuthenticated(true);
        }).catch(e => {
            if (e.response?.data.status === 401) {
                toast.error('Usuario ou senha incorreto', {
                    theme: 'colored'
                })
            }
            else if (e.response?.data.status === 400) {
                toast.error('O nome de usuário inserido não pertence a uma conta. Verifique seu nome de usuário e tente novamente.', {
                    theme: 'colored'
                });
            } else {
                toast.error(e.response?.data.error, {
                    theme: 'colored'
                });
            }
        });
    }

    const updateUserInfo = (userInfo: updateUserProfile) => {

        const oldUserInfo: AuthState = data;

        if (userInfo.name != null) {
            oldUserInfo.user.name = userInfo.name;
        }
        if (userInfo.email != null) {
            oldUserInfo.user.email = userInfo.email;
        }
        if (userInfo.profilePic != null) {
            oldUserInfo.user.profilePic = userInfo.profilePic;
        }
        if (userInfo.neighbourhood != null) {
            oldUserInfo.user.neighbourhood = userInfo.neighbourhood;
        }
        if (userInfo.postalCode != null) {
            oldUserInfo.user.postalCode = userInfo.postalCode;
        }

        sessionStorage.setItem('loggedUser', JSON.stringify({
            token: oldUserInfo.token,
            user: oldUserInfo.user
        }));

        setData({ token: oldUserInfo.token, user: oldUserInfo.user });
    };

    /**
     * função para cadastrar usuario
     * @param email email do usuario
     * @param password senha do usuario
     * @param name nome do usuario
     * @param postalCode codigo postal do usuario
     * @param birthdayDate data de aniversario
     * @param neighbourhood bairro do usuario
     */
    async function signUp({ email, password, name, postalCode, birthdayDate, neighbourhood }: SignUp) {

        await api.post<AuthState>('/auth/signup', {
            name,
            email,
            password,
            postalCode: postalCode,
            birthdayDate: birthdayDate,
            neighbourhood
        }).then(newUser => {
            setData({ token: newUser.data.token, user: newUser.data.user });
            sessionStorage.setItem('loggedUser', JSON.stringify({
                token: newUser.data.token,
                user: newUser.data.user
            }));
            setIsAuthenticated(true);
        }).catch(err => {
            toast.error(err.response?.data.error, {
                theme: 'colored'
            });
        });
    }

    async function logout() {
        await api.post<AuthState>('/auth/logout').then(() => {
            sessionStorage.clear();
            window.history.replaceState({}, document.title, '/');
            setIsAuthenticated(false);
        });
    }

    useEffect(() => {
        function loadUserStorageDate() {
            const storedUser = sessionStorage.getItem('loggedUser');

            if (storedUser) {
                const loggedUser = JSON.parse(storedUser) as AuthState;
                setData({ token: loggedUser.token, user: loggedUser.user });
                setIsAuthenticated(true);
            }
        }

        loadUserStorageDate();
    }, []);

    return (
        <AuthContext.Provider value={{ userInfo: data, signIn, updateUserInfo, isAuthenticated, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

