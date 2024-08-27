import { Box, styled } from '@mui/material';

export const StyledHomeSection = styled(Box)`
  .container-fluid {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    background: #fff;
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
    justify-content: center;

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
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2aecb169;
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
      .screen {
        width: 350px;
        height: 280px;
        background: #2d2c2c;
        border-radius: 5px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .screen-inner {
          margin-top: 20px;
          width: 320px;
          height: 220px;
          background: #5b5b5b;
          border-radius: 5px;
        }
        .stand {
          height: 20px;
          width: 125px;
          background: #2d2c2c;
          position: absolute;
          bottom: 45px;
          border-radius: 5px;
        }
        .base {
          height: 35px;
          width: 95px;
          background: #2d2c2c;
          position: absolute;
          bottom: 58px;
          border-radius: 10px;
        }
        .button {
          height: 20px;
          width: 20px;
          position: absolute;
          background: #9e9e9e;
          border-radius: 50%;
          bottom: 105px;
        }
      }
    }
  }
  .background {
    position: relative;
    background: linear-gradient(132deg, #1f5566, #39717f, #1f5566);
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
    border: solid 0.1px #9ce39d;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 18s ease-in forwards infinite;
  }

  .cube:nth-child(2) {
    border-color: #75f277;
    animation-delay: 0.1s;
    left: 50vw;
    top: 40vh;
  }
  .cube:nth-child(3) {
    border-color: #75f277;
    animation-delay: 0.2s;
    left: 75vw;
    top: 50vh;
  }
  .cube:nth-child(4) {
    border-color: #75f277;
    animation-delay: 0.3s;
    left: 90vw;
    top: 10vh;
  }
  .cube:nth-child(5) {
    border-color: #75f277;
    animation-delay: 0.4s;
    left: 10vw;
    top: 85vh;
  }
  .cube:nth-child(6) {
    border-color: #75f277;
    animation-delay: 0.5s;
    left: 50vw;
    top: 10vh;
  }
  .cube:nth-child(7) {
    border-color: #75f277;
    animation-delay: 0.7s;
    left: 35vw;
    top: 60vh;
  }
  .cube:nth-child(8) {
    border-color: #75f277;
    animation-delay: 0.9s;
    left: 85vw;
    top: 90vh;
  }
  .cube:nth-child(9) {
    border-color: #75f277;
    animation-delay: 0.11s;
    left: 150vw;
    top: 20vh;
  }
  .cube:nth-child(10) {
    border-color: #75f277;
    animation-delay: 0.13s;
    left: 5vw;
    top: 35vh;
  }
  .cube:nth-child(11) {
    border-color: #75f277;
    animation-delay: 0.15s;
    left: 95vw;
    top: 15vh;
  }
`;

export const StyledCatAnimationSection = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  #box {
    display: block;
    height: fit-content;
    width: fit-content;
    position: absolute;
    bottom: -10px;
    right: 100px;
    transform: scale(0.5);
  }
  .branch {
    height: 15px;
    width: 320px;
    background-color: rgb(101 81 60);
    position: absolute;
    bottom: 52px;
  }
  .leaf {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 20px;
    height: 20px;
    border-radius: 0 70px;
    background-color: #1f801f;
    position: absolute;
  }
  .leaf1 {
    transform: rotate(100deg);
    top: 12px;
    right: 255px;
  }

  .dot {
    background: #00945d;
    border-radius: 50%;
    position: absolute;
  }
  .dot1 {
    height: 5px;
    width: 5px;
    right: 40px;
    z-index: 101;
    top: -60px;
  }
  .dot2 {
    height: 5px;
    width: 5px;
    right: 28px;
    z-index: 101;
    top: -47px;
  }
  .dot3 {
    height: 5px;
    width: 5px;
    right: 19px;
    z-index: 101;
    top: -60px;
  }
  .dot4 {
    height: 5px;
    width: 5px;
    right: 8px;
    z-index: 101;
    top: -44px;
  }
  .dot5 {
    height: 5px;
    width: 5px;
    right: -2px;
    z-index: 101;
    top: -55px;
  }
  .cat * {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .cat,
  .cat-ears,
  .cat-eyes,
  .muzzle,
  .cat-body,
  .cat-paw,
  .tail,
  .tail-segment {
    position: relative;
  }
  .cat-head,
  .cat-body,
  .cat-paw,
  .tail-segment {
    background-color: rgb(9 206 124);
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .cat {
    animation: purr 5s infinite cubic-bezier(0, 0.75, 1, 0.25);
  }
  .cat-head {
    width: 150px;
    height: 100px;
    border-radius: 70px;
    z-index: 100;
    position: absolute;
    top: -85px;
    left: 47px;
    transform: translateX(-20px) translateY(30px);
    // animation: head-bob 5s infinite ease-in-out;
  }
  .cat-ears {
    left: -23px;
    top: -42px;
    z-index: -100;
    width: 50px;
    height: 50px;
    background: linear-gradient(
      to bottom right,
      transparent 0%,
      transparent 50%,
      rgb(9 206 124) 50%,
      rgb(9 206 124) 100%
    );
    border-radius: 0px 8px 0px 0px;
  }
  .cat-ear.left {
    transform: rotate(-20deg) translateX(-10px);
  }
  .cat-ear.right {
    transform: rotate(20deg) translateX(10px);
  }
  .cat-eyes {
    top: -34px;
    width: 60%;
    left: -62px;
  }
  .cat-eye {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(0 148 93);
    animation: eye-blink 5s infinite;
    text-align: center;
  }
  .eye-inner {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: black;
    text-align: center;
    position: absolute;
    top: 5px;
    left: 3px;
  }

  .muzzle {
    top: 50px;
  }
  .cat-nose {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #666666;
  }
  .cat-body {
    width: 200px;
    height: 120px;
    border-top-left-radius: 100px;
    border-top-right-radius: 215px;
    top: -75px;
    left: 90px;
    z-index: 0;
  }
  .paws {
    position: relative;
    transform: rotate(95deg);
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 210px;
    z-index: 100;
  }
  .p1 {
    right: -105px;
  }
  .p2 {
    right: -175px;
  }
  .cat-paw {
    height: 15px;
    width: 40px;
    border-radius: 25px;
    position: absolute;
    background: #00945d;
  }
  .cat-paw1 {
    left: -182px;
    top: 190px;
    transform: rotate(-45deg);
  }
  .cat-paw2 {
    left: -161px;
    top: 190px;
    transform: rotate(45deg);
  }
  .tail {
    left: 179px;
    top: -25px;
    transform: rotate(90deg);
  }
  .tail-abc {
    background-color: rgb(9 206 124);
    height: 20px;
    width: 80px;
    border-radius: 25px;
    top: -0.8px;
    left: 33px;
    position: absolute;
  }
  .tail-segment {
    background-color: rgb(9 206 124);
    height: 20px;
    width: 30px;
    border-radius: 50px;
    top: -1px;
    left: 10px;
    transform: rotate(13deg);
  }

  @keyframes head-bob {
    0% {
      transform: translateX(-15px) translateY(45px);
    }
    10% {
      transform: translateX(-15px) translateY(45px);
    }
    30% {
      transform: translateX(0) translateY(0);
    }
    75% {
      transform: translateX(0) translateY(0);
    }
    90% {
      transform: translateX(-15px) translateY(45px);
    }
    100% {
      transform: translateX(-15px) translateY(45px);
    }
  }

  @keyframes eye-blink {
    0% {
      transform: scaleY(0);
    }
    10% {
      transform: scaleY(0);
    }
    15% {
      transform: scaleY(1);
    }
    48% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
    52% {
      transform: scaleY(1);
    }
    90% {
      transform: scaleY(1);
    }
    95% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(0);
    }
  }

  @keyframes purr {
    0% {
      left: -1px;
    }
    1% {
      left: 0px;
    }
    2% {
      left: -1px;
    }
    3% {
      left: 0px;
    }
    4% {
      left: -1px;
    }
    5% {
      left: 0px;
    }
    6% {
      left: -1px;
    }
    7% {
      left: 0px;
    }
    8% {
      left: -1px;
    }
    9% {
      left: 0px;
    }
    10% {
      left: -1px;
    }
    11% {
      left: 0px;
    }
    12% {
      left: -1px;
    }
    13% {
      left: 0px;
    }
    14% {
      left: -1px;
    }
    15% {
      left: 0px;
    }
    16% {
      left: -1px;
    }
    17% {
      left: 0px;
    }
    18% {
      left: -1px;
    }
    19% {
      left: 0px;
    }
    20% {
      left: -1px;
    }
    21% {
      left: 0px;
    }
    94% {
      left: 0px;
    }
    95% {
      left: -1px;
    }
    96% {
      left: 0px;
    }
    97% {
      left: -1px;
    }
    98% {
      left: 0px;
    }
    99% {
      left: -1px;
    }
    100% {
      left: 0px;
    }
  }
`;

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  position: 'relative',
  '& .avatar-img': {
    borderRadius: '50%',
  },
  '& .intro-text': {
    textShadow: '2px 2px black',
  },
  '& .name-text': {
    fontFamily: ` "Playwrite BE VLG", cursive !important`,
    color: '#fff',
    fontSize: '55px',
    fontWeight: 600,
    margin: '20px 0',
    '& .first-letter': {
      fontSize: '75px',
      fontWeight: 700,
      textShadow: '5px 5px 0px #2d6373, 9px 6px 0px #2aecb1',
    },
  },
  '& .wipe-animated-text': {
    textShadow: '2px 2px black',
    color: 'white',
    width: 0,
    maxWidth: 'max-content',
    overflow: 'hidden',
    borderRight: '.05em solid #464545',
    whiteSpace: 'nowrap',
    margin: 0,
    animation:
      '6s typing-erase 2s steps(50, end) infinite, blink-caret .5s step-end infinite',
    lineheight: '1.5',
    letterspacing: '0.00938em',
  },
  '& .social-platform-wrapper': {
    marginTop: '30px',
    display: 'flex',
    gap: '20px',
    svg: {
      fill: 'white',
      transition: 'all 0.3s ease',
      '&:hover': {
        fill: '#ffd15d',
        transition: 'all 0.3s ease',
      },
    },
  },

  [theme.breakpoints.down(1200)]: {},
}));

export const StyledScrollDiv = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
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
}));
