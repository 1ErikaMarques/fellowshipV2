import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import './assets/tailwind.css';

import { ModalProvider } from './hooks/useModals';
import { Routes } from './routes';
import { AuthProvider } from './hooks/AuthContext';

export function App() {

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <ModalProvider>
                    <Routes />
                    <GlobalStyle />
                </ModalProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}