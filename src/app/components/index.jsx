import React from 'react';
import Home from './Home';
import About from './About';
import { MainSection } from './styles';
import RecentWork from './RecentWork';
import ExperienceSection from './Experience';
import ClientsAndReviewsSection from './Clients&Reviews';
import Navbar from './Navbar';
import { Box } from '@mui/material';

const MainBody = () => {
  return (
    <MainSection
      className={'main-body'}
      display={'flex'}
      flexDirection={'column'}
      sx={{ scrollBehavior: 'smooth', position: 'relative' }}
    >
      <Box
        style={{
          maxWidth: '1450px',
        }}
      >
        <Navbar />
        <Home />
        {/* <div class="wave"></div>
      <div class="wave wave--top"></div> */}
        <About />
        <RecentWork />
        <ExperienceSection />
        <ClientsAndReviewsSection />
      </Box>
    </MainSection>
  );
};

export default MainBody;
