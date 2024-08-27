import React from 'react';
import Text from '../../common-components/Text';
import { Box, LinearProgress } from '@mui/material';
import { StyledAboutTextSection } from './styles';
import CustomButton from '../../common-components/CustomButton';
import { truckSvg } from '../../assets/svgs/truck';

const AboutText = () => {
  return (
    <StyledAboutTextSection
      className="styled-about-text-section"
      flexDirection={{
        xs: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
      }}
      padding={{
        xs: '0 0 30px 0',
        sm: '0 0 30px 0',
        md: '0 0 30px 0',
        lg: '30px',
      }}
      alignItems={{ xs: 'center', sm: 'center', md: 'center' }}
      display={'flex'}
      width={'100%'}
      gap={'40px'}
    >
      <Box
        maxWidth={{ xs: '90%', sm: '90%', md: '90%', lg: '50%' }}
        width={'100%'}
        mt={'25px'}
      >
        <Text
          margin={'0 0 1.5rem 0'}
          fontSize={16}
          fontWeight={500}
          lineHeight={1.7}
          color={'white'}
          text={
            'I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.I have rich experience in web site design and building and customization, also I am good at WordPress.'
          }
        />
        <CustomButton
          svg={truckSvg}
          text={'Download CV'}
          url={'../../assets/docs/Yusra_Fatima_Senior_Dev_Resume.pdf'}
          type={'link'}
          downloadTitle={'Yusra_Frontend_Dev_Resume'}
          height={35}
          width={150}
          fontSize={'13px'}
          fontWeight={500}
        />
      </Box>
      <Box
        maxWidth={{ xs: '90%', sm: '90%', md: '90%', lg: '50%' }}
        width={'100%'}
      >
        <Box mt={'20px'}>
          <Text
            margin={'0 0 1rem 0'}
            fontSize={16}
            fontWeight={500}
            color={'white'}
            text={'React'}
          />
          <LinearProgress
            sx={{ height: '8px', borderRadius: '5px' }}
            variant="buffer"
            value={90}
            color="secondary"
          />
        </Box>

        <Box mt={'20px'}>
          <Text
            margin={'0 0 1rem 0'}
            fontSize={16}
            fontWeight={500}
            color={'white'}
            text={'Javascript'}
          />
          <LinearProgress
            sx={{ height: '8px', borderRadius: '5px' }}
            variant="buffer"
            value={95}
            color="primary"
          />
        </Box>
        <Box mt={'20px'}>
          <Text
            margin={'0 0 1rem 0'}
            fontSize={16}
            fontWeight={500}
            color={'white'}
            text={'Typescript'}
          />
          <LinearProgress
            sx={{ height: '8px', borderRadius: '5px' }}
            variant="buffer"
            value={85}
            color="error"
          />
        </Box>
        <Box mt={'20px'}>
          <Text
            margin={'0 0 1rem 0'}
            fontSize={16}
            fontWeight={500}
            color={'white'}
            text={'Redux'}
          />
          <LinearProgress
            sx={{ height: '8px', borderRadius: '5px' }}
            variant="buffer"
            value={90}
            color="info"
          />
        </Box>
      </Box>
    </StyledAboutTextSection>
  );
};

export default AboutText;
