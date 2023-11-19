import styled from 'styled-components';

export const Article = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 540px;
  min-height: 197px;
  background-color: #e1edce;
`;

export const Img = styled.img`
  position: absolute;
`;

export const Title = styled.span`
  margin-left: 72px;
  padding: 2px 10px;
  display: inline-block;
  width: max-content;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #fff;
  background-color: #88aa4d;
`;

export const Subtitle = styled.span`
  margin-left: 72px;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;
