import React from 'react';
import Text from '../../common-components/Text';
import { StyledRecentWork, StyledCard } from './styles';
import { Box, Modal } from '@mui/material';
import demo1Svg from '../../assets/images/demo-1.jpg';
import demo2Svg from '../../assets/images/demo-2.jpg';
import { magnifierSvg } from '../../assets/svgs/magnifier';
import prompterVideo from '../../assets/gifs/prompter.mov';

const RecentWork = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledRecentWork className={'styled-recent-work'}>
      <Text
        className="recent-work-text"
        margin={'0 0 20px 0'}
        fontSize={36}
        fontWeight={700}
        color={'white'}
        text={'Recent Work'}
      />
      <Box pt={'25px'} width={'100%'} display="flex" justifyContent="center">
        <Box className={'card-grid'} display={'flex'}>
          <StyledCard className={'card'}>
            <Box className={'hover-section'}></Box>
            <Text
              className="details"
              fontSize={20}
              fontWeight={700}
              color={'white'}
              text={'Teleprompter Illustration'}
            />

            <Box className={'more'}>{magnifierSvg}</Box>
            <img className="figure" src={demo1Svg} alt="demo-1" />
            <Box className={'top-badge'}>
              <Text
                fontSize={10}
                fontWeight={600}
                color={'white'}
                text={'Demo'}
              />
            </Box>
          </StyledCard>
          <StyledCard className={'card'} onClick={handleOpen}>
            <Box className={'hover-section'}></Box>
            <Text
              className="details"
              fontSize={20}
              fontWeight={700}
              color={'white'}
              text={'Teleprompter Illustration'}
            />

            <Box className={'more'}>{magnifierSvg}</Box>
            <img className="figure" src={demo2Svg} alt="demo-2" />
            <Box className={'top-badge'}>
              <Text
                fontSize={10}
                fontWeight={600}
                color={'white'}
                text={'Demo'}
              />
            </Box>
          </StyledCard>

          <Box className={'card'}>
            <img src={demo1Svg} alt="demo-1" />
          </Box>
          <Box className={'card'}>
            <img src={demo1Svg} alt="demo-1" />
          </Box>
          <Box className={'card'}>
            <img src={demo1Svg} alt="demo-1" />
          </Box>
          <Box className={'card'}>
            <img src={demo1Svg} alt="demo-1" />
          </Box>
        </Box>
      </Box>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box
          className={'modal-content'}
          sx={{ width: 'fit-content', height: 'fit-content' }}
        >
          <Box sx={{ width: '1200px', height: '700px' }}>
            <video
              width="100%"
              height="100%"
              className={'video-player'}
              controls
              preload
            >
              <source src={prompterVideo} type="video/mp4"></source>
            </video>
          </Box>
        </Box>
      </Modal>
    </StyledRecentWork>
  );
};

export default RecentWork;
