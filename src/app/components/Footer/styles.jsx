import { Box, styled } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.background.secondary,
  padding: '150px 0 50px 0',
  clipPath: 'polygon(0% 52%, 120% -10%, 100% 100%, 100% 100%, 0% 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '30px',

  '& .social-platform-wrapper': {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    a: {
      svg: {
        fill: 'white',
        transition: 'all 0.3s ease',
        '&:hover': {
          fill: '#00ffbc',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
}));
