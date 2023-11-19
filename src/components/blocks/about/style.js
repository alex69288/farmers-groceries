import styled from 'styled-components';
import aboutMan from '../../../assets/about-man.svg';

export const AboutSection = styled.section`
  padding-top: 183px;
  padding-bottom: 183px;
  position: relative;
  min-height: 600px;
  background-color: #d8ecfe;
`;

export const AboutTitle = styled.h1`
  margin: 0;
  max-width: 50%;
  position: relative;
  margin-bottom: 24px;
  font-weight: 700px;
  line-height: 115%;
  &::after {
    content: '';
    position: absolute;
    top: 115px;
    right: -550px;
    transform: translateY(-50%);
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: #c4e2ff;
  }
  &::before {
    content: '';
    position: absolute;
    top: -128px;
    right: -465px;
    width: 273px;
    height: 608px;
    background: url(${aboutMan}) no-repeat;
    z-index: 1;
  }
`;

export const AboutDescription = styled.p`
  margin: 0;
  max-width: 50%;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;
