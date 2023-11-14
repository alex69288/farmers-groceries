import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';
import ButtonBuy from '../../ui/button-buy/button-but';
import Container from '../container/container';

function Header() {
  return (
    <header className='header'>
      <Container>
        <div className='header-wrapper'>
          <Logo />
          <ButtonBuy />
        </div>
      </Container>
    </header>
  );
}

export default Header;
