import React from 'react';
import Home from './Home';
import About from './About';
import { MainSection } from './styles';
import RecentWork from './RecentWork';
import ExperienceSection from './Experience';
import ClientsAndReviewsSection from './Clients&Reviews';
import Navbar from './Navbar';
import { Box } from '@mui/material';
import Footer from './Footer';

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
          width: '100%',
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
      <Footer />
    </MainSection>
  );
};

export default MainBody;
