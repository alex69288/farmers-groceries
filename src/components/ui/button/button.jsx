import React from 'react';
import './style.js';
import { Button } from './style.js';

function ButtonBuy({ className }) {
  return (
    <Button className={className} href="/">
      Купить
    </Button>
  );
}

export default ButtonBuy;
