import { Box } from '@mui/material';
import React from 'react';
import Logo from '../../common-components/Logo';
import { StyledFooter } from './styles';
import { linkedInSvg } from '../../assets/svgs/linkedin';
import { instaSvg } from '../../assets/svgs/insta';
import { twitterSvg } from '../../assets/svgs/twitter';
import Text from '../../common-components/Text';

const FooterSection = () => {
  return (
    <StyledFooter>
      <Logo />
      <Box className={'social-platform-wrapper'}>
        <a
          href={'https://www.linkedin.com/in/yusra-f-518658206/'}
          target={'_blank'}
          rel="noreferrer"
        >
          {linkedInSvg}
        </a>
        <a href={'/'}>{instaSvg}</a>
        <a href={'/'}>{twitterSvg}</a>
      </Box>
      <Box display={'flex'} gap={'20px'}>
        <Text
          fontSize={16}
          fontWeight={700}
          lineHeight={1.7}
          color={'white'}
          letterSpacing={30}
          textTransform={'uppercase'}
          text={'Yusra'}
          sx={{
            '&::first-letter': {
              fontSize: '25px',
            },
            letterSpacing: { xs: '10px', sm: '25px', md: '30px', lg: '30px' },
          }}
        />
        <Text
          fontSize={16}
          fontWeight={700}
          lineHeight={1.7}
          color={'white'}
          letterSpacing={30}
          textTransform={'uppercase'}
          text={'Fatima'}
          sx={{
            '&::first-letter': {
              fontSize: '25px',
            },
            letterSpacing: { xs: '10px', sm: '25px', md: '30px', lg: '30px' },
          }}
        />
      </Box>
      <Text
        fontSize={16}
        fontWeight={500}
        lineHeight={1.7}
        color={'white'}
        letterSpacing={2}
        text={'yusraafatima19@gmail.com  '}
      />
    </StyledFooter>
  );
};

export default FooterSection;
