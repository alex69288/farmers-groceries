import React from 'react';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main className='main-page'>
        <MainPage {...prop} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
