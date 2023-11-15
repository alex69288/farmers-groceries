import React from 'react';
import './style.css';
import Container from '../../layout/container/container';
import AdvantagesCard from '../../ui/advantage-card/advantages-card';
import ButtonBuy from '../../ui/button-buy/button-but';

function Advantages({ advantages }) {
  return (
    <section className='advantages'>
      <Container>
        <h1 className='advantages-title'>Почему фермерские продукты лучше?</h1>
        <ul className='advantages-list'>
          {advantages.map(advantage => (
            <li className='advantages-item' key={advantage.id}>
              <AdvantagesCard {...advantage} />
            </li>
          ))}
        </ul>

        <ButtonBuy className={'advantages-button'} />
      </Container>
    </section>
  );
}

export default Advantages;
