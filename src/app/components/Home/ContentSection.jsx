import React from 'react';
import { Box } from '@mui/material';
import { linkedInSvg } from '../../assets/svgs/linkedin';
import { instaSvg } from '../../assets/svgs/insta';
import { twitterSvg } from '../../assets/svgs/twitter';
import CustomButton from '../../common-components/CustomButton';
import Text from '../../common-components/Text';
import { dragonSvg } from '../../assets/svgs/dragon';

const ContentSection = () => {
  return (
    <>
      <Text
        className={'intro-text'}
        color={'white'}
        fontSize={20}
        fontWeight={500}
        text={'Hi, My name is'}
      />
      <div className="name-text">
        <span className="first-letter">Y</span>
        <span>usra</span>
        <span className="first-letter"> F</span>
        <span>atima</span>
      </div>

      <Box
        display={'flex'}
        alignItems="center"
        gap={'10px'}
        minWidth={'355px'}
        justifyContent={'flex-start'}
      >
        <Text
          className={'intro-text'}
          text={'I am a Front-End Web'}
          fontSize={25}
          fontWeight={500}
          color={'white'}
        />

        <Text
          text={'Developer'}
          fontSize={25}
          fontWeight={500}
          color={'white'}
          className="wipe-animated-text"
        />
      </Box>
      <Text
        text={`I have expertise in building modern and user-friendly pixel-perfect interfaces. I specialize in solving complex challenges with innovative solutions, blending design and functionality to craft outstanding digital experiences. Let's build something extraordinary together!`}
        color={'#c8c8c8'}
        fontSize={14}
        margin={'10px 0 0 0'}
        fontWeight={400}
      />
      <Box className={'social-platform-wrapper'}>
        {linkedInSvg}
        {instaSvg}
        {twitterSvg}
        <CustomButton
          url={'../../assets/docs/Yusra_Fatima_Senior_Dev_Resume.pdf'}
          type={'link'}
          downloadTitle={'Yusra_Frontend_Dev_Resume'}
          svg={dragonSvg}
          text={'Download CV'}
          height={40}
          width={150}
          fontSize={'14px'}
          fontWeight={500}
          // margin={'40px 0 20px'}
        />
      </Box>
    </>
  );
};

export default ContentSection;
