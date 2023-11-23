import React from 'react';
import logo from '../../../assets/logo.svg';
import { Img, LinkStyle, Title } from './style.js';

function Logo() {
  return (
    <LinkStyle to="/">
      <Img src={logo} alt="Логотип" />
      <Title>Фермерские продукты</Title>
    </LinkStyle>
  );
}

export default Logo;
