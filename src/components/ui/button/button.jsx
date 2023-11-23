import React from 'react';
import { Button } from './style.js';

function ButtonBuy({ className }) {
  return (
    <Button className={className} to="order">
      Купить
    </Button>
  );
}

export default ButtonBuy;
