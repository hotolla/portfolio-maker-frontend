import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2B6D'
    },
    secondary: {
      main: '#FFFFFF'
    },
    action: {
      disabledBackground: '#E4E9FF'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F2F2F2'
    },
    warning: {
      main: '#ff6e40'
    },
    text: {
      secondary: '#1A2B6D',
      disabled: 'rgba(129,122,122,0.38)'
    },
    error: {
      main: '#D41317'
    },
    info: {
      main: '#aeefb0'
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
