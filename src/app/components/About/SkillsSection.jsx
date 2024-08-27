import React from 'react';
import { StyledSkillsAnimation } from './styles';
import { blobSvg } from '../../assets/svgs/blob';
import { Box } from '@mui/material';

const SkillsSection = () => {
  return (
    <StyledSkillsAnimation className="styled-skills-animation">
      {blobSvg}
      <Box class="main-orbit">
        <Box class="inner-images">
          <Box class="image-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5XuEHgCJBwJsLt9qTwExX51W0JZcA4Xg95JAfg5qvc9vK4XMR4xjj9ugwcL8Dth4A0Q&usqp=CAU"
              alt=""
            />
          </Box>
          <Box class="waviy">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </Box>
          <Box class="rotating-orbits">
            <Box class="flip-image img-1">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://play-lh.googleusercontent.com/u2R7nSs_e3UTohf0LOSJtsnpwICczjGVWW131fKbtvA4fif4WkwuKicUOa3Gxq7QTNE"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>Material UI</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-2">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://bestdesignhub.com/wp-content/uploads/2020/02/ant-design-logo.jpg"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>Ant Design</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-3">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://ghwlchlaks.github.io/assets/images/cover/react_js.png"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>Javascript</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-4">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968326.png"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>Typescript</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-5">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>CSS 3</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-6">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kBKaG5tKGPjFPGEnbmWSQIL1hX7PaNNQvQ&s"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>React JS</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-7">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-uIKxG5TKn38uMAokw3rvSIg6PrGnc2QcA&usqp=CAU"
                    alt="icon"
                  />
                </Box>
                <Box class="flip-back">
                  <p>Bootstrap</p>
                </Box>
              </Box>
            </Box>
            <Box class="flip-image img-8">
              <Box class="flip-image-inner">
                <Box class="flip-front">
                  <img
                    src="https://centrifugal.dev/img/centrifugo_soc.png"
                    alt=""
                  />
                </Box>
                <Box class="flip-back">
                  <p>Centrifugo</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledSkillsAnimation>
  );
};

export default SkillsSection;
