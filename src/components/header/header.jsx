import React from 'react';
import { HeaderContainer, HeaderButtonStyle, Span } from './header.styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderButtonStyle to="/schoolPage">
        <Span>schools</Span>
      </HeaderButtonStyle>
    </HeaderContainer>
  );
}
