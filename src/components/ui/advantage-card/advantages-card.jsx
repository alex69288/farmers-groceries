import React from 'react';
import './style.css';

function AdvantagesCard({ category, advantage, description, image }) {
  const backgroundColor =
    category === 'Магазинные продукты' ? '#F8DDD7' : '#E1EDCE';
  const categoryColor =
    category === 'Магазинные продукты' ? '#F75531' : '#88AA4D';

  return (
    <article
      className='advantage-card'
      style={{ backgroundColor: backgroundColor }}>
      <img
        className='advantage-image'
        src={image}
        alt={advantage}
        width={56}
        height={56}
      />
      <span
        className='advantage-title'
        style={{ backgroundColor: categoryColor }}>
        {category}
      </span>
      <span className='advantage-subtitle'>{advantage}</span>
      <p className='advantage-description'>{description}</p>
    </article>
  );
}

export default AdvantagesCard;
