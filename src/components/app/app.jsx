import React from 'react';
import './style.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantagesList from '../../mocks/advantagesList';

function App() {
  return <PageWrapper advantages={advantagesList} />;
}

export default App;
