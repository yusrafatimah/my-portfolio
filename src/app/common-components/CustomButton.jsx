import React from 'react';
import { Box } from '@mui/material';
import { StyledButton } from './styles';
import { useTheme } from '@mui/material/styles';

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
  onClick,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      height={'auto'}
      width={width}
      margin={margin}
      className="animated-button"
      id="animated-btn"
      onClick={onClick}
    >
      <Box
        class="button"
        id={type === 'heroButton' ? 'hero-button' : 'custom-button'}
        style={{ height: height }}
        borderRadius={'50px'}
        fontSize={fontSize}
        textTransform="uppercase"
      >
        <Box id="translate"></Box>
        {type === 'link' || type === 'heroButton' ? (
          <a
            href={
              downloadTitle
                ? require('../assets/docs/Yusra_Fatima_Senior_Dev_Resume.pdf')
                : url
            }
            target={'_blank'}
            rel="noreferrer"
            download={downloadTitle}
            style={{
              color:
                type === 'heroButton'
                  ? theme.palette.text.heroBtn
                  : theme.palette.text.btn,
            }}
          >
            {text}
          </a>
        ) : (
          <p
            style={{
              fontWeight: fontWeight,
              fontSize: fontSize,
              color:
                type === 'heroButton'
                  ? theme.palette.text.heroBtn
                  : theme.palette.text.btn,
            }}
          >
            {' '}
            {text}
          </p>
        )}
      </Box>
    </StyledButton>
  );
};

export default CustomButton;
