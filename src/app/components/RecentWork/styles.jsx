import { Box, Grid, styled } from '@mui/material';
import dotsSvg from '../../assets/svgs/dots-svg.svg';

export const StyledCard = styled(Box)`
  position: relative;
  cursor: pointer;
  :hover {
    .details {
      transform: translateY(0);
      transition: all 0.3s ease-in-out;
    }
    .more {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
    .hover-section {
      transition: all 0.3s ease-in-out;
    }
    .top-badge {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  }
  .hover-section {
    background: rgb(3 169 126 / 68%);
    top: 0;
    position: absolute;
    height: 300px;
    width: 300px;
    opacity: 1;
    border-radius: 20px;
    ${props => props.theme.breakpoints.down(480)} {
      width: 90%;
    }
  }
  .details {
    position: absolute;
    left: 25px;
    opacity: 1;
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
    width: fit-content;
    padding: 0 6px;
    border-radius: 0 0 20px 20px;
    background-color: #ff4c60;
    position: absolute;
    top: 0;
    right: 30px;
    opacity: 1;
  }
`;
export const StyledRecentWork = styled(Box)(({ theme }) => ({
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
  '& .recent-work-wrap': {
    '&:hover': {
      '& .arrow-icon': {
        opacity: 1,
        transition: 'all 0.3s ease',
      },
    },
  },
  '& .arrow-icon': {
    opacity: 0,
    position: 'absolute',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    zIndex: 1,
    top: '170px',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
    svg: {
      width: 50,
      height: 'auto',
    },
  },
  '& .next': {
    right: 3,
  },
  '& .back': {
    left: 3,
  },
  '& .recent-work-text': {
    margin: '0 0 20px 70px',
    position: 'relative',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down(1200)]: { margin: '0 0 20px 30px' },
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
    flexWrap: 'wrap',
    padding: '60px 0 100px 0',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '70px',
    justifyContent: 'center',
    width: '100%',
    '& .card': {
      [theme.breakpoints.down(480)]: {
        display: 'flex',
        justifyContent: 'center',
      },
      img: {
        borderRadius: '20px',
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        background: 'white',
        [theme.breakpoints.down(480)]: { width: '90%' },
      },
    },
  },
  [theme.breakpoints.down(1200)]: {},
}));

export const CardContainer = styled(Grid)`
  display: flex;
  width: 100%;
  padding: 50px;
  ${props => props.theme.breakpoints.down(1200)} {
    padding: 30px;
  }
`;

export const Card = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  gap: 14px;
`;

export const Tags = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 17px 0;
`;

export const Tag = styled('span')`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) =>
    theme.palette.mode === 'light' ? '#00ffbc' : '#02c6b3'};
  background-color: ${({ theme }) =>
    theme.palette.mode === 'light' ? '#139588' : '#02c6b315'};
  padding: 2px 8px;
  border-radius: 10px;
`;

export const Details = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
export const Title = styled('div')`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.tertiary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled('div')`
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.tertiary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Description = styled('div')`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.tertiary};
  overflow: hidden;
  margin-top: 8px;
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
`;
