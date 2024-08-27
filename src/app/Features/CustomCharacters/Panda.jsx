import React from 'react';
import { StyledPandaWrapper } from './styles';
import { Box } from '@mui/material';

const Panda = () => {
  return (
    <StyledPandaWrapper position={'relative'}>
      <Box className={'head'}>
        <Box class="tri alt"></Box>
        <Box className={'eyes eye-1'}>
          <Box className={'inner-eye e-1'}>
            <Box className={'eye-ball e1'}></Box>
          </Box>
        </Box>
        <Box className={'eyes eye-2'}>
          <Box className={'inner-eye e-2'}>
            <Box className={'eye-ball e2'}></Box>
          </Box>
        </Box>
        <Box className={'nose'}></Box>
      </Box>
      <Box className={'ears ear1'}></Box>
      <Box className={'ears ear2'}></Box>
      <Box className={'body'}>
        <Box className={'belly'}>
          <Box className={'belly-inner'}></Box>
        </Box>
      </Box>
      <Box className={'feet foot1'}>
        <Box className={'paw paw1'}></Box>
      </Box>
      <Box className={'feet foot2'}>
        <Box className={'paw paw2'}></Box>
      </Box>
      <Box className={'arms arm1'}></Box>
      <Box className={'arms arm2'}></Box>
    </StyledPandaWrapper>
  );
};

export default Panda;
