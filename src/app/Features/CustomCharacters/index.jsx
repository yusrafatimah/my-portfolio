import React from 'react';
import BirdAnimationSection from './BirdAnimation';
import Panda from './Panda';
import { StyledCustomCharacters } from './styles';
import Fox from './Fox';

const CustomCharacters = () => {
  return (
    <StyledCustomCharacters>
      <Panda />
      <BirdAnimationSection />
      <Fox />
    </StyledCustomCharacters>
  );
};

export default CustomCharacters;
