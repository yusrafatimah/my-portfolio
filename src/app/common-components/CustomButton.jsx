import React from 'react';
import { Box } from '@mui/material';
import { StyledButton } from './styles';

const CustomButton = ({
  text,
  height,
  width,
  fontWeight,
  fontSize,
  margin,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      margin={margin}
      className="animated-button"
      id="animated-btn"
    >
      <Box class="button" id="button-5">
        <Box id="translate"></Box>
        <p style={{ fontWeight: fontWeight, fontSize: fontSize }}> {text}</p>
      </Box>
    </StyledButton>
  );
};

export default CustomButton;
