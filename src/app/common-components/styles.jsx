import { Box, Typography, styled } from '@mui/material';

export const StyledButton = styled(Box)`
  .custom-button {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  p {
    text-decoration: none;
    letter-spacing: 1px;
  }
  a {
    position: relative;
    z-index: 1;
    text-decoration: none;
    letter-spacing: 1px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #custom-button {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #custom-button p {
    position: relative;
    transition: all 0.45s ease-Out;
  }

  #translate {
    transform: rotate(50deg);
    width: 100%;
    height: 275%;
    left: -200px;
    top: -30px;
    background: ${({ theme }) => theme.palette.text.btn};
    position: absolute;
    transition: all 0.3s ease-Out;
  }

  #custom-button:hover #translate {
    left: 2px;
  }

  #custom-button:hover p {
    color: ${({ theme }) => theme.palette.text.secondary} !important;
  }
  #custom-button:hover a {
    color: ${({ theme }) => theme.palette.text.secondary}!important;
  }
`;

export const StyledTypography = styled(Typography)(({ theme, color }) => ({
  [theme.breakpoints.down(1200)]: {},
  color:
    color === 'light'
      ? theme.palette.text.tertiary
      : color === 'white'
        ? theme.palette.text.secondary
        : color,
}));
