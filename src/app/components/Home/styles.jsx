import { Box, styled } from '@mui/material';
import wavePng from '../../assets/images/layered-waves-haikei.png';

export const StyledHomeSection = styled(Box)(() => ({
  backgroundImage: `url(${wavePng})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: '100%',
  paddingTop: '150px',
  position: 'relative',
  '& .avatar-img': {
    borderRadius: '50%',
  },
  '& .bird-animation-wrapper': {
    zIndex: -1,
    width: 400,
    height: 400,
    position: 'absolute',
    bottom: '0%',
    right: '8%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '& .inner': {
      border: '4px solid #9E9E9E',
      borderRadius: '50% 50% 10px 10px',
      width: 180,
      height: 190,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e0f0ff',
      animation: 'moverLeftRight 2s infinite  alternate',
      '& .cage-string': {
        height: '100vh',
        width: 2,
        background: '#9e9e9e',
        position: 'absolute',
        bottom: '221px',
      },
      '& .cage-top': {
        height: 20,
        width: 20,
        position: 'absolute',
        top: -29,
        borderRadius: '21% 70% 59% 70%',
        border: '4px solid #9E9E9E',
        transform: 'rotate(45deg)',
      },
    },
  },
  '& .name': {
    fontFamily: '"Rubik", sans-serif',
    color: '#fff',
    fontSize: '40px',
    fontWeight: 700,
    margin: '20px 0',
  },
  '& .wipe-animated-text': {
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

export const StyledBirdAnimationSection = styled(Box)`
  position: absolute;
  z-index:1;
  transform:scale(0.4);
  width: fit-content;
  height: fit-content;
  margin-left: 36px;
  margin-bottom: -23px;
  .main {
    width: 400px;
    position: relative;
  }
  
  .face {
    background: #64c2de;
    height: 200px;
    width: 300px;
    border-radius: 50%;
  }
  
  .ear-1 {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 8px;
    border-left-width: 29px;
    border-bottom: 20px solid #64c2de;
    top: 0px;
    right: 160px;
    z-index: -1;
    background: #e0f0ff;
    position: absolute;
  }
  
  .ear-2 {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-right-width: 28px;
    border-left-width: 10px;
    border-bottom: 20px solid #64c2de;
    top: 0px;
    left: 62px;
    z-index: -1;
    background: #e0f0ff;
    position: absolute;
  }
  
  .outer-eye-1 {
    z-index: 2;
    background: #97dff8;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: absolute;
    top: 19px;
    left: -19px;
  }
  .outer-eye-2 {
    z-index: 2;
    background: #97dff8;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: absolute;
    top: 19px;
    right: 77px;
  }
  
  .inner-eye {
    background: #ffff;
    width: 145px;
    height: 145px;
    border-radius: 50%;
    position: absolute;
    top: 18px;
    left: 17px;
  }
  
  .black-eye {
    background: black;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    left: 25px;
  }
  
  .white-eye {
    background: #ffff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 23px;
  }
  
  .beak {
    background-color: #97dff8;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 77px;
    border-right-width: 77px;
    border-top: 100px solid #ef8e1a;
    position: absolute;
    bottom: -40px;
    right: 43%;
    z-index: 1;
  }
  
  .body {
    position: absolute;
    background: #97dff8;
    width: 300px;
    height: 250px;
    border-radius: 50%;
    top: 135px;
  }
  
  .wing-1 {
    z-index: 1;
    background: #64c2de;
    width: 120px;
    height: 208px;
    border-radius: 0 71%;
    position: absolute;
    top: 152px;
    right: 82px;
    transform: rotate(23deg);
  }
  .wing-2 {
    z-index: 1;
    background: #64c2de;
    width: 120px;
    height: 208px;
    border-radius: 71% 0;
    position: absolute;
    top: 152px;
    left: -10px;
    transform: rotate(-22deg);
  }
  
  .fur {
    background-color: #97dff8;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 77px;
    border-right-width: 77px;
    border-top: 100px solid #ef8e1a;
    position: absolute;
    bottom: -20px;
    right: 43%;
    z-index: 1;
  }
  .fur-wrapper {
    position: relative;
    margin-top: 145px;
  }
  .fur-1 {
    background-color: #97dff8;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 10px;
    border-right-width: 10px;
    border-top: 16px solid #64c2de;
    position: absolute;
    top: 62%;
    left: 40%;
    z-index: 1;
  }
  
  .fur-2 {
    background-color: #97dff8;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 10px;
    border-right-width: 10px;
    border-top: 16px solid #64c2de;
    position: absolute;
    top: 62%;
    right: 37%;
    z-index: 1;
  }
  
  .fur-3 {
    background-color: #97dff8;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-left-width: 10px;
    border-right-width: 10px;
    border-top: 16px solid #64c2de;
    position: absolute;
    bottom: -42px;
    right: 45%;
    z-index: 1;
  }
  
  .feet-wrapper {
    position: relative;
    margin-top: 160px;
    width: 200px;
  }
  .foot-1 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: -4px;
    left: 40%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(25deg);
  }
  .foot-2 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: 0;
    left: 44%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(25deg);
  }
  .foot-3 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: 3px;
    left: 48%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(25deg);
  }
  
  .foot-4 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: -1px;
    right: -9%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(-25deg);
  }
  
  
  .foot-5 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: 2px;
    right: -5%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(-25deg);
  }
  .foot-6 {
    background-color: #ef8e1a;
    width: 8px;
    height: 30px;
    border: 0 solid transparent;
    position: absolute;
    top: 4px;
    right: -0.5%;
    z-index: 1;
    border-radius: 43%;
    transform: rotate(-25deg);
  }
  .pointer {
    position: relative;
    transform: translate(var(--mouse-x), var(--mouse-y));
  }

  img {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
  }
`;

export const StyledScrollDiv = styled(Box)(({ theme }) => ({
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
