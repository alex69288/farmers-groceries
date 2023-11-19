import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantagesList from '../../mocks/advantagesList';
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantagesList} />
    </>
  );
}

export default App;
