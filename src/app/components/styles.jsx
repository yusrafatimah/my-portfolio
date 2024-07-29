import { Box, styled } from '@mui/material';
import cursorSvg from '../assets/svgs/cursor.svg';

export const MainSection = styled(Box)(() => ({
  cursor: `url(${cursorSvg}), auto `,
  '& .wave-svg': {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    path: {
      stroke: '#633974',
    },
  },
}));
