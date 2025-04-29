import { Box, styled } from '@mui/material';
import dotsSvg from '../../assets/svgs/dots-svg.svg';

export const StyleBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '&:hover': {
    // '& .inner-images': {
    //    animation: widthLarge 1.5s linear 1;
    //   transform: scale(1.1);
    // },
    '& .about-me-text': {
      letterSpacing: '10px',
      transition: 'all 0.3s ease',
    },
  },
  '& .about-me-text': {
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
  [theme.breakpoints.down(1200)]: {},
}));

export const StyledAboutTextSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.blob,
  boxShadow: '0 5px 20px 0 rgba(69, 67, 96, .1)',
  borderRadius: '20px',
  [theme.breakpoints.down(1200)]: {},
}));

export const StyledSkillsAnimation = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.breakpoints.down(660)} {
    // background: #224f5b;
    // border-radius: 50%;
  }
  .blob-svg {
    position: absolute;
    height: auto;
    width: 650px;
    z-index: -1;
    ${props => props.theme.breakpoints.down(660)} {
      width: 100%;
    }
  }
  .main-orbit {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .inner-images {
      animation: widthLarge 1.5s linear 1;
      transform: scale(1.1);
      ${props => props.theme.breakpoints.down(660)} {
        transform: scale(0.97);
      }
      ${props => props.theme.breakpoints.down(400)} {
        transform: scale(0.7);
      }
      border-radius: 50%;
      position: relative;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      .rotating-orbits {
        animation: rotate 30s linear infinite;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        .flip-image {
          animation: beat 1.5s ease infinite alternate;
          cursor: pointer;
          height: 60px;
          width: 60px;
          background-color: transparent;
          perspective: 1000px;
          .flip-image-inner {
            position: relative;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            .flip-front {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              color: black;
              img {
                animation: rotate-reverse 50s linear infinite;
                object-fit: cover;
                height: 100%;
                width: 100%;
                border-radius: 50%;
              }
            }
            .flip-back {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              background: ${({ theme }) => theme.palette.background.blob};
              color: white;
              border-radius: 50%;
              transform: rotateY(180deg);
              p {
                animation: rotate-reverse 50s linear infinite;
                font-weight: 400;
                font-size: 10px;
              }
            }
          }
        }
        .flip-image:hover .flip-image-inner {
          transform: rotateY(180deg);
        }
      }
      .waviy {
        -webkit-box-reflect: below -35px linear-gradient(transparent, rgba(0, 0, 0, 0.3));
        position: absolute;
      }
      .waviy span {
        position: relative;
        display: inline-block;
        color: #fff;
        animation: waviy 1s infinite;
        animation-delay: calc(0.1s * var(--i));
        font-size: 15px;
      }
      .image-1 {
        position: relative;
        display: none;
        height: 60px;
        width: 60px;
        img {
          height: 60px;
          width: 60px;
          border-radius: 10px;
        }
      }
    }

    .img-1 {
      transform: translate(116px, -6px);
    }
    .img-2 {
      transform: translate(205px, -33px);
    }
    .img-3 {
      transform: translate(20px, -78px);
    }
    .img-4 {
      transform: translate(-4px, -49px);
    }
    .img-5 {
      transform: translate(33px, -27px);
    }
    .img-6 {
      transform: translate(118px, -55px);
    }
    .img-7 {
      transform: translate(204px, -152px);
    }
    .img-8 {
      transform: translate(241px, -295px);
    }
  }
  @keyframes waviy {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-2px);
    }
  }
`;

export const StyledAboutGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: '30px',
  '& .grid-wrapper': {
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: 60,
      height: 'auto',
      path: {
        fill: 'white',
      },
    },
    '& .image': {
      width: 60,
      height: 60,
      borderRadius: '20%',
    },
  },
  [theme.breakpoints.down(1200)]: {},
}));
