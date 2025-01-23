import React from 'react';
import {
  StyledCarousalSection,
  StyledClientsAndReviewsSection,
} from './styles';
import Text from '../../common-components/Text';
import { Avatar, Box } from '@mui/material';

const ClientsAndReviewsSection = () => {
  const carouselImages = [
    {
      name: 'Syed Haseeb',
      text: '"Genuine expert as Front end developer" is the phrase that pops into my mind when I think about Yusra.',
      title: 'Senior Backend Developer at Heuristify(Team Lead)',
    },
    {
      name: 'Rooshan Ahmed',
      text: 'Yusra is sincere and passionate about solving client-related problems and writing clean code while working on projects. She has tremendous potential while enthusiastically tackling all assignments. She is friendly and easy-going person.',
      title:
        'Full Stack Developer at H&S Real Estate Pakistan (Freelance client)',
    },
    {
      name: 'Muhammad Usama',
      text: `I initially worked with Yusra Fatima as a colleague before she became my team lead. Her helping nature, problem solving mindset and technical skills in ReactJS perfectly complemented her role in both capacities. Yusra can design anything, and I mean ANYTHING. Along with her excellent understanding of ever evolving HTML/CSS and other designing tools, her ability to integrate such complex designs seamlessly makes her a wonderful developer. From designing to integration and from state management to data handling, I found her a really talented and efficient Javascript Developer. Moreover, as a lead of development team, Yusra showed amazing leadership skills by always welcoming opposite views, creating an environment of healthy collaboration and friendly discussions. Consequently such a positive team environment helped us to complete and deliver our tasks efficiently and on time.`,
      title: 'Full Stack Developer',
    },
    {
      name: 'Shaiharyaar Ahmad',
      text: `I  have been in this field for 3+ years and i have not yet find a more devoted and passsionate person about it's work more than Yusra. If you want her to give 100%, she will give her 110%. She will go above and beyond. She has a creative mind and keen sense when it comes to Frontend.`,
      title: 'Senior Full Stack Developer at OneStream Live',
    },
    {
      name: 'Ayyama Qazi',
      text: `It is my great pleasure to recommend Yusra Fatima. She is an exceptionally talented individual and her professionalism is evident from her attention to details, ability to meet deadlines and not only does she collaborate with her colleagues very efficiently but is always willing to lend a helping hand where required. She knows how to navigate a project and be a team player. Her creativity and drive to constantly learn and grow are a huge plus. I am confident Yusra would be a valuable asset to any organisation.`,
      title: 'Lead Quality Assurance Engineer at OneStream Live',
    },
    {
      name: 'Ifrah Nisar',
      text: `I highly recommend Yusra, who excelled as the lead of the Studio team during our time together at OneStream Live. Her expertise in project management and creative strategy consistently drove her team's initiatives to success. Yusra's ability to inspire her team while maintaining a collaborative atmosphere made a significant impact across departments. Her problem-solving skills and attention to detail ensured that every project exceeded expectations. It was a pleasure to work alongside her, and I have no doubt she will continue to achieve great things.`,
      title: 'Digital Content Creator at OneStream Live',
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
      height={{ xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' }}
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
        <div></div>
        <div></div>
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
                    color={'light'}
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
                      color={'light'}
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

      {/* <StyledScrollDiv
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
      </StyledScrollDiv> */}
    </StyledClientsAndReviewsSection>
  );
};

export default ClientsAndReviewsSection;
