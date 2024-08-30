import React from 'react';
import { Box } from '@mui/material';
import { BirdAnimationWrapper, StyledBirdAnimationSection } from './styles';

const BirdAnimationSection = ({ height, scale }) => {
  (function () {
    const safeToAnimate = window.matchMedia(
      '(prefers-reduced-motion: no-preference)',
    ).matches;

    if (!safeToAnimate) return;

    let screenLog = document.getElementsByClassName('screen-log');
    let xPosition;
    let yPosition;

    let storedXPosition;
    let storedYPosition;

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    }

    // update the CSS vars within request animation frame
    function movePointer() {
      window.requestAnimationFrame(movePointer);

      // important, only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition)
        return;

      // shift the range from 0 to 100 to -50 to 50 to keep the movement centralised
      const x = percentage(xPosition, windowWidth) - 50;
      const y = percentage(yPosition, windowHeight) - 50;

      // log the values out to the screen
      if (x && y) {
        screenLog.innerText = `transform: translate(${Math.round(x)}%, ${Math.round(y)}%)`;
      }

      // update the css vars
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);

      // update the stored positions with the current positions
      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }
    window.requestAnimationFrame(movePointer);

    // updating the mouse coordinates
    function updateMouseCoords(event) {
      xPosition = event.clientX;
      yPosition = event.clientY;
    }
    window.addEventListener('mousemove', updateMouseCoords);

    // update if browser resizes
    function updateWindowSize() {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
    }
    window.addEventListener('resize', updateWindowSize);
  })();
  return (
    <BirdAnimationWrapper
      height={height}
      scale={scale}
      className={'bird-animation-wrapper'}
    >
      <Box className={'inner'}>
        <div className="cage-string"></div>
        <div className="cage-top"></div>
        <StyledBirdAnimationSection className="styled-bird-animation-section">
          <Box className="main">
            <Box className="face">
              <Box className="ear-1"></Box>
              <Box className="ear-2"></Box>
              <Box className="outer-eye-1">
                <Box className="inner-eye">
                  <Box className="black-eye">
                    <Box className="white-eye img pointer screen-log"></Box>
                  </Box>
                </Box>
              </Box>
              <Box className="outer-eye-2">
                <Box className="inner-eye">
                  <Box className="black-eye">
                    <Box className="white-eye img pointer screen-log"></Box>
                  </Box>
                </Box>
              </Box>
              <Box className="beak"></Box>
            </Box>
            <Box className="body">
              <Box className="fur-wrapper">
                <Box className="fur-1"></Box>
                <Box className="fur-2"></Box>
                <Box className="fur-3"></Box>
              </Box>
            </Box>
            <Box className="wing-1"></Box>
            <Box className="wing-2"></Box>
            <Box className="feet-wrapper">
              <Box className="foot-1"></Box>
              <Box className="foot-2"></Box>
              <Box className="foot-3"></Box>
              <Box className="foot-4"></Box>
              <Box className="foot-5"></Box>
              <Box className="foot-6"></Box>
            </Box>
          </Box>
        </StyledBirdAnimationSection>
      </Box>
    </BirdAnimationWrapper>
  );
};

export default BirdAnimationSection;
