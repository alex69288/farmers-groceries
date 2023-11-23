import React from 'react';
import ButtonBuy from '../../ui/button/button.jsx';
import Logo from '../../ui/logo/logo';
import Container from '../container/container';
import './style.js';
import { HeaderWrapper, StyleHeader } from './style.js';

function Header() {
  return (
    <StyleHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <ButtonBuy />
        </HeaderWrapper>
      </Container>
    </StyleHeader>
  );
}

export default Header;
