import React from 'react';
import Logo from '../../ui/logo/logo';
import Container from '../container/container';
import Copyright from '../../ui/copyright/copyright';
import { StyleFooter, FooterWrapper } from './style';

function Footer() {
  return (
    <StyleFooter>
      <Container>
        <FooterWrapper>
          <Logo />
          <Copyright />
        </FooterWrapper>
      </Container>
    </StyleFooter>
  );
}

export default Footer;
