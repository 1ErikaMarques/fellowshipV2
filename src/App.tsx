import { useState } from 'react';
import { Header } from './components/Header'
import { Login } from "./containers/Login"
import { GlobalStyle } from "./styles/global"
import { ModalProvider } from './hooks/useModals'

export function App()
{


    return (
        <>
            <ModalProvider>
                <Header />
                {/*  <Login /> */}
                <GlobalStyle />
            </ModalProvider>
        </>
    )
}