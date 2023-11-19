import React from 'react';
import logo from '../../../assets/logo.svg';
import { Img, Link, Title } from './style.js';

function Logo() {
  return (
    <Link href="/">
      <Img src={logo} alt="Логотип" />
      <Title>Фермерские продукты</Title>
    </Link>
  );
}

export default Logo;
