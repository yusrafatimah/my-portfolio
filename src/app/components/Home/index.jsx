import { Box, Link } from '@mui/material';
import React from 'react';
import {
  StyledCatAnimationSection,
  StyledHomeSection,
  StyledMainWrapper,
  StyledScrollDiv,
} from './styles';
import ContentSection from './ContentSection';
import Text from '../../common-components/Text';

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
      id="otherElement"
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
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        gap={{ xs: '40px', sm: '40px', md: '80px', lg: 0 }}
        paddingTop={{ xs: '5%', sm: '5%', md: '5%', lg: 0 }}
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
          <Box paddingLeft={'7.5%'}>
            <ContentSection />
          </Box>
        </StyledMainWrapper>

        {/* <Box className={'chameleon-svg'}>{chameleonSvg}</Box> */}

        <Box
          className={'home-animate-eye-square'}
          width={{ xs: '100%', sm: '100%', md: '100%', lg: '55%' }}
          height={'100%'}
        >
          <Box width={'500px'} height={'470px'} position={'relative'}>
            {/* <Box className={'squares sq1'}></Box>
            <Box className={'squares sq2'}></Box>
            <Box className={'squares sq3'}></Box>
            <Box className={'squares sq4'}></Box> */}

            <Box
              id="container"
              className={'eye-inner-div'}
              width={'500px'}
              height={'470px'}
            >
              <div className="screen">
                <div className="screen-inner">
                  <StyledCatAnimationSection>
                    <div className="branch">
                      <div className="leaf leaf1"></div>
                    </div>
                    <div id="box">
                      <div class="cat">
                        <div class="cat-head">
                          <div class="cat-ears">
                            {/* <div class="cat-ear left"></div> */}
                            <div class="cat-ear right"></div>
                          </div>
                          <div class="cat-eyes">
                            {/* <div class="cat-eye left"></div> */}
                            <div class="cat-eye right">
                              <div id="eyeball" class="eye-inner"></div>
                            </div>
                          </div>
                          <div class="muzzle">
                            {/* <div class="cat-nose"></div> */}
                          </div>
                        </div>
                        <div className="dot dot1"></div>
                        <div className="dot dot2"></div>
                        <div className="dot dot3"></div>
                        <div className="dot dot4"></div>
                        <div className="dot dot5"></div>
                        <div class="cat-body"></div>
                        <div className="paws p1">
                          <div class="cat-paw cat-paw1"></div>
                          <div class="cat-paw cat-paw2"></div>
                        </div>
                        <div className="paws p2">
                          <div class="cat-paw cat-paw1"></div>
                          <div class="cat-paw cat-paw2"></div>
                        </div>
                        <div class="tail">
                          <div className="tail-abc"></div>
                          <div class="tail-segment">
                            <div class="tail-segment">
                              <div class="tail-segment">
                                <div class="tail-segment">
                                  <div class="tail-segment">
                                    <div class="tail-segment">
                                      <div class="tail-segment">
                                        <div class="tail-segment">
                                          <div class="tail-segment">
                                            <div class="tail-segment">
                                              <div class="tail-segment">
                                                <div class="tail-segment">
                                                  <div class="tail-segment">
                                                    <div class="tail-segment">
                                                      <div class="tail-segment">
                                                        <div class="tail-segment">
                                                          <div class="tail-segment">
                                                            <div class="tail-segment">
                                                              <div class="tail-segment">
                                                                <div class="tail-segment">
                                                                  <div class="tail-segment">
                                                                    <div class="tail-segment"></div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StyledCatAnimationSection>
                </div>
                <div className="border left"></div>
                <div className="border right"></div>
                <div className="stand"></div>
                <div className="base"></div>
                <div className="button"></div>
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
      <Link
        sx={{ zIndex: 1, height: 'fit-content', padding: '30px 0' }}
        width="100%"
        height="100%"
        underline="none"
        href="#AboutMe"
      >
        <StyledScrollDiv
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
        </StyledScrollDiv>
      </Link>
    </StyledHomeSection>
  );
};

export default Home;
