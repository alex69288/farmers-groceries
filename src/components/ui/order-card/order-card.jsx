import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';

function renderName(nameChar) {
  switch (nameChar) {
    case 'weight':
      return 'Масса';
    case 'quality':
      return 'Качество';
    case 'sellBy':
      return 'Срок годности';
    case 'placeOrigin':
      return 'Место происхождения';
    case 'nutritionalValue':
      return 'Энергетическая ценность';
    case 'kcal':
      return 'Пищевая ценность';
    default:
      console.log('error');
  }
}

function OrderCard({
  name,
  url,
  description,
  characteristics,
  properties,
  price,
}) {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <Article>
      <Img src={url} alt={name} width={248} height={248} />
      <Title>{name}</Title>
      <Tabs>
        <TabsNameList>
          <TabName>{description && 'Описание'}</TabName>
          <TabName>{characteristics && 'Характеристики'}</TabName>
          <TabName>{properties && 'Свойства'}</TabName>
        </TabsNameList>
        <DescriptionPanel size={buttonActive ? 'auto' : '80px'}>
          <Description>{description}</Description>
          <Button onClick={() => setButtonActive(!buttonActive)}>
            {buttonActive ? 'Свернуть' : 'Развернуть...'}
          </Button>
          <Price>
            {price} руб. / {characteristics.weight.split('(')[0]}
          </Price>
        </DescriptionPanel>
        <DescriptionPanel>
          <CharList>
            {Object.keys(characteristics).map((value, id) => (
              <CharItem key={id}>
                <CharName>{renderName(value)}: </CharName>
                <span>{characteristics[value]}</span>
              </CharItem>
            ))}
          </CharList>
        </DescriptionPanel>
        <DescriptionPanel>
          <CharList>
            {Object.keys(properties).map((value, id) => (
              <CharItem key={id}>
                <CharName>{renderName(value)}: </CharName>
                <span>{properties[value]}</span>
              </CharItem>
            ))}
          </CharList>
        </DescriptionPanel>
      </Tabs>
    </Article>
  );
}

export default OrderCard;

const Article = styled.article`
  position: relative;
  padding: 20px;
  display: grid;
  grid-template-columns: 248px auto;
  grid-template-rows: 24px auto;
  column-gap: 20px;
  align-items: start;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Img = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
`;

const TabsNameList = styled(TabList)`
  margin-top: 24px;
  padding: 0;
  list-style: none;
  display: flex;
  column-gap: 8px;
`;

const DescriptionPanel = styled(TabPanel)`
  height: ${props => props.size};
  /* height: auto; */
`;

const TabName = styled(Tab)`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f6f6f6;
  cursor: pointer;

  &[aria-selected='true'] {
    color: #fff;
    background-color: #88aa4d;
  }
`;

const Description = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  height: 100%;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 0;
  color: #fc9b27;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Price = styled.span`
  margin-top: 10px;
  display: block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
  background-color: #d8ecfe;
  width: max-content;
`;

const CharList = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

const CharItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const CharName = styled.span`
  font-weight: 700;
`;
