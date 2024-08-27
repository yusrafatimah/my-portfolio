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
  fontFamily,
}) => {
  return (
    <StyledTypography
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      className={className}
      margin={margin}
      lineHeight={lineHeight}
      sx={{ cursor: cursor }}
    >
      {text}
    </StyledTypography>
  );
};

export default Text;
