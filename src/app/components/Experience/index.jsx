import React from 'react';
import { StyledExperienceSection } from './styles';
import Text from '../../common-components/Text';
import { Box, Link } from '@mui/material';
import { StyledScrollDiv } from '../Home/styles';

const ExperienceSection = () => {
  return (
    <StyledExperienceSection
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' }}
      id="ExperienceSection"
      className={'styled-experience-section'}
    >
      <Text
        className="experience-section-text"
        fontSize={36}
        fontWeight={700}
        color={'white'}
        text={'Experience'}
      />
      <Box
        className={'grid'}
        gap={{ xs: '50px', sm: '50px', md: '60px', lg: '70px', xl: '80px' }}
      >
        <Box
          maxWidth={{ xs: '75%', sm: '75%', md: '80%', lg: 500, xl: 520 }}
          width={'100%'}
          className={'grid-item'}
        >
          <Text
            fontSize={20}
            fontWeight={700}
            color={'#bdcbcf'}
            text={'OneStream Live (Remote)'}
          />
          <Text
            fontSize={14}
            fontWeight={400}
            margin={'10px 0'}
            color={'white'}
            text={'Full Time - 2 years 11 months'}
          />
          <Box position={'relative'} className={'grid-item-wrapper'}>
            <Text
              className={'dot'}
              fontSize={45}
              fontWeight={700}
              color={'white'}
              text={'•'}
            />
            <Box className={'line'}></Box>
            <Box margin={'5px 0 30px 45px'} className={'content-wrapper'}>
              <Text
                fontSize={14}
                fontWeight={400}
                color={'#bdcbcf'}
                text={'Oct 2023 - Present'}
              />
              <Text
                fontSize={20}
                fontWeight={700}
                margin={'10px 0'}
                color={'white'}
                text={'Team Lead'}
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Started leading a team of senior frontend and full stack developers along with supervising a few junior developers.'
                }
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• I manage the team sprints and also work on developing new features along with code reviews and collaboration with other teams.'
                }
              />
            </Box>
          </Box>
          <Box position={'relative'} className={'grid-item-wrapper'}>
            <Text
              className={'dot'}
              fontSize={45}
              fontWeight={700}
              color={'white'}
              text={'•'}
            />
            <Box className={'line'}></Box>
            <Box margin={'5px 0 30px 45px'} className={'content-wrapper'}>
              <Text
                fontSize={14}
                fontWeight={400}
                color={'#bdcbcf'}
                text={'Jul 2023 - Oct 2023'}
              />
              <Text
                fontSize={20}
                fontWeight={700}
                margin={'10px 0'}
                color={'white'}
                text={'Senior Full Stack Developer'}
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Started working on a new product using Styled Components, Material UI, and TypeScript, creating 80% of the new revamped UI from FIGMA designs.'
                }
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Ensured pixel-perfect implementations and added animations for enhanced user engagement'
                }
              />
            </Box>
          </Box>
          <Box position={'relative'} className={'grid-item-wrapper'}>
            <Text
              className={'dot'}
              fontSize={45}
              fontWeight={700}
              color={'white'}
              text={'•'}
            />
            <Box className={'line'}></Box>
            <Box margin={'5px 0 0px 45px'} className={'content-wrapper'}>
              <Text
                fontSize={14}
                fontWeight={400}
                color={'#bdcbcf'}
                text={'Nov 2021 - Jul 2023'}
              />
              <Text
                fontSize={20}
                fontWeight={700}
                margin={'10px 0'}
                color={'white'}
                text={'Front-End Developer'}
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Developed a mobile-responsive live streaming studio with ReactJS, Ant Design, HTML5, CSS3, and JavaScript and SASS/SCSS.'
                }
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Implemented server-side logic using RESTful APIs ensuring seamless front-end and back-end communication'
                }
              />
            </Box>
          </Box>
        </Box>
        <Box
          maxWidth={{ xs: '75%', sm: '75%', md: '80%', lg: 500, xl: 520 }}
          width={'100%'}
          className={'grid-item'}
        >
          <Text
            fontSize={20}
            fontWeight={700}
            color={'#bdcbcf'}
            text={'TOYCYCLE/Heuristify (On-site)'}
          />
          <Text
            fontSize={14}
            fontWeight={400}
            margin={'10px 0'}
            color={'white'}
            text={'Full Time - 10 months'}
          />
          <Box
            position={'relative'}
            className={'grid-item-wrapper'}
            mb={'20px'}
          >
            <Text
              className={'dot'}
              fontSize={45}
              fontWeight={700}
              color={'white'}
              text={'•'}
            />
            <Box className={'line'}></Box>
            <Box margin={'5px 0 30px 45px'} className={'content-wrapper'}>
              <Text
                fontSize={14}
                fontWeight={400}
                color={'#bdcbcf'}
                text={'Feb 2021 - Nov 2021'}
              />
              <Text
                fontSize={20}
                fontWeight={700}
                margin={'10px 0'}
                color={'white'}
                text={'Frontend Web Developer'}
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={
                  '• Developed a 4K-optimized website UI for a visually appealing experience. Contributed to multiple projects, including an Invoices web app with client and admin panels, using React JS for scalable solutions.'
                }
              />
            </Box>
          </Box>
          <Text
            fontSize={26}
            fontWeight={700}
            color={'white'}
            text={'Education'}
          />

          <Box position={'relative'} className={'grid-item-wrapper'}>
            <Text
              className={'dot'}
              fontSize={45}
              fontWeight={700}
              color={'white'}
              text={'•'}
            />
            <Box className={'line'}></Box>
            <Box margin={'5px 0 30px 45px'} className={'content-wrapper'}>
              <Text
                fontSize={14}
                fontWeight={400}
                color={'#bdcbcf'}
                text={'Feb 2017 - Feb 2021'}
              />
              <Text
                fontSize={20}
                fontWeight={700}
                margin={'10px 0'}
                color={'white'}
                text={'COMSATS Institute of Information and Technology'}
              />
              <Text
                fontSize={14}
                fontWeight={400}
                color={'white'}
                text={'Bachelors in Computer Science'}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <StyledScrollDiv
        mt={'30px'}
        mb={'15px'}
        width={'100%'}
        underline="none"
        href="#ClientsAndReviewsSection"
      >
        <Box
          className="styled-scroll-div"
          display={'flex'}
          alignItems="center"
          justifyContent="center"
          flexDirection={'column'}
        >
          <Text
            className="scroll-text"
            margin={'0 0 10px 0'}
            fontSize={14}
            fontWeight={500}
            color={'white'}
            text={'CLIENTS & REVIEWS'}
          />
          <div className="cursor-outer">
            <div className="animated-blob"></div>
          </div>
        </Box>
      </StyledScrollDiv> */}
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
