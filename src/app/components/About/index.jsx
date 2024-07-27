import React from 'react';
import Text from '../../common-components/Text';
import { StyleBoxWrapper } from './styles';
import { Box } from '@mui/material';

import SkillsSection from './SkillsSection';
import AboutText from './AboutText';
import AboutGrid from './AboutGrid';

const About = () => {
  return (
    <StyleBoxWrapper id="element" className={'about-section'}>
      <Text
        className="about-me-text"
        margin={'0 0 20px 0'}
        fontSize={36}
        fontWeight={700}
        color={'white'}
        text={'About Me'}
      />
      <Box
        className={'about-content'}
        display={'flex'}
        gap={'160px'}
        padding={'50px'}
      >
        <SkillsSection />
        <AboutText />
      </Box>
      <AboutGrid />
    </StyleBoxWrapper>
  );
};

export default About;
