import React, { useState } from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../../layout/visually-hidden/visually-hidden';
import ButtonBuy from '../button/button';
import Product from './product';

function ProductForm({ products }) {
  const [sum, setSum] = useState(0);

  return (
    <StyleWrapper>
      <form>
        <Fieldset>
          <Legend>Выберите продукты</Legend>
          <Group>
            <Ul>
              {products.map(product => (
                <Li key={product.id}>
                  <Product {...product} setSum={setSum} sum={sum} />
                </Li>
              ))}
            </Ul>
          </Group>
        </Fieldset>
        <Fieldset>
          <Legend>Сделать заказ</Legend>
          <Group>
            <label>
              <VisuallyHidden>Введите адрес</VisuallyHidden>
              <Input type="text" placeholder="Введите адрес доставки" />
            </label>
            <Subtitle>Цена</Subtitle>
            <Cost>{sum} руб.</Cost>
          </Group>
          <Button type="submit"></Button>
        </Fieldset>
      </form>
    </StyleWrapper>
  );
}

export default ProductForm;

const StyleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  flex-basis: 353px;
`;

const Fieldset = styled.fieldset`
  padding: 20px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

const Legend = styled.legend`
  position: absolute;
  padding: 0;
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
`;

const Group = styled.div`
  margin-top: 54px;
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 29px;
  }
`;

const Input = styled.input`
  padding: 14px 12px;
  width: 100%;
  height: 48px;
  background-color: #f6f6f6;
  border: 1px solid rgba(0, 0, 0, 0.1);

  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #333;
`;

const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #333;
`;

const Cost = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
`;

const Button = styled(ButtonBuy)`
  margin-top: 32px;
  width: 100%;
  text-align: center;
`;
