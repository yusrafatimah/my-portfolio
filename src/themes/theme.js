import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  palette: {
    mode: 'light',
    background: {
      primary: '#07798d',
      secondary: '#0281a0',
      bgCl1: ' #0c858d',
      bgCl2: '#045d8f',
      bgCl3: '#27788f',
      blob: '#25ddff4a',
      logo: '#10848e',
    },

    text: {
      primary: '#44ff8a',
      default: '#FFFFFF',
      secondary: '#000000',
      tertiary: '#FFFFFF',
    },
  },
});
const darkTheme = createTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif !important",
  },
  palette: {
    mode: 'dark',
    background: {
      primary: '#12282e',
      secondary: '#033b4a',
      bgCl1: '#122a31',
      bgCl2: '#112429',
      bgCl3: '#001d25',
      blob: '#00bcd44a',
      logo: '#122a31',
    },
    text: {
      primary: '#00ffbc',
      default: '#FFFFFF',
      secondary: '#000000',
      tertiary: '#c8c8c8',
    },
  },
});

export { darkTheme, lightTheme };
