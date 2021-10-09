import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './styles/global';
import theme from './styles/theme';
import './assets/tailwind.css';
import {Routes} from './routes';
import {AuthProvider} from './hooks/AuthContext';

export function App() {

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                    <Routes />
                    <GlobalStyle />
            </AuthProvider>
        </ThemeProvider>
    )
}