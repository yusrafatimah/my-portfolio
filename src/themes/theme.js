import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  palette: {
    mode: 'light',
    background: {
      primary: '#07798d',
      secondary: '#036157c2',
      bgCl1: '#f5f7fa',
      bgCl2: '#139588',
      blob: '#139588c2',
      logo: '#49837c',
      nav: '#036157c2',
      hamburger: '#03a797',
    },
    text: {
      heroBtn: '#139588',
      btn: '#00ffbc',
      primary: 'white',
      default: '#464545',
      secondary: '#464545',
      tertiary: '#464545',
      neonBold: '#02c6b3',
      neon: '#00655b',
      shadow: '#bdcbcf',
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
      bgCl2: 'rgb(17, 36, 41)',
      blob: '#00bcd44a',
      logo: '#122a31',
      nav: 'transparent',
      hamburger: '#19192499',
    },
    text: {
      heroBtn: '#00ffbc',
      btn: '#00ffbc',
      primary: '#00ffbc',
      default: '#FFFFFF',
      secondary: 'white',
      tertiary: '#c8c8c8',
      neonBold: '#2aecb1',
      neon: '#03ffbd',
      shadow: 'black',
    },
  },
});

export { darkTheme, lightTheme };
