import { Box, styled } from '@mui/material';
import dotsSvg from '../../assets/svgs/dots-svg.svg';

export const StyledExperienceSection = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '40px 0px 40px 0px',
  '& .experience-section-text': {
    margin: '20px 0px 20px 70px',
    position: 'relative',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
    '&:before': {
      content: '" "',
      backgroundImage: `url(${dotsSvg})`,
      display: 'block',
      height: 37,
      left: '-14px',
      top: '-14px',
      position: 'absolute',
      width: 37,
    },
  },
  '& .grid': {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

    '& .grid-item': {
      minHeight: 655,
      borderRadius: 10,
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 'fit-content',
      background: '#0037478f',

      '& .dot': {
        position: 'absolute',
        top: -18,
        left: -2,
      },
      '& .line': {
        position: 'absolute',
        width: 3,
        height: '100%',
        background: 'white',
        top: 12,
        left: 5,
      },
      '& .grid-item-wrapper': {
        display: 'flex',
        gap: '25px',
      },
      '& .content-wrapper': {},
    },
  },

  [theme.breakpoints.down(1200)]: {},
}));
