import React from 'react';
import { Box } from '@mui/material';
import { linkedInSvg } from '../../assets/svgs/linkedin';
import { instaSvg } from '../../assets/svgs/insta';
import { twitterSvg } from '../../assets/svgs/twitter';
import CustomButton from '../../common-components/CustomButton';
import Text from '../../common-components/Text';
import BirdAnimationSection from './BirdAnimation';
import { dragonSvg } from '../../assets/svgs/dragon';

const ContentSection = () => {
  return (
    <>
      <Box className={'bird-animation-wrapper'}>
        <Box className={'inner'}>
          <div className="cage-string"></div>
          <div className="cage-top"></div>
          <BirdAnimationSection />
        </Box>
      </Box>
      <Text
        color={'white'}
        fontSize={20}
        fontWeight={500}
        text={'Hi, My name is'}
      />
      <Text
        color={'white'}
        fontSize={80}
        fontWeight={500}
        text={'Yusra Fatima.'}
        fontFamily={` "Playwrite BE VLG", cursive !important`}
        margin={'20px 0 40px 0'}
      />
      <Box
        display={'flex'}
        alignItems="center"
        gap={'10px'}
        minWidth={'355px'}
        justifyContent={'flex-start'}
      >
        <Text text={'I am a'} fontSize={25} fontWeight={500} color={'white'} />

        <Text
          text={'Front-End Web Developer'}
          fontSize={25}
          fontWeight={500}
          color={'white'}
          className="wipe-animated-text"
        />
      </Box>
      <Box className={'social-platform-wrapper'}>
        {linkedInSvg}
        {instaSvg}
        {twitterSvg}
      </Box>
      <CustomButton
        svg={dragonSvg}
        text={'Download CV'}
        url={'#Home'}
        height={40}
        width={150}
        fontSize={'14px'}
        fontWeight={500}
        margin={'40px 0 20px'}
      />
    </>
  );
};

export default ContentSection;
