import React from 'react';
import {
  StyledCarousalSection,
  StyledClientsAndReviewsSection,
} from './styles';
import Text from '../../common-components/Text';
import { Avatar, Box, Link } from '@mui/material';
import { StyledScrollDiv } from '../Home/styles';

const ClientsAndReviewsSection = () => {
  const carouselImages = [
    {
      name: 'Syed HaseebSyed Haseeb',
      text: '"Genuine expert as Front end developer" is the phrase that pops into my mind when I think about Yusra.',
      title: 'Senior Backend Developer at Toycycle',
    },
    {
      name: 'Rooshan Ahmed',
      text: 'Yusra is sincere and passionate about solving client-related problems and writing clean code while working on projects. She has tremendous potential while enthusiastically tackling all assignments. She is friendly and easy-going person.',
      title: 'Full Stack Developer at H&S Real Estate Pakistan',
    },
    {
      name: 'Shaiharyaar Ahmad',
      text: `I  have been in this field for 3+ years and i have not yet find a more devoted and passsionate person about it's work more than Yusra. If you want her to give 100%, she will give her 110%. She will go above and beyond. She has a creative mind and keen sense when it comes to Frontend.`,
      title: 'Senior Full Stack Developer at OneStream Live',
    },
    {
      name: 'Summen Zahid',
      text: `I've had the pleasure of working closely with Yusra and she continually impresses everyone by her strong leadership and clear communication and aligning team goals with company objectives, ensuring our product is successful. I highly recommend Yusra for her exceptional management skills, communication abilities, and her expertise in UI and Frontend Development.`,
      title: 'Senior Full Stack Engineer at OneStream Live',
    },
  ];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef();
  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  return (
    <StyledClientsAndReviewsSection
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100vh' }}
      id="ClientsAndReviewsSection"
      className={'clients-reviews-section'}
    >
      <Text
        className="clients-reviews-text"
        fontSize={36}
        fontWeight={700}
        color={'white'}
        text={'Clients & Reviews'}
      />
      <StyledCarousalSection>
        <Box className="slideshow">
          <Box
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {carouselImages.map((data, index) => (
              <Box key={index} className="slide">
                <Box className={'info'}>
                  <Avatar
                    alt="No Image"
                    sx={{
                      height: 90,
                      width: 90,
                      fontSize: 40,
                      color: '#ffffff',
                      background: '#44b7aa;',
                      border: '2px dotted #FFEB3B',
                    }}
                    mb={'1rem'}
                  >
                    {data.name.charAt(0)}
                  </Avatar>
                  <Text
                    fontSize={20}
                    fontWeight={700}
                    color={'white'}
                    text={data?.name}
                    margin={'1rem 0 0 0'}
                  />
                  <Text
                    fontSize={16}
                    fontWeight={400}
                    color={'#00ffbcd9'}
                    text={data?.title}
                  />
                </Box>
                <Box className={'flex-wrap'}>
                  <Box className={'review'}>
                    <Text
                      fontSize={17}
                      fontWeight={400}
                      color={'white'}
                      text={data?.text}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="slideshowDots">
          {carouselImages.map((_, idx) => (
            <Box
              id={`os-3060${idx}`}
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></Box>
          ))}
        </Box>
      </StyledCarousalSection>

      <StyledScrollDiv
        mb={'15px'}
        width={'100%'}
        underline="none"
        href="#homeSection"
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
            text={'BACK TO TOP'}
          />
          <div className="cursor-outer">
            <div className="animated-blob"></div>
          </div>
        </Box>
      </StyledScrollDiv>
    </StyledClientsAndReviewsSection>
  );
};

export default ClientsAndReviewsSection;
