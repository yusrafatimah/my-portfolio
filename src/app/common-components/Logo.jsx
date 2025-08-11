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
          <Span style={{ position: 'absolute', top: '-6px', left: '4px' }}>
            Y
          </Span>

          <Span
            style={{
              position: 'absolute',
              bottom: '-10px',
              fontFamily: 'auto',
              right: '4px',
            }}
          >
            F
          </Span>
        </SpanTitle>
      </div>
    </NavLogo>
  );
};

export default Logo;
