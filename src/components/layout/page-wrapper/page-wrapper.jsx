import React from 'react';
import './style.css';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';

function PageWrapper({ ...prop }) {
  return (
    <div className='page-wrapper'>
      <Header />
      <main className='main-page'>
        <MainPage {...prop} />
      </main>
      <Footer />
    </div>
  );
}

export default PageWrapper;
