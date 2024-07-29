import React from 'react';
import Text from '../../common-components/Text';
import { StyleBoxWrapper } from './styles';
import { Box, Link } from '@mui/material';

import SkillsSection from './SkillsSection';
import AboutText from './AboutText';
import AboutGrid from './AboutGrid';
import { StyledScrollDiv } from '../Home/styles';

const About = () => {
  return (
    <StyleBoxWrapper id="AboutMe" className={'about-section'}>
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
      <Link width={'100%'} underline="none" href="#RecentWork">
        <StyledScrollDiv
          className="styled-scroll-div"
          display={'flex'}
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
          mt={'80px'}
        >
          <Text
            className="scroll-text"
            margin={'0 0 10px 0'}
            fontSize={14}
            fontWeight={500}
            color={'white'}
            text={'SCROLL'}
          />
          <div className="cursor-outer">
            <div className="animated-blob"></div>
          </div>
        </StyledScrollDiv>
      </Link>
    </StyleBoxWrapper>
  );
};

export default About;
