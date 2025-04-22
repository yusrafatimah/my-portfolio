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
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      height={'auto'}
      width={width}
      margin={margin}
      className="animated-button"
      id="animated-btn"
    >
      <Box
        class="button"
        id="custom-button"
        sx={{
          height: height,
          border:
            type === 'heroButton'
              ? `2px solid ${theme.palette.text.heroBtn}`
              : `2px solid  ${theme.palette.text.btn}`,
          borderRadius: '50px',
          fontSize: fontSize,
          textTransform: 'uppercase',
        }}
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
