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
    <StyleBoxWrapper
      padding={{ xs: '30px', sm: '30px', md: '30px', lg: '10px 70px 0 70px' }}
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100vh' }}
      id="AboutMe"
      className={'about-section'}
    >
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
        gap={{ xs: '80px', sm: '80px', md: '80px', lg: '160px' }}
        padding={{ xs: 0, sm: 0, md: 0, lg: '50px' }}
        flexDirection={{
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
        }}
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
          mt={'40px'}
        >
          <Text
            className="scroll-text"
            margin={'0 0 10px 0'}
            fontSize={14}
            fontWeight={500}
            color={'white'}
            text={'MY RECENT WORK'}
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
