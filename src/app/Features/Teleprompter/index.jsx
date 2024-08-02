import React, { useEffect, useState } from 'react';
import {
  ScriptContainer,
  ScriptOverlayContainer,
  StyledTeleprompterWrapper,
} from './styles';
import { Box, Slider, TextField } from '@mui/material';
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

  const animationElement = document.getElementById(
    'prompter-animated-script-text',
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
              {minusSvg}
              <Text
                fontSize={13}
                fontWeight={500}
                color={'white'}
                text={'12px'}
              />
              {dropdownSvg}
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
              {minusSvg}
              <Text
                fontSize={13}
                fontWeight={500}
                color={'white'}
                text={'5x'}
              />
              {dropdownSvg}
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

          <Box mt={'5px'} onClick={() => setPlay(!play)}>
            {play ? pauseSvg : playSvg}
          </Box>
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
                  alignItems={prompter?.textPosition}
                >
                  <ScriptContainer
                    className="styled-prompter-container"
                    pointerEvents={'none'}
                    // speed={prompter?.speed}
                    // fontSize={prompter?.fontSize}
                    // opacity={prompter?.transparency}
                    // animationPlayState={prompter?.play ? 'running' : 'paused'}
                    // visible={prompter?.show}
                    speed={8}
                    fontSize={16}
                    opacity={transparency}
                    animationPlayState={play ? 'running' : 'paused'}
                    visible={show}
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
