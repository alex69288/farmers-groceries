import React from 'react';
import logo from '../../../assets/logo.svg';

import './style.css';

function Logo() {
  return (
    <a className='logo__link' href='/'>
      <img className='logo__img' src={logo} alt='Логотип' />
      <span className='logo__title'>Фермерские продукты</span>
    </a>
  );
}

export default Logo;
