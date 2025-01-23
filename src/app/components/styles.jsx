import { Box, styled } from '@mui/material';
import cursorSvg from '../assets/svgs/cursor.svg';

export const MainSection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url(${cursorSvg}), auto;
  background: linear-gradient(
    132deg,
    ${({ theme }) => theme.palette.background.bgCl1},
    ${({ theme }) => theme.palette.background.bgCl2},
    ${({ theme }) => theme.palette.background.bgCl3}
  );
  .wave-svg {
    position: absolute;
    z-index: 1;
    width: 100%;
    path {
      stroke: #633974;
    }
  }

  .wave {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0px;
    width: 100%;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background-repeat: repeat-x;
    }

    &::before {
      height: 10px;
      background-size: 20px 20px;
      background-image: radial-gradient(
        circle at 10px -5px,
        transparent 12px,
        #1f5566 13px
      );
    }

    &::after {
      height: 15px;
      background-size: 40px 20px;
      background-image: radial-gradient(
        circle at 10px 15px,
        #1f5566 12px,
        transparent 13px
      );
    }
  }

  .wave--top {
    background: linear-gradient(to top, sandybrown, chocolate);
    &::before,
    &::after {
      // to take place in top instead of bottom
      bottom: auto;
      top: 0;
    }
    &::before {
      background-image: radial-gradient(
        circle at 10px 15px,
        transparent 12px,
        #1f5566 13px
      );
    }
    &::after {
      background-image: radial-gradient(
        circle at 10px 0,
        #1f5566 12px,
        transparent 13px
      );
    }
  }
`;
