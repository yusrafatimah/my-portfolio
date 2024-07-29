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
  cursor,
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
        sx={{ cursor: cursor }}
      >
        {text}
      </Typography>
    </StyledTypography>
  );
};

export default Text;
