import React from 'react';
import { StyledSkillsAnimation } from './styles';
import { blobSvg } from '../../assets/svgs/blob';

const SkillsSection = () => {
  return (
    <StyledSkillsAnimation className="styled-skills-animation">
      {blobSvg}
      <div className="main-orbit">
        <div className="inner-images" id={'skills-animated-blob'}>
          <div className="image-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5XuEHgCJBwJsLt9qTwExX51W0JZcA4Xg95JAfg5qvc9vK4XMR4xjj9ugwcL8Dth4A0Q&usqp=CAU"
              alt=""
            />
          </div>
          <div className="waviy">
            <span style={{ '--i': 1 }}>S</span>
            <span style={{ '--i': 2 }}>K</span>
            <span style={{ '--i': 3 }}>I</span>
            <span style={{ '--i': 4 }}>L</span>
            <span style={{ '--i': 5 }}>L</span>
            <span style={{ '--i': 6 }}>S</span>
          </div>
          <div className="rotating-orbits">
            <div className="flip-image img-1">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://play-lh.googleusercontent.com/u2R7nSs_e3UTohf0LOSJtsnpwICczjGVWW131fKbtvA4fif4WkwuKicUOa3Gxq7QTNE"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>Material UI</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-2">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://bestdesignhub.com/wp-content/uploads/2020/02/ant-design-logo.jpg"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>Ant Design</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-3">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://ghwlchlaks.github.io/assets/images/cover/react_js.png"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>Javascript</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-4">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968326.png"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>Typescript</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-5">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>CSS 3</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-6">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kBKaG5tKGPjFPGEnbmWSQIL1hX7PaNNQvQ&s"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>React JS</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-7">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-uIKxG5TKn38uMAokw3rvSIg6PrGnc2QcA&usqp=CAU"
                    alt="icon"
                  />
                </div>
                <div className="flip-back">
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="flip-image img-8">
              <div className="flip-image-inner">
                <div className="flip-front">
                  <img
                    src="https://centrifugal.dev/img/centrifugo_soc.png"
                    alt=""
                  />
                </div>
                <div className="flip-back">
                  <p>Centrifugo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Box className="main-orbit">
        <Box className="inner-images">
          <Box className="image-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5XuEHgCJBwJsLt9qTwExX51W0JZcA4Xg95JAfg5qvc9vK4XMR4xjj9ugwcL8Dth4A0Q&usqp=CAU"
              alt=""
            />
          </Box>
          <Box className="waviy">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </Box>
          <Box className="rotating-orbits">
            <Box className="flip-image img-1">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://play-lh.googleusercontent.com/u2R7nSs_e3UTohf0LOSJtsnpwICczjGVWW131fKbtvA4fif4WkwuKicUOa3Gxq7QTNE"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>Material UI</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-2">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://bestdesignhub.com/wp-content/uploads/2020/02/ant-design-logo.jpg"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>Ant Design</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-3">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://ghwlchlaks.github.io/assets/images/cover/react_js.png"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>Javascript</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-4">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968326.png"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>Typescript</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-5">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>CSS 3</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-6">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kBKaG5tKGPjFPGEnbmWSQIL1hX7PaNNQvQ&s"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>React JS</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-7">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-uIKxG5TKn38uMAokw3rvSIg6PrGnc2QcA&usqp=CAU"
                    alt="icon"
                  />
                </Box>
                <Box className="flip-back">
                  <p>Bootstrap</p>
                </Box>
              </Box>
            </Box>
            <Box className="flip-image img-8">
              <Box className="flip-image-inner">
                <Box className="flip-front">
                  <img
                    src="https://centrifugal.dev/img/centrifugo_soc.png"
                    alt=""
                  />
                </Box>
                <Box className="flip-back">
                  <p>Centrifugo</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </StyledSkillsAnimation>
  );
};
export default SkillsSection;
