import React from 'react';
import BirdAnimationSection from './BirdAnimation';
import Panda from './Panda';
import { StyledCustomCharacters } from './styles';
import Fox from './Fox';
import Chameleon from './Chameleon';

const CustomCharacters = () => {
  return (
    <StyledCustomCharacters>
      <Panda />
      <BirdAnimationSection height={'100vh'} scale={'scale(.8)'} />
      <Fox />
      <Chameleon />
    </StyledCustomCharacters>
  );
};

export default CustomCharacters;
