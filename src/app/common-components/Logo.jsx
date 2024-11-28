import React from 'react';
import { SpanTitle, NavLogo, Span, Divider } from '../components/Navbar/styles';

const Logo = () => {
  return (
    <NavLogo>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <SpanTitle>
          <Span>Y</Span>
          <Divider>YUSRA FATIMA</Divider>
          <Span>F</Span>
        </SpanTitle>
      </div>
    </NavLogo>
  );
};

export default Logo;
