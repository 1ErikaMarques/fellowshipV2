import {GlobalStyle} from './styles/global';
import './assets/tailwind.css';
import {Routes} from './routes';
import {AuthProvider} from './hooks/AuthContext';
import customThemeConst from "./styles/theme";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {ThemeProvider as CustomTheme} from "styled-components";

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#FFBE21',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export function App() {

    return (
        <ThemeProvider theme={theme}>

            <CustomTheme theme={customThemeConst}>

                <AuthProvider>
                    <Routes/>
                    <GlobalStyle/>
                </AuthProvider>

            </CustomTheme>
        </ThemeProvider>
    )
}