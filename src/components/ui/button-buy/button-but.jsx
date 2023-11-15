import React from 'react';
import './style.css';

function ButtonBuy({ className }) {
  return (
    <a className={className ? `button ${className}` : 'button'} href='/'>
      Купить
    </a>
  );
}

export default ButtonBuy;
