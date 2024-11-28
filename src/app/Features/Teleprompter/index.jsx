import React, { useEffect, useState } from 'react';
import {
  ScriptContainer,
  ScriptOverlayContainer,
  StyledTeleprompterWrapper,
} from './styles';
import { Box, Slider, TextField, Tooltip } from '@mui/material';
import screenSvg from '../../assets/images/screen.jpg';
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
  const [show, setShow] = useState(false);
  const [prompterText, setPrompterText] = useState('');
  const [transparency, setTransparency] = useState(80);
  const [defaultTextInPrompter, setDefaultTextInPrompter] = useState(true);
  const [speedBaseValue, setSpeedBaseValue] = useState(50280);
  const [baseLineHeight, setBaseLineHeight] = useState(21);
  const [speed, setSpeed] = useState(1);
  const [fontsize, setFontsize] = useState(14);
  const [textPosition, setTextPosition] = useState('center');
  console.log(setTextPosition('center'));
  const animationElement = document.getElementById(
    'prompter-animated-script-text',
  );
  let divHeight = animationElement && animationElement.offsetHeight;
  let lineHeight = prompter?.baseLineHeight ?? 21;
  let totalLines = Math.round(divHeight / lineHeight);

  useEffect(() => {
    console.log('totalLines in start', totalLines);
    if (totalLines > 10) {
      let linesToBeCounted = totalLines - 10;
      let newspeedBaseValue = prompter?.speedBaseValue;
      let multiplier = linesToBeCounted * 720;
      if (linesToBeCounted > 0) {
        newspeedBaseValue = newspeedBaseValue + multiplier;
      }
      setSpeedBaseValue(newspeedBaseValue);
      console.log('totalLines', totalLines);
    }
  }, [totalLines]);
  console.log(
    'speedbasevalue',
    Math.round(speedBaseValue),
    Math.round(speedBaseValue) / speed,
  );

  useEffect(() => {
    if (defaultTextInPrompter) {
      setPrompterText(
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
      );
    } else {
      setPrompterText('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTextInPrompter]);

  useEffect(() => {
    if (animationElement) {
      animationElement.addEventListener('animationend', () => {
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
    setPlay(false);
  };

  const handleChangeFontSize = action => {
    let newFontSize = fontsize;
    let newspeedBaseValue = speedBaseValue;
    let newbaseLineHeight = baseLineHeight;
    if (action === 'minus' && fontsize > 14) {
      newFontSize -= 1;
      newspeedBaseValue -= 720;
      newbaseLineHeight -= 1.5;
    }
    if (action === 'plus' && fontsize < 50) {
      newFontSize += 1;
      newspeedBaseValue += 720;
      newbaseLineHeight += 1.5;
    }
    setFontsize(newFontSize);
    setSpeedBaseValue(newspeedBaseValue);
    setBaseLineHeight(newbaseLineHeight);
    setPlay(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={'100%'}
      height={'100%'}
    >
      <Text
        margin={'5px 0 0 0'}
        fontSize={35}
        fontWeight={500}
        cursor={'pointer'}
        text={'TELEPROMPTER'}
      />
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
          <Box onClick={() => setDefaultTextInPrompter(!defaultTextInPrompter)}>
            <Text
              margin={'5px 0 0 0'}
              fontSize={13}
              fontWeight={500}
              color={'white'}
              cursor={'pointer'}
              text={
                defaultTextInPrompter
                  ? 'Remove default text'
                  : 'Try with default text'
              }
            />
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            gap="4px"
            mt={'15px'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
          >
            <Box display={'flex'} gap="4px" alignItems={'center'}>
              <span onClick={() => handleChangeFontSize('minus')}>
                {minusSvg}
              </span>
              <Text
                fontSize={13}
                fontWeight={500}
                color={'white'}
                text={`${fontsize}px`}
              />
              <span onClick={() => handleChangeFontSize('plus')}>
                {dropdownSvg}
              </span>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              height={27}
              onClick={() => setShow(!show)}
            >
              {show ? hideSvg : showSvg}
            </Box>
            <Box display={'flex'} gap="4px" alignItems={'center'}>
              <span onClick={() => handleChangeSpeed('minus')}>{minusSvg}</span>
              <Text
                fontSize={13}
                fontWeight={500}
                color={'white'}
                text={`${speed}x`}
              />
              <span onClick={() => handleChangeSpeed('plus')}>
                {dropdownSvg}
              </span>
            </Box>
          </Box>
          <Box display={'flex'} width={'95%'} className={'t-slider-container'}>
            <Slider
              className="opacity-slider"
              id="os-3442"
              value={transparency}
              size={'small'}
              sx={{ height: 10, width: '100%' }}
              step={10}
              min={10}
              onChange={(e, v) => handleChangeTransparency(v)}
            />
          </Box>
          <Tooltip
            title={show ? '' : 'Click on eye icon to add text on canvas'}
            arrow
            placement="top"
          >
            <Box sx={{ cursor: show ? 'pointer' : 'not-allowed' }}>
              <Box
                mt={'5px'}
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
            position: 'relative',
          }}
        >
          <img className="screen-img-bg" src={screenSvg} alt={'screen-img'} />
          <Box className={'screen-top-bg'} height={'100%'} width={'100%'}>
            <Box position={'relative'} height={'100%'} width={'100%'}>
              {prompterText && (
                <ScriptOverlayContainer
                  id={'prompter-overlay-container-id'}
                  pointerEvents={'auto'}
                  alignItems={textPosition}
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
                      <p
                        id={'prompter-animated-script-text'}
                        className={`script-animation-text`}
                      >
                        {prompterText}
                      </p>
                      <div className="line-reader"></div>
                      <Box className={'arrow-icon'}>{arrowSvg}</Box>
                    </Box>
                  </ScriptContainer>
                </ScriptOverlayContainer>
              )}
            </Box>
          </Box>
        </Box>
      </StyledTeleprompterWrapper>
    </Box>
  );
};

export default Teleprompter;
