import React, { useState } from 'react';
import Text from '../../common-components/Text';
import { StyledRecentWork, StyledCard, CardContainer } from './styles';
import { Box, useMediaQuery } from '@mui/material';
// import demo1Svg from '../../assets/images/demo-1.jpg';
// import demo2Svg from '../../assets/images/demo-2.jpg';
// import { magnifierSvg } from '../../assets/svgs/magnifier';
// import prompterVideo from '../../assets/gifs/prompter.mov';
// import CustomModal from '../../common-components/CustomModal';
// import Teleprompter from '../../Features/Teleprompter';
// import CustomCharacters from '../../Features/CustomCharacters';
import ProjectCard from './ProjectCards';
import { projects } from './constants';

const RecentWork = () => {
  // const [openCardModal, setOpenCardModal] = React.useState(false);
  // const [openPrompterModal, setOpenPrompterModal] = React.useState(false);
  // const [openCharacterModal, setOpenCharacterModal] = React.useState(false);

  // const handleOpen = () => setOpenCardModal(true);
  // const handleClose = () => setOpenCardModal(false);

  // const handleOpenPrompter = () => setOpenPrompterModal(true);
  // const handleClosePrompter = () => setOpenPrompterModal(false);

  // const handleOpenCharacters = () => setOpenCharacterModal(true);
  // const handleCloseCharacters = () => setOpenCharacterModal(false);
  const isBelowDesktopView = useMediaQuery('(max-width: 899px)');
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <StyledRecentWork
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100%' }}
      id="RecentWork"
      className={'styled-recent-work'}
    >
      <Text
        className="recent-work-text"
        fontSize={36}
        fontWeight={700}
        color={'white'}
        text={'Recent Work'}
      />
      {/* <Box
        className={'recent-work-wrap'}
        position={'relative'}
        width={'100%'}
        display="flex"
        justifyContent="center"
      >
        {/* <Box
          width={'fit-content'}
          className={'arrow-icon back'}
          onClick={() => scrollBack()}
        >
          {backArrowIcon}
        </Box> 
        <Box id={'scroll-next'} className={'card-grid'} display={'flex'}>
          {/* <StyledCard className={'card'} onClick={handleOpenPrompter}>
            <Box className={'hover-section'}></Box>
            <Text
              className="details"
              fontSize={24}
              fontWeight={700}
              color={'white'}
              text={'Interactive Teleprompter Demo'}
            />

            <Box className={'more'}>{magnifierSvg}</Box>
            <img className="figure" src={demo1Svg} alt="demo-1" />
            <Box className={'top-badge'}>
              <Text
                fontSize={12}
                fontWeight={600}
                color={'white'}
                text={'Try it yourself'}
              />
            </Box>
          </StyledCard> *
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
            <img className="figure" src={demo1Svg} alt="demo-2" />
            <Box className={'top-badge'}>
              <Text
                fontSize={10}
                fontWeight={600}
                color={'white'}
                text={'Demo'}
              />
            </Box>
          </StyledCard>
          <StyledCard className={'card'} onClick={handleOpenCharacters}>
            <Box className={'hover-section'}></Box>
            <Text
              className="details"
              fontSize={24}
              fontWeight={700}
              color={'white'}
              text={'Pure CSS Characters'}
            />

            <Box className={'more'}>{magnifierSvg}</Box>
            <img className="figure" src={demo2Svg} alt="demo-2" />
            <Box className={'top-badge'}>
              <Text
                fontSize={12}
                fontWeight={600}
                color={'white'}
                text={'Demo'}
              />
            </Box>
          </StyledCard>
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
      <CustomModal
        width="1200px"
        height="700px"
        open={openCharacterModal}
        handleClose={handleCloseCharacters}
        handleOpen={handleOpenCharacters}
      >
        <CustomCharacters />
      </CustomModal> */}

      <CardContainer className="recent-work-grid" container xs={12} rowGap={7}>
        {projects &&
          projects.map((project, index) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              even={isBelowDesktopView ? true : index % 2 === 0}
              setOpenModal={setOpenModal}
            />
          ))}
      </CardContainer>
    </StyledRecentWork>
  );
};

export default RecentWork;
