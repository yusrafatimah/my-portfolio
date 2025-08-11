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
      primary: 'rgb(230, 32, 241)',
      default: '#464545',
      secondary: '#464545',
      tertiary: '#464545',
      neonBold: '#02c6b3',
      neon: '#00655b',
      shadow: '#bdcbcf',
      bgCl1: '#0a3378',
      bgCl2: '#580649',
      blob: '#ca07b366',
      logo: '#123378',
      gridCard: '#331549',
      contact: '#6d26a170',
      skills: '#ae02c6',
      dark: '#000000',
    },
    // text: {
    //   primary: 'rgb(230, 32, 241)',
    //   default: '#FFFFFF',
    //   secondary: '#000000',
    //   tertiary: '#FFFFFF',
    //   neonBold: '#9e1d96',
    //   neon: '#f70fe9',
    //   skills: '#ae02c6',
    // },
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
      gridCard: '#0037478f',
      contact: '#0e50638f',
    },
    text: {
      heroBtn: '#00ffbc',
      btn: '#00ffbc',
      primary: '#00ffbc',
      default: '#FFFFFF',

      secondary: 'white',
      dark: '#000000',
      tertiary: '#c8c8c8',
      neonBold: '#2aecb1',
      neon: '#03ffbd',
      shadow: 'black',
      skills: '#02c6b3',
    },
  },
});

export { darkTheme, lightTheme };
