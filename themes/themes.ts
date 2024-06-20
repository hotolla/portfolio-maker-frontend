import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f1f8e9'
    },
    secondary: {
      main: '#ffca28'
    },
    info: {
      main: '#8ee2f1'
    },
    error: {
      main: '#e53935'
    },
    success: {
      main: '#8df190'
    },
    background: {
      default: '#fbf7f7'
    }
  },
  typography: {
    caption: {
      fontFamily: 'Lato',
      lineHeight: 1.92
    },
    fontWeightLight: 100,
    h1: {
      fontFamily: 'Lora',
      lineHeight: 1.15
    },
    h2: {
      fontFamily: 'Lato'
    },
    button: {
      fontWeight: 600
    }
  }
});
