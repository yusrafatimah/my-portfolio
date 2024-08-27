import { Box, styled } from '@mui/material';
import bg from '../../assets/images/bg-3.jpg';

export const StyledCustomCharacters = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  display: 'flex',
  '& .fox-wrap': {
    width: 'fit-content',
    height: 'fit-content',
    position: 'absolute',
    right: -116,
    bottom: 262,
  },
}));

export const BirdAnimationWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderRadius: 'inherit',
  paddingRight: '300px',
  '& .inner': {
    border: '4px solid #C2DBE9',
    borderRadius: '50% 50% 10px 10px',
    margin: '0 40px 40px 0',
    width: 183,
    height: 190,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    animation: 'moverLeftRight 2s infinite  alternate',
    '& .cage-string': {
      height: '100vh',
      width: 3,
      background: '#C2DBE9',
      position: 'absolute',
      bottom: '222px',
    },
    '& .cage-top': {
      height: 21,
      width: 21,
      position: 'absolute',
      top: -29,
      borderRadius: '21% 70% 59% 70%',
      border: '4px solid #C2DBE9',
      transform: 'rotate(45deg)',
    },
  },
}));

export const StyledBirdAnimationSection = styled(Box)`
  position: absolute;
  z-index:1;
  width: fit-content;
  height: fit-content;
  margin-left: 52px;
  margin-bottom: -28px;
  transform: scale(0.4);
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
    background: transparent;
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
    background: transparent;
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

export const StyledPandaWrapper = styled(Box)`
  transform: scale(0.85);
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 183px;

  .ears {
    height: 54px;
    width: 60px;
    transform: rotate(140deg);
    background: #3a3a3c;
    z-index: 1;
    border: 3px solid black;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: absolute;
  }
  .ear1 {
    top: 0;
  }
  .ear2 {
    top: 0;
    right: 0;
    transform: rotate(225deg);
  }

  .head {
    transform: rotate(-6deg);
    height: 160px;
    width: 225px;
    border: 3px solid #3a3a3c;
    background: white;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: relative;
    z-index: 2;
    .eyes {
      height: 80px;
      width: 65px;
      background: #3a3a3c;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      position: absolute;
      border: 3px solid black;
      .inner-eye {
        height: 25px;
        width: 37px;
        background: black;
        border-radius: 50%;
        position: absolute;
        .eye-ball {
          height: 10px;
          width: 15px;
          background: white;
          border-radius: 50%;
          position: absolute;
        }
        .e1 {
          height: 5px;
          width: 10px;
          top: 4px;
          right: 16px;
        }
        .e2 {
          height: 5px;
          width: 10px;
          top: 4px;
          right: 6px;
        }
      }
      .e-1 {
        top: 9px;
        right: 9px;
        transform: rotate(45deg);
      }
      .e-2 {
        top: 10px;
        right: 19px;
        transform: rotate(-45deg);
      }
    }
    .eye-1 {
      top: 39px;
      left: 26px;
      transform: rotate(49deg);
    }
    .eye-2 {
      top: 39px;
      right: 24px;
      transform: rotate(-48deg);
    }
    .nose {
      transform: rotate(175deg);
      height: 12px;
      width: 14px;
      border: 3px solid black;
      background: #3a3a3c;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      position: absolute;
      z-index: 2;
      bottom: 48px;
      right: 102px;
    }
  }
  .body {
    height: 155px;
    width: 210px;
    border: 3px solid black;
    background: white;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    right: 6px;
    position: absolute;
    bottom: -110px;
    z-index: 1;
    .belly {
      height: 107px;
      width: 158px;
      border: 3px solid black;
      background: #3a3a3c;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      right: 22px;
      position: absolute;
      bottom: 8px;
      z-index: 1;
      .belly-inner {
        height: 79px;
        width: 117px;
        border: 3px solid black;
        background: white;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        right: 14px;
        position: absolute;
        bottom: -12px;
        z-index: 1;
      }
    }
  }
  .feet {
    height: 80px;
    width: 80px;
    background: #3a3a3c;
    z-index: 1;
    border: 3px solid black;
    border-radius: 50%;
    position: absolute;
    .paw {
      height: 60px;
      width: 60px;
      background: white;
      z-index: 1;
      border: 3px solid black;
      border-radius: 50%;
      position: absolute;
    }
    .paw1 {
      top: 5px;
    }
    .paw2 {
      top: 5px;
      right: 2px;
    }
  }
  .foot1 {
    left: 2px;
    top: 205px;
  }
  .foot2 {
    right: -8px;
    top: 197px;
  }
  .arms {
    height: 156px;
    width: 56px;
    background: #3a3a3c;
    z-index: 1;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    border: 3px solid black;
    position: absolute;
  }
  .arm1 {
    top: 133px;
    left: 41px;
    transform: rotate(-23deg);
  }
  .arm2 {
    top: 133px;
    right: 43px;
    transform: rotate(20deg);
  }
`;

export const StyledFoxWrapper = styled(Box)`
height: 300px;
width: 400px;
position: relative;
transform: scale(.3);
      .fox-ear{
        width: 110px;
        height: 100px;
        background-color: #3a3a3c;
        border-radius: 100% 0px;
        position: absolute;
        border: 3px solid black;
      }
      .fox-ear1{
        transform: rotate(115deg);
        top: 266px;
        left: 35px;
      }
      .fox-ear2{
        transform: rotate(152deg);
        top: 266px;
        right: 125px;
      }
      .fox-ear-inner{
        width: 85px;
        height: 75px;
        background-color: white;
        border-radius: 100% 0px;
        position: absolute;
        border: 3px solid black;
      }
      .fox-ear1-inner{
        transform: rotate(113deg);
        top: 294px;
        left: 52px;    
      }
      .fox-ear2-inner{
        transform: rotate(150deg);
        top: 294px;
        right: 144px;    
      }
      .fox-head {
        position: relative;
        .inner-eye {
          height: 31px;
          width: 31px;
          background: black;
          border-radius: 50%;
          position: absolute;
          .eye-ball {
            height: 8px;
            width: 8px;
            background: white;
            border-radius: 50%;
            position: absolute;
            top:5px;
            right: 13px;
          }
          .e1 {
            height: 5px;
            width: 5px;
            background: white;
            border-radius: 50%;
            position: absolute;
            right: 6px;
            top: 11px;
          }
          .e2 {
            height: 5px;
            width: 5px;
            background: white;
            border-radius: 50%;
            position: absolute;
            right: 6px;
            top: 11px;
          }
        }
        .e-1 {
          top: 360px;
          left: 92px;
        }
        .e-2 {
          top: 360px;
          right:  198px;
        }
        .nose {
          transform: rotate(185deg);
          height: 17px;
          width: 20px;
          border: 3px solid black;
          background: #3a3a3c;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          position: absolute;
          z-index: 2;
          top: 447px;
          right: 232px;
      
        }
        .head {
          position: absolute;
          right: 20px;
          top: 215px;      
          svg {
            height: 450px;
            width: auto;
            transform: rotate(90deg);
            path {
              border: 3px solid black;
              z-index:2;
              stroke: black;
              stroke-width: 1.5px;
          
            }
            
          }
          
        }
        .cheeks {
          position: absolute;
            svg {
              height: auto;
              width: 210px;
              path {
                fill: #ffffff;
                border: 3px solid black;
                stroke: black;
                stroke-width: 2px;
            
              }
            }
          }
        }
        .cheek-1{
          top: 344px;
          left: -17px;
          svg{
            transform: rotate(104deg);
          }
        }
        .cheek-2{
          top: 344px;
          right: 72px;
          svg{
            transform: rotate(76deg);
          }
        }
        .ear{
          width: 100px;
          height: 100px;
          background-color: white;
          border-radius: 100% 0px;
         transform: rotate(107deg);
          top: 266px;
          left: 123px;  
        }
        .eye-lash {
          height: 110px;
          width: 30px;
          background: white;
          border-radius: 15px;
          position: absolute;
        }
        .eye-lash-1 {
          top: 110px;
          left: 131px;
          transform: rotate(140deg);
        }
        .eye-lash-2 {
          top: 78px;
          left: 243px;
        }
        .eye-lash-3 {
          top: 107px;
          right: 118px;
          transform: rotate(39deg);
        }
        .eye-body {
          height: 200px;
          width: 300px;
          background: white;
          border-radius: 60%;
          position: absolute;
          bottom: 60px;
          left: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          .eye-ball {
            height: 120px;
            width: 120px;
            background: #191616;
            border-radius: 50%;
          }
        }
      }
`;
