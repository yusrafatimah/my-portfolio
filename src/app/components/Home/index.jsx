import { Box } from '@mui/material';
import React from 'react';
import {
  StyledCodeSection,
  StyledHomeSection,
  StyledMainWrapper,
  StyledScrollDiv,
} from './styles';
import ContentSection from './ContentSection';
import Text from '../../common-components/Text';
import BirdAnimationSection from '../../Features/CustomCharacters/BirdAnimation';

const Home = () => {
  var eyeball = document.getElementById('eyeball');
  let posX;
  let posY;
  document.addEventListener('mousemove', event => {
    posX = event.clientX - window.innerWidth / 2;
    posY = event.clientY - window.innerHeight / 2;
    if (eyeball) {
      eyeball.style.transform =
        'translate(' + posX * 0.05 + '%, ' + posY * 0.05 + '%)';
      console.log('here2', posX, posY, eyeball);
    }
  });

  return (
    <StyledHomeSection
      id="homeSection"
      className={'home-section'}
      width={'100%'}
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100vh' }}
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
      <Box
        width={'100%'}
        // height={'100%'}
        display={'flex'}
        alignItems={'center'}
        gap={{ xs: '40px', sm: '40px', md: '80px', lg: 0 }}
        paddingTop={{ xs: '5%', sm: '5%', md: '5%', lg: '0' }}
        flexDirection={{
          xs: 'column-reverse',
          sm: 'column-reverse',
          md: 'column-reverse',
          lg: 'row',
        }}
      >
        <StyledMainWrapper
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '45%' }}
          className="styled-main-wrapper"
        >
          <Box
            className={'intro-text-wrap'}
            padding={{
              xs: '0',
              sm: '0 7.5%',
              md: '0 0 0 7.5%',
              lg: '0 0 0 7.5%',
            }}
          >
            <ContentSection />
          </Box>
        </StyledMainWrapper>

        <Box
          className={'home-animate-eye-square'}
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '55%' }}
          height={'100%'}
        >
          <Box
            className={'home-animate-eye-square-inner'}
            width={'500px'}
            height={'470px'}
            position={'relative'}
            marginRight={{ md: 0, lg: ' 7.5%' }}
          >
            <Box id="container" className={'eye-inner-div'}>
              <div className="screen">
                <div className="screen-inner">
                  <BirdAnimationSection height={'100%'} scale={'scale(.5)'} />
                  <StyledCodeSection className="styled-code-section">
                    <Text
                      fontSize={16}
                      fontWeight={700}
                      lineHeight={{
                        xs: 1.2,
                        sm: 1.7,
                        md: 1.7,
                        lg: 1.7,
                      }}
                      color={'white'}
                      text={
                        <span>
                          <span className="code-tag">{'let'}</span>

                          <code className="code-text">
                            {' myProfile'}
                            <span className="code-tag">{' = '}</span>
                            <span className="code-syntax">{'{ }'}</span>;
                            <br />
                            {'myProfile'}
                            <span className="code-tag">{'.'}</span>
                            {'name'}
                            <span className="code-tag">{' = '}</span>
                            {'"Yusra";'}
                            <br />
                            <span>
                              {'myProfile'}
                              <span className="code-tag">{'.'}</span>
                              {'skills ='}
                              <span className="code-syntax">{'['}</span>
                              <span className="code-syntax-a">
                                {`'ReactJS', 
                                  'CSS3',
                                  'JavaScript',
                                  'Typescript', 'TailwindCss'`}
                              </span>
                              <span className="code-syntax">{']'}</span>;
                            </span>
                            <br />
                          </code>
                        </span>
                      }
                    />
                  </StyledCodeSection>
                </div>
                <div className="stand"></div>
                <div className="base"></div>
                <div className="button">
                  <div className="button-in"></div>
                </div>
              </div>

              {false && (
                <Box className={'eye-animation'}>
                  <Box className={'eye-lash eye-lash-1'}></Box>
                  <Box className={'eye-lash eye-lash-2'}></Box>
                  <Box className={'eye-lash eye-lash-3'}></Box>

                  <Box id="square1" className={'eye-body moving-eye'}>
                    <Box className={'eye-ball'}></Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <StyledScrollDiv
        sx={{ zIndex: 1, height: 'fit-content' }}
        width="100%"
        height="100%"
        underline="none"
        href="#AboutMe"
        mt={'80px'}
      >
        <Box
          className="styled-scroll-div"
          display={'flex'}
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
        >
          <Text
            className="scroll-text"
            margin={'0 0 10px 0'}
            fontSize={14}
            fontWeight={500}
            color={'white'}
            text={'MORE ABOUT ME'}
          />
          <div className="cursor-outer">
            <div className="animated-blob"></div>
          </div>
        </Box>
      </StyledScrollDiv>
    </StyledHomeSection>
  );
};
export default Home;
