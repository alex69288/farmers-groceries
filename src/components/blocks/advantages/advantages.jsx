import React from 'react';
import Container from '../../layout/container/container';
import AdvantagesCard from '../../ui/advantage-card/advantages-card';
import { ButtonMargin, List, SectionAdvantages, Title } from './style';

function Advantages({ advantages }) {
  return (
    <SectionAdvantages className="advantages">
      <Container>
        <Title className="advantages-title">
          Почему фермерские продукты лучше?
        </Title>
        <List className="advantages-list">
          {advantages.map(advantage => (
            <li className="advantages-item" key={advantage.id}>
              <AdvantagesCard {...advantage} />
            </li>
          ))}
        </List>

        <ButtonMargin />
      </Container>
    </SectionAdvantages>
  );
}

export default Advantages;
