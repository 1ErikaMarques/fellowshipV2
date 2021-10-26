import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  id?: string;
  name: string;
  photo?: string;
  postal_code: string;
  birthday_date: string;
}

interface AuthState {
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
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (signUp: SignUp) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<AuthState>({} as AuthState)

  /**
   * função para fazer login
   * @param email email do usuario
   * @param password senha do usuario
   */
  async function signIn({ email, password }: SignInCredentials) {
    // const storedUser = localStorage.getItem('user');
    await api.post<AuthState>('/auth/login', {
      email,
      password
    }).then(resp => {
      const { token, user } = resp.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
      setIsAuthenticated(true);
    }).catch(e => {
      toast.error(e.response.data.error, {
        theme: "colored"
      })
      console.log(e.response)
    });

  }

  /**
   * função para cadastrar usuario
   * @param email email do usuario
   * @param password senha do usuario
   * @param name nome do usuario
   */
  async function signUp({ email, password, name, postal_code, birthday_date }: SignUp) {

    const newUser = await api.post<AuthState>('/auth/signup', {
      name,
      email,
      password,
      postal_code,
      birthday_date
    });

    setData({ token: newUser.data.token, user: newUser.data.user });
    sessionStorage.setItem('loggedUser', JSON.stringify(newUser.data))
    setIsAuthenticated(true);
    console.log(newUser)
  }

  async function logout() {
    const response = await api.post<AuthState>('/auth/login', {});
    sessionStorage.clear();

    console.log(response)
    setIsAuthenticated(false);
  }

  useEffect(() => {
    function loadUserStorageDate() {
      const storedUser = sessionStorage.getItem('loggedUser');

      if (storedUser) {
        const loggedUser = JSON.parse(storedUser) as User;
        setData({ token: '', user: loggedUser });
        setIsAuthenticated(true);
      }
    }

    loadUserStorageDate();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, isAuthenticated, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

