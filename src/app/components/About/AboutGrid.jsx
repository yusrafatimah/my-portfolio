import React from 'react';
import { StyledAboutGrid } from './styles';
import Text from '../../common-components/Text';
import { Box } from '@mui/material';
import { projectSvg } from '../../assets/svgs/projects';
import { coffeeSvg } from '../../assets/svgs/coffee';

const AboutGrid = () => {
  return (
    <StyledAboutGrid className="styled-about-section">
      <Box
        className={'grid-wrapper'}
        width={'100%'}
        display={'flex'}
        gap={'30px'}
      >
        {projectSvg}
        <Box width={'fit-content'} className={'grid'}>
          <Text
            fontSize={36}
            fontWeight={700}
            lineHeight={1.7}
            color={'white'}
            text={'12+'}
          />
          <Text
            fontSize={16}
            fontWeight={400}
            lineHeight={1.7}
            color={'white'}
            text={'Projects Completed'}
          />
        </Box>
      </Box>
      <Box
        className={'grid-wrapper'}
        width={'100%'}
        display={'flex'}
        gap={'30px'}
      >
        {coffeeSvg}
        <Box width={'fit-content'} className={'grid'}>
          <Text
            fontSize={36}
            fontWeight={700}
            lineHeight={1.7}
            color={'white'}
            text={'1580+'}
          />
          <Text
            fontSize={16}
            fontWeight={400}
            lineHeight={1.7}
            color={'white'}
            text={'Cup of coffee'}
          />
        </Box>
      </Box>
      <Box
        className={'grid-wrapper'}
        width={'100%'}
        display={'flex'}
        gap={'30px'}
      >
        <img
          className="image"
          src={require('../../assets/gifs/rocket.gif')}
          alt={'rocket-gif'}
        />
        <Box width={'fit-content'} className={'grid'}>
          <Text
            fontSize={36}
            fontWeight={700}
            lineHeight={1.7}
            color={'white'}
            text={'50+'}
          />
          <Text
            fontSize={16}
            fontWeight={400}
            lineHeight={1.7}
            color={'white'}
            text={'CSS Animations'}
          />
        </Box>
      </Box>
    </StyledAboutGrid>
  );
};

export default AboutGrid;
