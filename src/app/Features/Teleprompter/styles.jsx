import { Box, styled } from '@mui/material';

export const StyledTeleprompterWrapper = styled(Box)(() => ({
  width: '100%',
  height: 'max-content',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '0 0 0 10px',
  '& .prompter-sidebar': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: 500,
    width: '100%',
    maxWidth: 255,
    border: '2px solid black',
    borderRadius: '15px',
    padding: '10px',
    backgroundColor: '#373737',

    '& .script-input ': {
      '& fieldset': {
        borderRadius: '11px 11px 0 0',
        border: '2px solid black',
      },
    },
    '& .script-input > div': {
      borderRadius: '11px 11px 0 0',
    },

    '& .t-slider-container': {
      '& .MuiSlider-colorPrimary ': {
        color: 'white',
        '& .MuiSlider-thumb': {
          height: 22,
          width: 22,
        },
      },
    },
  },
  '& .prompter-screen': {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '& .screen-img-bg': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '& .screen-top-bg': {
    width: 700,
    height: 392,
    background: 'white',
    position: 'absolute',
    border: '1px solid',
    top: '55px',
    right: '110px',
    backgroundImage: `url(https://img.freepik.com/free-vector/pink-gradient-layer-patterned-background_53876-99010.jpg)`,
    backgroundSize: 'cover',
    backgrounRepeat: 'no-repeat',
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
        position: 'absolute',
        right: '-5px',
        top: 6,
        padding: '13.7% 0 0 0',
        svg: {
          height: 25,
          width: 'auto',
          path: {
            fill: 'black',
          },
        },
      },
    },
    '& .line-reader': {
      height: 20,
      width: '100%',
      background: 'white',
      zIndex: -1,
      position: 'absolute',
      left: 0,
      marginTop: '105px',
    },
    '& .script-animation-text': {
      marginTop: '105px',
      whiteSpace: 'pre-line',
      overflowWrap: 'anywhere',
      height: 'max-content',
      color: 'black',
      padding: '0 1.5rem 0 1rem',
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
