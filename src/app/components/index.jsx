import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import { MainSection } from './styles';
import RecentWork from './RecentWork';
import ExperienceSection from './Experience';
import ClientsAndReviewsSection from './Clients&Reviews';
import Navbar from './Navbar';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import FooterSection from './Footer/index';

import { darkTheme, lightTheme } from '../../themes/theme';

const MainBody = () => {
  const [appTheme, setAppTheme] = useState('dark');
  const currentTheme = appTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <MainSection
        className={'main-body'}
        display={'flex'}
        flexDirection={'column'}
        sx={{ scrollBehavior: 'smooth', position: 'relative' }}
      >
        <Box
          className={'main-body-inner'}
          style={{
            maxWidth: '1450px',
            width: '100%',
          }}
        >
          <Navbar setAppTheme={setAppTheme} appTheme={appTheme} />
          <Home />
          {/* <div class="wave"></div>
      <div class="wave wave--top"></div> */}
          <About />
          <RecentWork />
          <ExperienceSection />
          <ClientsAndReviewsSection />
        </Box>
        <FooterSection />
      </MainSection>
    </ThemeProvider>
  );
};

export default MainBody;
