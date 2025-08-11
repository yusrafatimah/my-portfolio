import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Box, styled } from '@mui/material';

export const StyledTeleprompterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '0 0 0 10px',
  [theme.breakpoints.down(1250)]: {
    flexDirection: 'column-reverse',
    height: '100%',
    justifyContent: 'space-between',
    padding: '20px',
  },

  '& .settings-btn-wrapper': {
    [theme.breakpoints.down(1250)]: {
      display: 'flex',
      width: '45%',
      justifyContent: 'space-evenly',
    },
    '& .col-2': {
      [theme.breakpoints.down(1250)]: {
        display: 'flex',

        flexDirection: 'column',
        '& .font-speed-wrapper': {
          flexDirection: 'column',
          gap: '10px',
          '& div': {
            width: '100%',
          },
        },
      },
    },
  },
  '& .play-btn-wrapper': {
    [theme.breakpoints.down(1250)]: {
      width: '15%',
    },
  },
  '& .prompter-sidebar': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: 600,
    width: '100%',
    maxWidth: 275,
    border: '2px solid black',
    borderRadius: '15px',
    padding: '10px',
    backgroundColor: '#373737',
    [theme.breakpoints.down(1250)]: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: '100%',
      height: '170px',
    },
    '& .script-input ': {
      [theme.breakpoints.down(1250)]: {
        width: '40%',
        borderRadius: '11px',
      },
      '& fieldset': {
        borderRadius: '11px 11px 0 0',
        border: '2px solid black',
        [theme.breakpoints.down(1250)]: {
          borderRadius: '11px',
        },
      },
    },
    '& .script-input > div': {
      borderRadius: '11px 11px 0 0',
      color: theme.palette.text.secondary,
      background: 'rgba(17, 17, 17, 0.1)',
      [theme.breakpoints.down(1250)]: {
        borderRadius: '11px',
      },
    },
    '& .script-input > div > textarea': {
      height: 276,
      color: theme.palette.text.dark,
      [theme.breakpoints.down(1250)]: {
        height: '115px !important',
      },
    },

    '& .t-slider-container': {
      [theme.breakpoints.down(1250)]: {
        flexDirection: 'column',
        gap: 0,
        alignItems: 'flex-start',
      },
      '& .MuiSlider-colorPrimary ': {
        color: 'white',
        '& .MuiSlider-thumb': {
          height: 22,
          width: 22,
        },
      },
    },
    '& .rise-shake-text': {
      width: 'fit-content',
      animation: 'jump-shaking 5s infinite',
    },
    '& .try-remove-button': {
      background: '#039284',
      borderRadius: '50px',
      padding: '2px 5px',
      cursor: 'pointer',
      transition: 'all ease 0.3s',
      '&:hover': {
        background: '#057167',
        transition: 'all ease 0.3s',
        '& .rise-shake-text': {
          animation: 'none',
          transition: 'none',
        },
      },
    },
    svg: {
      cursor: 'pointer',
    },
    '& .view-icon': {
      [theme.breakpoints.down(1250)]: {
        flexDirection: 'column',
        gap: '10px',
      },
      svg: {
        [theme.breakpoints.down(1250)]: {
          height: 27,
        },
        path: {
          fill: '#039284',
        },
      },
      cursor: 'pointer',
      '&:hover': {
        svg: {
          path: {
            fill: '#02c6b3',
          },
        },
      },
    },
  },

  '& .prompter-screen': {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down(1250)]: {
      position: 'relative',
    },
    '& .screen-img-bg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '& .screen-top-bg': {
    width: 650,
    height: 420,
    position: 'absolute',
    border: '1px solid',
    top: 0,
    right: 0,
    background: 'rgba(17, 17, 17, 0.1)',
    [theme.breakpoints.down(1250)]: {
      height: 380,
    },
  },
}));

export const ScriptOverlayContainer = styled(Box)(() => ({
  zIndex: 10,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  containerType: 'size',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}));

export const ScriptContainer = styled(Box)(
  ({
    speed = 15,
    fontSize = 1,
    fontFamily,
    opacity = 4,
    animationPlayState,
    lineHeight,
    visible,
    theme,
  }) => ({
    visibility: visible ? 'visible' : 'hidden',
    containerType: 'size',
    alignItems: 'center',
    display: 'flex',
    background: `rgba(17, 17, 17, ${opacity / 100})`,
    '& .styled-prompter-container-inner': {
      height: '100%',
      display: 'flex',
      // padding: '30% 0 0 0',
      overflowY: 'auto',
      // p: {
      //   marginTop: 105,
      // },
      '& .arrow-icon': {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        right: '-5px',
        top: 6,
        padding: '15.5% 0 0 0',
        [theme.breakpoints.down(1250)]: {
          padding: '97px 0 0 0',
        },
      },
    },
    '& .line-reader': {
      width: '100%',
      zIndex: 0,
      position: 'absolute',
      left: 0,
      marginTop: '105px',
      '& .inner': {
        position: 'relative',
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        svg: {
          height: 25,
          width: 'auto',
          path: {
            fill: 'black',
          },
        },
      },
    },
    '& .script-animation-text': {
      marginTop: '105px',
      whiteSpace: 'pre-line',
      overflowWrap: 'anywhere',
      height: 'max-content',
      padding: '0 1rem 0 1rem',
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      margin: 0,
      fontWeight: '400',
      textAlign: 'left',
      fontFamily: `${fontFamily}, Poppins`,
      position: 'relative',
      animationName: 'playScript',
      animationFillMode: 'forwards',
      animationTimingFunction: 'linear',
      animationDuration: `${20520 / speed + (80 - speed * 10 + 2) * 500}ms`,
      animationPlayState: animationPlayState,
    },
  }),
);

export const StyledScreen = styled(Box)`
  width: 700px;
  height: 500px;
  background: #2d2c2c;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${props => props.theme.breakpoints.down(1250)} {
    height: 440px;
  }
  ${props => props.theme.breakpoints.down(530)} {
    width: 300px;
    height: 200px;
  }
  .screen-inner {
    margin-top: 24px;
    width: 650px;
    height: 420px;
    background: white;
    border-radius: 5px;
    position: relative;
    ${props => props.theme.breakpoints.down(1250)} {
      height: 380px;
    }
    ${props => props.theme.breakpoints.down(530)} {
      width: 250px;
      height: 150px;
    }
  }
  .stand {
    height: 30px;
    width: 200px;
    background: #2d2c2c;
    position: absolute;
    bottom: 25px;
    border-radius: 5px;
    ${props => props.theme.breakpoints.down(1250)} {
      bottom: -42px;
    }
    ${props => props.theme.breakpoints.down(530)} {
      bottom: 82px;
    }
    ${props => props.theme.breakpoints.down(450)} {
      bottom: 23px;
    }
  }
  .base {
    height: 50px;
    width: 115px;
    background: #2d2c2c;
    position: absolute;
    bottom: 40px;
    border-radius: 10px;
    ${props => props.theme.breakpoints.down(1250)} {
      bottom: -38px;
    }
    ${props => props.theme.breakpoints.down(530)} {
      bottom: 95px;
    }
    ${props => props.theme.breakpoints.down(450)} {
      bottom: 35px;
    }
  }
  .button {
    height: 30px;
    width: 30px;
    position: absolute;
    background: #9e9e9e;
    border-radius: 50%;
    bottom: 115px;
    ${props => props.theme.breakpoints.down(1250)} {
      bottom: -10px;
    }
    ${props => props.theme.breakpoints.down(530)} {
      bottom: 140px;
    }
  }
`;
