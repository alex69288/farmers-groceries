import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body, html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333;
  }
`;
