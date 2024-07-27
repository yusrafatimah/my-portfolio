import { Box, styled } from '@mui/material';

export const MainSection = styled(Box)(() => ({
  '& .wave-svg': {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    path: {
      stroke: '#633974',
    },
  },
}));
