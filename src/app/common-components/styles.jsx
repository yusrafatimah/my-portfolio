import { Box, Typography, styled } from '@mui/material';

export const StyledButton = styled(Box)`
  .button {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #00ffbc;
    border-radius: 50px;
    color: #00ffbc;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  p {
    color: #00ffbc;
    text-decoration: none;
    letter-spacing: 1px;
  }
  a {
    position: relative;
    z-index: 1;
    color: #00ffbc;
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
    height: 250%;
    left: -200px;
    top: -30px;
    background: #00ffbc;
    position: absolute;
    transition: all 0.3s ease-Out;
  }

  #custom-button:hover #translate {
    left: 0;
  }

  #custom-button:hover p {
    color: #2d3142;
  }
  #custom-button:hover a {
    color: #2d3142;
  }
`;

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(1200)]: {},
}));
