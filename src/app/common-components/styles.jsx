import { Box, Typography, styled } from '@mui/material';

export const StyledButton = styled(Box)`
  .button {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.palette.text.primary};
    border-radius: 50px;
    color: ${({ theme }) => theme.palette.text.primary};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  p {
    color: ${({ theme }) => theme.palette.text.primary};
    text-decoration: none;
    letter-spacing: 1px;
  }
  a {
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.palette.text.primary};
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
    background: ${({ theme }) => theme.palette.text.primary};
    position: absolute;
    transition: all 0.3s ease-Out;
  }

  #custom-button:hover #translate {
    left: 2px;
  }

  #custom-button:hover p {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
  #custom-button:hover a {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledTypography = styled(Typography)(({ theme, color }) => ({
  [theme.breakpoints.down(1200)]: {},
  color: color === 'light' ? theme.palette.text.tertiary : color,
}));
