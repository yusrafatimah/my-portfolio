import React, { useEffect, useState } from 'react';
import {
  ScriptContainer,
  ScriptOverlayContainer,
  StyledScreen,
  StyledTeleprompterWrapper,
} from './styles';
import { Box, Slider, TextField, Tooltip } from '@mui/material';
import { playSvg } from '../../assets/svgs/play';
import { pauseSvg } from '../../assets/svgs/pause';
import { arrowSvg } from '../../assets/svgs/arrow';
import { showSvg } from '../../assets/svgs/show';
import { hideSvg } from '../../assets/svgs/hide';
import Text from '../../common-components/Text';
import { dropdownSvg } from '../../assets/svgs/dropdown';
import { minusSvg } from '../../assets/svgs/minus';

const Teleprompter = ({ prompter }) => {
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(true);
  const [textColor, setTextColor] = useState('#000000');
  const [textReaderColor, settextReaderColor] = useState('#adfff7'); // #057167 or #adfff7
  const [prompterText, setPrompterText] = useState('');
  const [transparency, setTransparency] = useState(10); // 10 to 100
  const [defaultTextInPrompter, setDefaultTextInPrompter] = useState(false);
  const [speedBaseValue, setSpeedBaseValue] = useState(50280);
  const [baseLineHeight, setBaseLineHeight] = useState(21);
  const [speed, setSpeed] = useState(1); // min 1 and max 8
  const [fontsize, setFontsize] = useState(18); // min 14 and max 50

  const animationElement = document.getElementById(
    'prompter-animated-script-text',
  );
  let divHeight = animationElement && animationElement.offsetHeight;
  let lineHeight = prompter?.baseLineHeight ?? 21;
  let totalLines = Math.round(divHeight / lineHeight);

  useEffect(() => {
    if (totalLines > 10) {
      let linesToBeCounted = totalLines - 10;
      let newSpeedBaseValue = prompter?.speedBaseValue;
      let multiplier = linesToBeCounted * 720;
      if (linesToBeCounted > 0) {
        newSpeedBaseValue = newSpeedBaseValue + multiplier;
      }
      setSpeedBaseValue(newSpeedBaseValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalLines]);

  console.log('speedBaseValue / speed', speedBaseValue / speed);

  useEffect(() => {
    if (defaultTextInPrompter) {
      setPrompterText(
        'Artificial Intelligence (AI) is the simulation of human intelligence in machines that can think, learn, and make decisions. AI is reshaping tech and software development by automating coding, testing, and debugging, making the process faster and more accurate. Tools like GitHub Copilot and ChatGPT assist developers in writing optimized code, generating documentation, and finding solutions instantly. AI-driven analytics help in predicting software performance issues, while machine learning models enable smarter features like personalization and automation. In the latest trends, AI is powering low-code/no-code platforms, speeding up app development, and integrating advanced capabilities like natural language search, image recognition, and predictive analytics directly into software.',
      );
    } else {
      setPrompterText('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTextInPrompter]);

  useEffect(() => {
    //changing the colors of text relative to transparency
    if (transparency === 70 || transparency > 70) {
      setTextColor('#ffffff');
    } else {
      setTextColor('#000000');
    }
  }, [transparency]);

  useEffect(() => {
    //changing the colors of line reader relative to transparency
    if (transparency === 70 || transparency > 70) {
      settextReaderColor('#057167');
    } else {
      settextReaderColor('#adfff7');
    }
  }, [transparency]);

  const animationReset = () => {
    if (animationElement) {
      const clonedElement = animationElement.cloneNode(true);
      if (animationElement?.parentNode) {
        animationElement.parentNode.replaceChild(
          clonedElement,
          animationElement,
        );
      }
    }
    setPlay(false);
    // Adding event listener for animation end to reset the animation
  };

  useEffect(() => {
    if (animationElement) {
      animationElement.addEventListener('animationend', () => {
        animationReset();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationElement]);

  const handleChangePrompterText = value => {
    setPrompterText(value);
  };

  const handleChangeTransparency = value => {
    setTransparency(value);
  };

  const handleChangeSpeed = action => {
    let newSpeed = speed;
    if (action === 'minus' && speed > 1) newSpeed -= 1;
    if (action === 'plus' && speed < 8) newSpeed += 1;
    setSpeed(newSpeed);
    animationReset();
  };

  const handleChangeFontSize = action => {
    let newFontSize = fontsize;
    let newSpeedBaseValue = speedBaseValue;
    let newbaseLineHeight = baseLineHeight;
    if (action === 'minus' && fontsize > 14) {
      newFontSize -= 1;
      newSpeedBaseValue -= 720;
      newbaseLineHeight -= 1.5;
    }
    if (action === 'plus' && fontsize < 50) {
      newFontSize += 1;
      newSpeedBaseValue += 720;
      newbaseLineHeight += 1.5;
    }
    setFontsize(newFontSize);
    setSpeedBaseValue(newSpeedBaseValue);
    setBaseLineHeight(newbaseLineHeight);
    animationReset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={'100%'}
      height={'100%'}
      position={'relative'}
    >
      {/* <Text
        margin={'5px 0 0 0'}
        fontSize={35}
        fontWeight={500}
        cursor={'pointer'}
        text={'TELEPROMPTER'}
        sx={{ position: 'absolute', top: '20px' }}
      /> */}
      <StyledTeleprompterWrapper className="styled-prompter-wrapper">
        <Box className={'prompter-sidebar'}>
          <TextField
            id="outlined-multiline-static"
            className="script-input"
            placeholder="Enter text here.."
            multiline
            rows={12}
            fontSize="12px"
            sx={{
              width: '100%',
              background: 'white',
              borderRadius: '11px 11px 0 0',
            }}
            value={prompterText}
            onChange={e => {
              handleChangePrompterText(e.target.value);
            }}
          />
          <Box className={'settings-btn-wrapper'}>
            <div className="col-1">
              <Box
                onClick={() => setDefaultTextInPrompter(!defaultTextInPrompter)}
                display={'flex'}
                justifyContent={'center'}
              >
                <Text
                  className={`try-remove-button ${!defaultTextInPrompter && 'rise-shake-text'}`}
                  margin={'25px 0 10px 0'}
                  fontSize={{ xs: 11, sm: 13, md: 13, lg: 13 }}
                  fontWeight={500}
                  color={'white'}
                  text={
                    defaultTextInPrompter
                      ? 'Remove default text'
                      : 'Try with default text . .'
                  }
                />
              </Box>

              <Box
                display={'flex'}
                alignItems={'center'}
                width={'100%'}
                onClick={() => setShow(!show)}
                justifyContent={'space-around'}
                className={'view-icon'}
                mt={'5px'}
              >
                <Text
                  className={''}
                  fontSize={13}
                  fontWeight={500}
                  color={'white'}
                  text={
                    !show ? 'Show text on canvas' : 'Remove text from canvas'
                  }
                />

                {show ? hideSvg : showSvg}
              </Box>
            </div>
            <div className="col-2">
              <Box
                width={'100%'}
                display={'flex'}
                gap="4px"
                mt={'15px'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                className={'font-speed-wrapper'}
              >
                <Box display={'flex'} gap="4px" alignItems={'center'}>
                  <Text
                    className={''}
                    fontSize={13}
                    fontWeight={500}
                    color={'white'}
                    text={'Font size:'}
                  />
                  <Tooltip
                    title={
                      play
                        ? 'Applying the changes will reset the text on screen'
                        : ''
                    }
                    arrow
                    placement="top"
                  >
                    <span onClick={() => handleChangeFontSize('minus')}>
                      {minusSvg}
                    </span>
                  </Tooltip>
                  <Text
                    fontSize={13}
                    fontWeight={500}
                    color={'white'}
                    text={`${fontsize}px`}
                  />
                  <Tooltip
                    title={
                      play
                        ? 'Applying the changes will reset the text on screen'
                        : ''
                    }
                    arrow
                    placement="top"
                  >
                    <span onClick={() => handleChangeFontSize('plus')}>
                      {dropdownSvg}
                    </span>
                  </Tooltip>
                </Box>

                <Box display={'flex'} gap="4px" alignItems={'center'}>
                  <Text
                    className={''}
                    fontSize={13}
                    fontWeight={500}
                    color={'white'}
                    text={'Speed:'}
                  />
                  <Tooltip
                    title={
                      play
                        ? 'Applying the changes will reset the text on screen'
                        : ''
                    }
                    arrow
                    placement="top"
                  >
                    <span onClick={() => handleChangeSpeed('minus')}>
                      {minusSvg}
                    </span>
                  </Tooltip>
                  <Text
                    fontSize={13}
                    fontWeight={500}
                    color={'white'}
                    text={`${speed}x`}
                  />
                  <Tooltip
                    title={
                      play
                        ? 'Applying the changes will reset the text on screen'
                        : ''
                    }
                    arrow
                    placement="top"
                  >
                    <span onClick={() => handleChangeSpeed('plus')}>
                      {dropdownSvg}
                    </span>
                  </Tooltip>
                </Box>
              </Box>

              <Box
                display={'flex'}
                alignItems={'center'}
                gap={'15px'}
                width={'95%'}
                className={'t-slider-container'}
                mt={'15px'}
              >
                <Text
                  className={''}
                  fontSize={13}
                  fontWeight={500}
                  color={'white'}
                  text={'Transparency'}
                />
                <Slider
                  className="opacity-slider"
                  id="os-3442"
                  value={transparency}
                  size={'small'}
                  sx={{
                    height: 6,
                    width: '100%',
                    '& .MuiSlider-thumb': {
                      width: '16px !important',
                      height: '16px !important',
                    },
                  }}
                  step={10}
                  min={10}
                  onChange={(e, v) => handleChangeTransparency(v)}
                />
              </Box>
            </div>
          </Box>

          <Tooltip
            title={show ? '' : 'Click on eye icon to add text on canvas'}
            arrow
            placement="top"
          >
            <Box
              className={'play-btn-wrapper'}
              width={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'17px'}
              sx={{ cursor: show ? 'pointer' : 'not-allowed' }}
            >
              <Text
                className={''}
                fontSize={13}
                fontWeight={500}
                color={'white'}
                text={play ? 'Pause' : 'Play'}
              />
              <Box
                mt={'13px'}
                onClick={() => {
                  setPlay(!play);
                }}
                sx={{ pointerEvents: show ? 'auto' : 'none' }}
              >
                {play ? pauseSvg : playSvg}
              </Box>
            </Box>
          </Tooltip>
        </Box>
        <Box
          className={'prompter-screen'}
          sx={{
            width: '100%',
            height: 'fit-content',
            maxWidth: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledScreen className="screen">
            <div className="screen-inner">
              <Box className={'screen-top-bg'} height={'100%'} width={'100%'}>
                <Box position={'relative'} height={'100%'} width={'100%'}>
                  {prompterText && (
                    <ScriptOverlayContainer
                      id={'prompter-overlay-container-id'}
                      pointerEvents={'auto'}
                    >
                      <ScriptContainer
                        className="styled-prompter-container"
                        pointerEvents={'none'}
                        speed={speed}
                        fontSize={fontsize}
                        opacity={transparency}
                        animationPlayState={play ? 'running' : 'paused'}
                        visible={show}
                        lineHeight={baseLineHeight}
                        width={'100%'}
                        height={'100%'}
                      >
                        <Box className="styled-prompter-container-inner">
                          <div
                            className="line-reader"
                            style={{
                              background: textReaderColor,
                              height: fontsize * 1.2,
                            }}
                          >
                            <div className="inner"> {arrowSvg}</div>
                          </div>
                          <Box className={'arrow-icon'}>
                            <p
                              id={'prompter-animated-script-text'}
                              className={`script-animation-text`}
                              style={{
                                color: textColor,
                              }}
                            >
                              {prompterText}
                            </p>
                          </Box>
                        </Box>
                      </ScriptContainer>
                    </ScriptOverlayContainer>
                  )}
                </Box>
              </Box>
            </div>
            <div className="stand"></div>
            <div className="base"></div>
            <div className="button">
              <div className="button-in"></div>
            </div>
          </StyledScreen>
        </Box>
      </StyledTeleprompterWrapper>
    </Box>
  );
};

export default Teleprompter;
