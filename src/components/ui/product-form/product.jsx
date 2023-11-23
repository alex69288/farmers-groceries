import React, { useState } from 'react';
import styled from 'styled-components';
import check from '../../../assets/check.svg';

function Product({ name, price, sum, setSum }) {
  const [checked, setChecked] = useState(false);

  return (
    <Label>
      {name}
      <Input
        type="checkbox"
        checked={checked}
        onChange={e => {
          setChecked(!checked);
          if (!checked) {
            setSum(sum + price);
          } else {
            setSum(sum - price);
          }
        }}
      />
    </Label>
  );
}

export default Product;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`;

const Input = styled.input`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1px;
  }
  &:checked:before {
    background-color: #fc9b27;
  }
  &:after {
    display: none;
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url(${check}) no-repeat;
    background-position: center;
  }

  &:checked:after {
    display: block;
  }
`;
