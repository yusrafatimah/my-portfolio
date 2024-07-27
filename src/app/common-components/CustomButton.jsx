import React from 'react';
import { Box, Link } from '@mui/material';
import { StyledButton } from './styles';

const CustomButton = ({
  svg,
  text,
  url,
  height,
  width,
  fontWeight,
  fontSize,
  margin,
}) => {
  return (
    <StyledButton
      className="animated-button"
      id="animated-btn"
      height={height}
      width={width}
      margin={margin}
    >
      <Box className="dub-arrow">{svg}</Box>
      <Link
        fontSize={fontSize}
        fontWeight={fontWeight}
        target="_blank"
        rel="noreferrer"
        href={url}
      >
        {text}
      </Link>
    </StyledButton>
  );
};

export default CustomButton;
