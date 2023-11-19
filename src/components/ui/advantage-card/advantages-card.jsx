import React from 'react';
import { Article, Description, Img, Subtitle, Title } from './style.js';

function AdvantagesCard({ category, advantage, description, image }) {
  const backgroundColor =
    category === 'Магазинные продукты' ? '#F8DDD7' : '#E1EDCE';
  const categoryColor =
    category === 'Магазинные продукты' ? '#F75531' : '#88AA4D';

  return (
    <Article style={{ backgroundColor: backgroundColor }}>
      <Img src={image} alt={advantage} width={56} height={56} />
      <Title style={{ backgroundColor: categoryColor }}>{category}</Title>
      <Subtitle>{advantage}</Subtitle>
      <Description>{description}</Description>
    </Article>
  );
}

export default AdvantagesCard;
