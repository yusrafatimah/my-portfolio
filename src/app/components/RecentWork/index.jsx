import React from 'react';
import Text from '../../common-components/Text';
import { StyledRecentWork, StyledCard } from './styles';
import { Box } from '@mui/material';
import demo1Svg from '../../assets/images/demo-1.jpg';
import demo2Svg from '../../assets/images/demo-2.jpg';
import { magnifierSvg } from '../../assets/svgs/magnifier';
import prompterVideo from '../../assets/gifs/prompter.mov';
import CustomModal from '../../common-components/CustomModal';
import Teleprompter from '../../Features/Teleprompter';

const RecentWork = () => {
  const [openCardModal, setOpenCardModal] = React.useState(false);
  const handleOpen = () => setOpenCardModal(true);
  const handleClose = () => setOpenCardModal(false);
  const [openPrompterModal, setOpenPrompterModal] = React.useState(false);
  const handleOpenPrompter = () => setOpenPrompterModal(true);
  const handleClosePrompter = () => setOpenPrompterModal(false);

  return (
    <StyledRecentWork id="RecentWork" className={'styled-recent-work'}>
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
          <StyledCard className={'card'} onClick={handleOpenPrompter}>
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
                fontSize={11}
                fontWeight={600}
                color={'white'}
                text={'Try it yourself'}
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
      <CustomModal
        width="1200px"
        height="700px"
        open={openCardModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
      >
        <video
          width="100%"
          height="100%"
          className={'video-player'}
          controls
          preload
        >
          <source src={prompterVideo} type="video/mp4"></source>
        </video>
      </CustomModal>
      <CustomModal
        width="1200px"
        height="700px"
        open={openPrompterModal}
        handleClose={handleClosePrompter}
        handleOpen={handleOpenPrompter}
      >
        <Teleprompter />
      </CustomModal>
    </StyledRecentWork>
  );
};

export default RecentWork;
