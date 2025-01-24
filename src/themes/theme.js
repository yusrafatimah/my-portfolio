import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  palette: {
    mode: 'light',
    background: {
      primary: '#07798d',
      secondary: 'rgb(108 51 135)',
      bgCl1: '#0a3378',
      bgCl2: '#ab2f93',
      blob: '#ca07b366',
      logo: '#0c6098',
    },
    text: {
      primary: 'rgb(230, 32, 241)',
      default: '#FFFFFF',
      secondary: '#000000',
      tertiary: '#FFFFFF',
      neonBold: '#ec2de0',
      neon: '#f70fe9',
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
      blob: '#00bcd44a',
      logo: '#122a31',
    },
    text: {
      primary: '#00ffbc',
      default: '#FFFFFF',
      secondary: '#000000',
      tertiary: '#c8c8c8',
      neonBold: '#2aecb1',
      neon: '#03ffbd',
    },
  },
});

export { darkTheme, lightTheme };
