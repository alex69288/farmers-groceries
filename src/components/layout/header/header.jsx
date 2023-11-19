import React from 'react';
import './style.js';
import Logo from '../../ui/logo/logo';
import ButtonBuy from '../../ui/button-buy/button-but';
import Container from '../container/container';
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
