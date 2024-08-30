import React from 'react';
import { StyledChameleonAnimationSection } from './styles';
import { Box } from '@mui/material';

const Chameleon = () => {
  return (
    <StyledChameleonAnimationSection>
      <Box id="box">
        <Box class="cat">
          <Box class="cat-head">
            <Box class="cat-ears">
              <Box class="cat-ear right"></Box>
            </Box>
            <Box class="cat-eyes">
              <Box class="cat-eye right">
                <Box id="eyeball" class="eye-inner"></Box>
              </Box>
            </Box>
            <Box class="muzzle">{/* <Box class="cat-nose"></Box> */}</Box>
          </Box>
          <Box className="dot dot1"></Box>
          <Box className="dot dot2"></Box>
          <Box className="dot dot3"></Box>
          <Box className="dot dot4"></Box>
          <Box className="dot dot5"></Box>
          <Box class="cat-body"></Box>
          <Box className="paws p1">
            <Box class="cat-paw cat-paw1"></Box>
            <Box class="cat-paw cat-paw2"></Box>
          </Box>
          <Box className="paws p2">
            <Box class="cat-paw cat-paw1"></Box>
            <Box class="cat-paw cat-paw2"></Box>
          </Box>
          <Box class="tail">
            <Box className="tail-abc"></Box>
            <Box class="tail-segment">
              <Box class="tail-segment">
                <Box class="tail-segment">
                  <Box class="tail-segment">
                    <Box class="tail-segment">
                      <Box class="tail-segment">
                        <Box class="tail-segment">
                          <Box class="tail-segment">
                            <Box class="tail-segment">
                              <Box class="tail-segment">
                                <Box class="tail-segment">
                                  <Box class="tail-segment">
                                    <Box class="tail-segment">
                                      <Box class="tail-segment">
                                        <Box class="tail-segment">
                                          <Box class="tail-segment">
                                            <Box class="tail-segment">
                                              <Box class="tail-segment">
                                                <Box class="tail-segment">
                                                  <Box class="tail-segment">
                                                    <Box class="tail-segment">
                                                      <Box class="tail-segment"></Box>
                                                    </Box>
                                                  </Box>
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledChameleonAnimationSection>
  );
};

export default Chameleon;
