import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';
import Container from '../container/container';
import Copyright from '../../ui/copyright/copyright';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <dir className='footer-wrapper'>
          <Logo />
          <Copyright />
        </dir>
      </Container>
    </footer>
  );
}

export default Footer;
