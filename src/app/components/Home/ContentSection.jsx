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
      <Text className="name" text={'Yusra Fatima'} />
      <Box
        display={'flex'}
        alignItems="center"
        gap={'10px'}
        minWidth={'355px'}
        justifyContent={'flex-start'}
      >
        <Text text={'I am a'} fontSize={20} fontWeight={500} color={'white'} />

        <Text
          text={'Front-End Web Developer'}
          fontSize={20}
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
        text={'Hire me'}
        url={'#Home'}
        height={50}
        width={170}
        fontSize={'16px'}
        fontWeight={700}
        margin={'40px 0 20px'}
      />
    </>
  );
};

export default ContentSection;
