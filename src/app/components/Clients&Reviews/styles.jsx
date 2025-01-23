import { Box, styled } from '@mui/material';
import dotsSvg from '../../assets/svgs/dots-svg.svg';

export const StyledClientsAndReviewsSection = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '40px 0px 40px 0px',
  '& .clients-reviews-text': {
    margin: '20px 70px 20px 70px',
    position: 'relative',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down(1200)]: { margin: '20px 0px 20px 30px' },
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

  [theme.breakpoints.down(1200)]: {},
}));

export const StyledCarousalSection = styled(Box)`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    width: 700px;
    position: relative;
    ${props => props.theme.breakpoints.down(1200)} {
      width: 90%;
    }
  }
  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }
  .slide {
    display: inline-block;
    width: 100%;
    height: fit-content;
    p {
      white-space: initial;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 1.5rem;
      .MuiAvatar-root::before {
      }
    }
    .flex-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      .review {
        width: 90%;
        ${props => props.theme.breakpoints.down(750)} {
          width: 80%;
        }
        background: #0037478f;
        padding: 30px;
        border-radius: 10px;
        p {
          text-align: center;
        }
      }
    }
  }
  .slideshowDots {
    text-align: center;
    margin-top: 50px;
  }
  .slideshowDot {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    border: 1.5px solid white;
    transition: 0.3s all ease;
  }
  .slideshowDot.active {
    border-radius: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.palette.text.primary};
    transition: 0.3s all ease;
  }

  @keyframes particlerotate1 {
    0% {
      transform: translate(0, 0) rotate(0deg);
      -webkit-transform: translate(0, 0) rotate(0deg);
    }

    25% {
      transform: translate(-10px, 10px) rotate(10deg);
      -webkit-transform: translate(-10px, 10px) rotate(10deg);
    }
    50% {
      transform: translate(5px, -5px) rotate(25deg);
      -webkit-transform: translate(5px, -5px) rotate(25deg);
    }
    75% {
      transform: translate(15px, -5px) rotate(15deg);
      -webkit-transform: translate(15px, -5px) rotate(15deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
      -webkit-transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }
`;
