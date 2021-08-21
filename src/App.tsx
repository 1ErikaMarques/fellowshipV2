import { useState } from 'react';
import './assets/tailwind.css';

import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { ModalProvider } from './hooks/useModals'
import { Feed } from "./containers/Feed"
import { Header } from './components/Header'
import { Login } from "./containers/Login"


export function App() {

    return (
        <ThemeProvider theme={theme}>
        
            <ModalProvider>
                <Header />
                 {/*  <Login />  */}
                <GlobalStyle />
            </ModalProvider>
        </ThemeProvider>
    )
}