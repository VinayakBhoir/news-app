// src/theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
    },
    secondary: {
      main: mode === 'light' ? '#ff4081' : '#f48fb1',
    },
    background: {
      default: mode === 'light' ? '#f4f6f8' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#212121' : '#fff',
      secondary: mode === 'light' ? '#555' : '#aaa',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...(mode === 'light'
            ? {
                background: 'linear-gradient(90deg, #1976d2 0%, #63a4ff 100%)',
                color: '#fff',
              }
            : {
                backgroundColor: '#1e1e1e',
                color: '#90caf9',
              }),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          ...(mode === 'light'
            ? { backgroundColor: '#e3f2fd' } // pastel light blue
            : { backgroundColor: '#1e1e1e' }),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '20px',
        },
      },
    },
  },
});

export default function getTheme(mode) {
  return createTheme(getDesignTokens(mode));
}
