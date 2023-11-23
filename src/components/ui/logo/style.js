import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 24px;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
`;

export const Title = styled.span`
  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: #333;
`;
