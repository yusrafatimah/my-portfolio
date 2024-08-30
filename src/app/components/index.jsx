import React from 'react';
import Home from './Home';
import About from './About';
import { MainSection } from './styles';
import RecentWork from './RecentWork';
import ExperienceSection from './Experience';
import ClientsAndReviewsSection from './Clients&Reviews';

const MainBody = () => {
  return (
    <MainSection
      className={'main-body'}
      display={'flex'}
      flexDirection={'column'}
      sx={{ scrollBehavior: 'smooth', position: 'relative' }}
    >
      <Home />
      <div class="wave"></div>
      <div class="wave wave--top"></div>
      <About />
      <RecentWork />
      <ExperienceSection />
      <ClientsAndReviewsSection />
    </MainSection>
  );
};

export default MainBody;
