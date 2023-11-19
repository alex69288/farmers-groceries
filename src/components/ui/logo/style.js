/* .logo__link {
  display: flex;
  align-items: center;
  column-gap: 24px;
  text-decoration: none;
}
.logo__img {
  width: 44px;
  height: 44px;
}
.logo__title {
  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: #333;
} */

import styled from 'styled-components';

export const Link = styled.a`
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
