import React from 'react';
import { Box } from '@mui/material';
import { StyledButton } from './styles';

const CustomButton = ({
  url,
  type,
  text,
  height,
  width,
  fontWeight,
  fontSize,
  margin,
  downloadTitle,
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      margin={margin}
      className="animated-button"
      id="animated-btn"
    >
      <Box class="button" id="custom-button">
        <Box id="translate"></Box>
        {type === 'link' ? (
          <a
            href={require('../assets/docs/Yusra_Fatima_Senior_Dev_Resume.pdf')}
            download={downloadTitle}
          >
            {text}
          </a>
        ) : (
          <p style={{ fontWeight: fontWeight, fontSize: fontSize }}> {text}</p>
        )}
      </Box>
    </StyledButton>
  );
};

export default CustomButton;
