import React from 'react';
import { StyledFoxWrapper } from './styles';
import { faceBlob } from '../../assets/svgs/blob-2';
import { Box } from '@mui/material';

const Fox = () => {
  return (
    <div className="fox-wrap">
      <StyledFoxWrapper>
        <Box className={'fox-ear fox-ear1'}></Box>
        <Box className={'fox-ear fox-ear2'}></Box>
        <Box className={'fox-ear-inner fox-ear1-inner'}></Box>
        <Box className={'fox-ear-inner fox-ear2-inner'}></Box>
        <Box className={'fox-head'}>
          <Box className={'head'}> {faceBlob}</Box>
          <Box className={'inner-eye e-1'}>
            <Box id="eyeball" className={'eye-ball'}></Box>
            <Box className={'e1'}></Box>
          </Box>
          <Box className={'inner-eye e-2'}>
            <Box id="eyeball2" className={'eye-ball'}></Box>
            <Box className={'e2'}></Box>
          </Box>
          <Box className={'cheeks cheek-1'}>{faceBlob}</Box>
          <Box className={'cheeks cheek-2'}>{faceBlob}</Box>
          <Box className={'nose'}></Box>
        </Box>
      </StyledFoxWrapper>
    </div>
  );
};

export default Fox;
