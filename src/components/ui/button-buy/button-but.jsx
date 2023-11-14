import React from 'react';
import './style.css';

function ButtonBuy({ marginTop }) {
  return (
    <a className='button-link' href='/' style={{ marginTop: marginTop }}>
      Купить
    </a>
  );
}

export default ButtonBuy;
