import { Box, Typography, styled } from '@mui/material';

export const StyledButton = styled(Box)`
  position: relative;
  background: #ff4c60;
  display: inline-flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow: hidden;
  cursor: pointer;
  :hover {
    .dub-arrow {
      left: 0;
    }
    a {
      left: 150px;
    }
  }
  svg {
    height: auto;
  }
  a {
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
    position: relative;
    left: 0;
    transition: all 0.35s ease-Out;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;
  }

  .dub-arrow {
    width: 100%;
    height: 100%;
    background: white;
    left: -200px;
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease-Out;
    bottom: 0;
    fill: #ff4c60;
  }
`;

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(1200)]: {},
}));
