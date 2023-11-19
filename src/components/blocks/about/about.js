import React from 'react';
import Container from '../../layout/container/container';
import { AboutDescription, AboutSection, AboutTitle } from './style';

function About() {
  return (
    <AboutSection>
      <Container>
        <AboutTitle>Магазин фермерских продуктов с доставкой</AboutTitle>
        <AboutDescription>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutDescription>
      </Container>
    </AboutSection>
  );
}

export default About;
