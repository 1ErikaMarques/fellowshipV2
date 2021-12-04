import { Routes } from './routes';
import { AuthProvider } from './hooks/AuthContext';
import { GlobalStyle } from './styles/global';
import { ThemeProvider as CustomTheme } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './assets/tailwind.css';
import customThemeConst from './styles/theme';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#4285F4',
      dark: '#002884',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ff7961',
      main: '#FFBE21',
      dark: '#ba000d',
      contrastText: '#000000',
    },
    action: {
      hover: '#F0F6FB',
      selected: '#F0F6FB',
      disabled: '#EEEEEE',
    },

  },
  transitions: {
    easing: {
      easeInOut: '200'
    }
  }
});

export function App() {

  return (
    <ThemeProvider theme={theme}>

      <CustomTheme theme={customThemeConst}>

        <AuthProvider>
          <Routes />
          <GlobalStyle />
        </AuthProvider>

      </CustomTheme>
    </ThemeProvider>
  )
}