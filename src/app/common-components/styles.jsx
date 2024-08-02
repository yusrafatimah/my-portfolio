import { Box, Typography, styled } from '@mui/material';

export const StyledButton = styled(Box)`
  .button {
    height: inherit;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #00ffbc;
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
  #button-5 {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #button-5 p {
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

  #button-5:hover #translate {
    left: 0;
  }

  #button-5:hover p {
    color: #2d3142;
  }
`;

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(1200)]: {},
}));
