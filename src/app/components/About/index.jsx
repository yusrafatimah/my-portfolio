import React from 'react';
import Text from '../../common-components/Text';
import { StyleBoxWrapper } from './styles';
import { Box } from '@mui/material';
import SkillsSection from './SkillsSection';
import AboutText from './AboutText';
import AboutGrid from './AboutGrid';

const About = () => {
  return (
    <StyleBoxWrapper
      padding={{
        xs: '15px',
        sm: '30px',
        md: '30px',
        lg: '40px 0px 100px 70px',
      }}
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100%' }}
      id="AboutMe"
      className={'about-section'}
    >
      <Text
        className="about-me-text"
        margin={'30px 0 20px 0'}
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
        marginTop={{ xs: '60px', sm: '60px', md: '60px', lg: '0' }}
      >
        <SkillsSection />
        <AboutText />
      </Box>
      <AboutGrid />
      {/* <StyledScrollDiv
        mt={'40px'}
        width={'100%'}
        underline="none"
        href="#RecentWork"
      >
        <Box
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
        </Box>
      </StyledScrollDiv> */}
    </StyleBoxWrapper>
  );
};
export default About;
