import styled from 'styled-components';
import ButtonBuy from '../../ui/button/button';

export const SectionAdvantages = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 115%;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 64px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  text-align: left;
`;

export const ButtonMargin = styled(ButtonBuy)`
  margin-top: 64px;
`;
