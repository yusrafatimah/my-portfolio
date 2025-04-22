import { Box, Link, styled } from '@mui/material';

export const StyledHomeSection = styled(Box)`
  .container-fluid {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
  }
  .chameleon-svg {
    z-index: 2;
    height: fit-content;
    width: fit-content;
  }
  .home-animate-eye-square {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${props => props.theme.breakpoints.down(1200)} {
      justify-content: center;
    }
    .home-animate-eye-square-inner {
      ${props => props.theme.breakpoints.down(430)} {
        padding: 0 10px;
        height: 350px;
      }
    }
    .squares {
      height: 80px;
      width: 80px;
      border-radius: 15px;
      position: absolute;
      border-radius: 50%;
    }
    .sq1 {
      background: rgb(34, 163, 195);
      background: linear-gradient(
        0deg,
        rgba(34, 163, 195, 1) 0%,
        rgba(235, 45, 253, 1) 100%
      );
      top: 5px;
      left: -40px;
    }
    .sq2 {
      background: rgb(255, 27, 0);
      background: linear-gradient(
        0deg,
        rgba(255, 27, 0, 1) 0%,
        rgba(214, 14, 255, 1) 100%
      );
      top: 5px;
      right: -40px;
    }
    .sq3 {
      bottom: -40px;
      left: -40px;
      background: rgb(230, 32, 241);
      background: linear-gradient(
        0deg,
        rgba(230, 32, 241, 1) 0%,
        rgba(249, 203, 4, 1) 100%
      );
    }
    .sq4 {
      background: rgb(32, 200, 241);
      background: linear-gradient(
        0deg,
        rgba(32, 200, 241, 1) 0%,
        rgba(129, 218, 165, 1) 100%
      );
      bottom: -40px;
      right: -40px;
    }
    .eye-inner-div {
      width: 500px;
      height: 470px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.palette.background.blob};
      background-image: repeating-linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px,
        transparent 6px
      );
      border-radius: 82% 85% 35% 40% /78%;
      background-size: 4px 4px;
      position: relative;
      ${props => props.theme.breakpoints.down(530)} {
        width: 100%;
      }
      ${props => props.theme.breakpoints.down(450)} {
        height: 350px;
      }
      .screen {
        width: 350px;
        height: 280px;
        background: #2d2c2c;
        border-radius: 5px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        ${props => props.theme.breakpoints.down(530)} {
          width: 300px;
          height: 200px;
        }
        .screen-inner {
          margin-top: 20px;
          width: 320px;
          height: 220px;
          background: #5b5b5b;
          border-radius: 5px;
          ${props => props.theme.breakpoints.down(530)} {
            width: 250px;
            height: 150px;
          }
        }
        .stand {
          height: 20px;
          width: 125px;
          background: #2d2c2c;
          position: absolute;
          bottom: 45px;
          border-radius: 5px;
          ${props => props.theme.breakpoints.down(530)} {
            bottom: 82px;
          }
          ${props => props.theme.breakpoints.down(450)} {
            bottom: 23px;
          }
        }
        .base {
          height: 35px;
          width: 95px;
          background: #2d2c2c;
          position: absolute;
          bottom: 58px;
          border-radius: 10px;
          ${props => props.theme.breakpoints.down(530)} {
            bottom: 95px;
          }
          ${props => props.theme.breakpoints.down(450)} {
            bottom: 35px;
          }
        }
        .button {
          height: 20px;
          width: 20px;
          position: absolute;
          background: #9e9e9e;
          border-radius: 50%;
          bottom: 105px;
          // -webkit-animation: ring 4s 0.7s ease-in-out infinite;
          // -webkit-transform-origin: 50% 4px;
          // -moz-animation: ring 4s 0.7s ease-in-out infinite;
          // -moz-transform-origin: 50% 4px;
          // animation: ring 4s 0.7s ease-in-out infinite;
          ${props => props.theme.breakpoints.down(530)} {
            bottom: 140px;
          }
          ${props => props.theme.breakpoints.down(450)} {
            bottom: 80px;
          }
        }
      }
      .border {
        height: 20px;
        width: 15px;
        position: absolute;
        background: #2d2c2c;
      }
      .left {
        left: 75px;
        top: 220px;
      }
      .right {
        right: 75px;
        top: 305px;
      }
    }
  }
  .background {
    position: relative;
    background: transparent;
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0px;
  }
  .cube {
    border-radius: 1px;
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 0.1px ${({ theme }) => theme.palette.text.neon};
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 18s ease-in forwards infinite;
  }

  .cube:nth-child(2) {
    animation-delay: 0.1s;
    left: 50vw;
    top: 40vh;
  }
  .cube:nth-child(3) {
    animation-delay: 0.2s;
    left: 75vw;
    top: 50vh;
  }
  .cube:nth-child(4) {
    animation-delay: 0.3s;
    left: 90vw;
    top: 10vh;
  }
  .cube:nth-child(5) {
    animation-delay: 0.4s;
    left: 10vw;
    top: 85vh;
  }
  .cube:nth-child(6) {
    animation-delay: 0.5s;
    left: 50vw;
    top: 10vh;
  }
  .cube:nth-child(7) {
    animation-delay: 0.7s;
    left: 35vw;
    top: 60vh;
  }
  .cube:nth-child(8) {
    animation-delay: 0.9s;
    left: 85vw;
    top: 90vh;
  }
  .cube:nth-child(9) {
    animation-delay: 0.11s;
    left: 150vw;
    top: 20vh;
  }
  .cube:nth-child(10) {
    animation-delay: 0.13s;
    left: 5vw;
    top: 35vh;
  }
  .cube:nth-child(11) {
    animation-delay: 0.15s;
    left: 95vw;
    top: 15vh;
  }
`;

export const StyledCodeSection = styled(Box)`
  margin: 20px 0 0 10px;
  .code-tag {
    color: #02c6b3;
    font-size: 11px;
    font-family: monaco;
    line-height: 1.3;
  }
  .code-text {
    color: #ffffff;
    font-size: 9.6px;
    font-family: monaco;
    line-height: 1.3;
  }
  .code-syntax {
    color: #ff56f2;
  }
  .code-syntax-a {
    color: #79c942;
  }
`;

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  position: 'relative',
  '& .intro-text-wrap': {
    [theme.breakpoints.down(1200)]: { maxWidth: '700px' },
  },
  '& .avatar-img': {
    borderRadius: '50%',
  },
  '& .intro-text': {
    textShadow: `2px 2px ${theme.palette.text.shadow}`,
    [theme.breakpoints.down(600)]: { fontSize: '20px' },
  },
  '& .name-text': {
    fontFamily: ` "Playwrite BE VLG", cursive !important`,
    fontSize: '55px',
    color: theme.palette.text.default,
    fontWeight: 600,
    margin: '20px 0',
    [theme.breakpoints.down(600)]: { fontSize: '35px' },
    '& .first-letter': {
      fontSize: '75px',
      fontWeight: 700,
      textShadow:
        theme.palette.mode === 'light'
          ? '5px 5px 0px #02c6b3, 9px 6px 0px #2d6373'
          : `5px 5px 0px #2d6373, 9px 6px 0px ${theme.palette.text.neonBold} `,
      [theme.breakpoints.down(600)]: { fontSize: '50px' },
    },
  },
  '& .wipe-animated-text': {
    textShadow: '2px 2px black',
    color: theme.palette.mode === 'light' ? '#00c6b3' : 'white',
    width: 0,
    maxWidth: 'max-content',
    overflow: 'hidden',
    borderRight: '.05em solid #464545',
    whiteSpace: 'nowrap',
    margin: 0,
    animation:
      '6s typing-erase 2s steps(50, end) infinite, blink-caret .5s step-end infinite',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
  },
  '& .social-platform-wrapper': {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    svg: {
      fill: 'white',
      transition: 'all 0.3s ease',
      '&:hover': {
        fill: '#00ffbc',
        transition: 'all 0.3s ease',
      },
    },
  },

  [theme.breakpoints.down(1200)]: {},
}));

export const StyledScrollDiv = styled(Link)(({ theme }) => ({
  '& .styled-scroll-div': {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down(1200)]: {
      display: 'none',
    },
    '&:hover': {
      '& .scroll-text': {
        letterSpacing: '10px',
        transition: 'all 0.3s ease',
      },
    },
    '& .scroll-text': {
      color: 'white',
      letterSpacing: '2px',
      transition: 'all 0.3s ease',
      marginBottom: '15px',
    },
    '& .cursor-outer': {
      height: 30,
      width: 20,
      border: '2px solid white',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .animated-blob': {
        width: 6,
        height: 6,
        background: 'white',
        borderRadius: '50%',
        animation: 'moverUpDown 2s infinite  alternate',
      },
    },
  },
}));
