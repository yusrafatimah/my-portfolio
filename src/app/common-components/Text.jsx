import { Typography } from '@mui/material';
import React from 'react';
import { StyledTypography } from './styles';

const Text = ({
  fontSize,
  fontWeight,
  color,
  text,
  className,
  margin,
  lineHeight,
}) => {
  return (
    <StyledTypography>
      <Typography
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        className={className}
        margin={margin}
        lineHeight={lineHeight}
      >
        {text}
      </Typography>
    </StyledTypography>
  );
};

export default Text;
