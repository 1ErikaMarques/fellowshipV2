import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User extends SignInCredentials {
    id?: string;
    name: string;
    profile_pic?: string;
    postal_code: string;
    birthday_date: string;
    neighborhood: string;
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

interface AuthContextData {
    userInfo: AuthState;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signUp: (signUp: SignUp) => Promise<void>;
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
            toast.error(e.response?.data.error, {
                theme: 'colored'
            });
        });
    }

    /**
     * função para cadastrar usuario
     * @param email email do usuario
     * @param password senha do usuario
     * @param name nome do usuario
     * @param postal_code codigo postal do usuario
     * @param birthday_date data de aniversario
     * @param neighborhood
     */
    async function signUp({ email, password, name, postal_code, birthday_date, neighborhood }: SignUp) {

        const newUser = await api.post<AuthState>('/auth/signup', {
            name,
            email,
            password,
            postal_code,
            birthday_date,
            neighborhood
        });

        setData({ token: newUser.data.token, user: newUser.data.user });
        sessionStorage.setItem('loggedUser', JSON.stringify({
            token: newUser.data.token,
            user: newUser.data.user
        }));
        setIsAuthenticated(true);
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
        <AuthContext.Provider value={{ userInfo: data, signIn, isAuthenticated, signUp, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

