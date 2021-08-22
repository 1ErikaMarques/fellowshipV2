import './assets/tailwind.css';

import {GlobalStyle} from "./styles/global"
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

import {ModalProvider} from './hooks/useModals'
import {Header} from './components/Header'
import {Profile} from './containers/Profile'


export function App() {

    return (
        <ThemeProvider theme={theme}>
        
            <ModalProvider>
                <Header neighborhoodName="Moema" />
{/*                   <Login />*/}
                 <Profile profileId=''/>
                <GlobalStyle />
            </ModalProvider>
        </ThemeProvider>
    )
}