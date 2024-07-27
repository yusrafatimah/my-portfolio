import { Box, styled } from '@mui/material';
import dotsSvg from '../../assets/svgs/dots-svg.svg';

export const StyledCard = styled(Box)`
  position: relative;
  cursor: pointer;
  :hover {
    .details {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.3s ease-in-out;
    }
    .more {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    .hover-section {
      opacity: 0.85;
      transition: all 0.3s ease-in-out;
    }
    .top-badge {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  }
  .hover-section {
    background: #7a7ae7;
    top: 0;
    position: absolute;
    height: 250px;
    width: 300px;
    opacity: 0;
    border-radius: 20px;
  }
  .details {
    position: absolute;
    left: 25px;
    opacity: 0;
    top: 60px;
    transition: all 0.3s ease-in-out;
    transform: translateY(30px);
    letter-spacing: 2px;
  }
  .more {
    color: #fff;
    font-size: 20px;
    background: #ffd15c;
    border-radius: 100%;
    height: 40px;
    line-height: 42px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 40px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: white;
    }
  }
  .top-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 45px;
    border-radius: 0 0 20px 20px;
    background-color: #ff4c60;
    position: absolute;
    top: 0;
    right: 30px;
    opacity: 0;
  }
`;
export const StyledRecentWork = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '&:hover': {
    '& .recent-work-text': {
      letterSpacing: '10px',
      transition: 'all 0.3s ease',
    },
  },
  '& .recent-work-text': {
    margin: '0 70px',
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
  '& .card-grid': {
    gap: '40px',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 1000,
    width: '100%',
    '& .card': {
      img: {
        borderRadius: '20px',
        width: '300px',
        height: '250px',
        objectFit: 'contain',
        background: 'white',
      },
    },
  },
  [theme.breakpoints.down(1200)]: {},
}));
