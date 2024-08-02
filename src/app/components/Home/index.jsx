import { Box, Link } from '@mui/material';
import React from 'react';
import {
  StyledHomeSection,
  StyledMainWrapper,
  StyledScrollDiv,
} from './styles';
import ContentSection from './ContentSection';
import Text from '../../common-components/Text';

const Home = () => {
  return (
    <StyledHomeSection
      id="otherElement"
      className={'home-section'}
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      position={'relative'}
    >
      <Box class="container-fluid">
        <Box class="background">
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
          <Box class="cube"></Box>
        </Box>
      </Box>
      <StyledMainWrapper
        flexDirection={'column'}
        className="styled-main-wrapper"
      >
        <Box paddingLeft={'80px'}>
          <ContentSection />
        </Box>
        <Link width="100%" height="100%" underline="none" href="#AboutMe">
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
              text={'SEE ABOUT'}
            />
            <div className="cursor-outer">
              <div className="animated-blob"></div>
            </div>
          </StyledScrollDiv>
        </Link>
      </StyledMainWrapper>
      <Box height={'200px'}></Box>
    </StyledHomeSection>
  );
};

export default Home;
