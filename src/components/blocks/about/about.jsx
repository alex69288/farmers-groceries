import React from 'react';
import './style.css';
import Container from '../../layout/container/container';

function About() {
  return (
    <section className='about'>
      <Container>
        <h1 className='about-title'>
          Магазин фермерских продуктов с доставкой
        </h1>
        <p className='about-description'>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </Container>
    </section>
  );
}

export default About;
