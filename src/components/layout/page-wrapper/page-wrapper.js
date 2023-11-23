import React from 'react';
import OrderPage from '../../pages/order-page/order-page';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main>
        {/* <MainPage {...prop} /> */}
        <OrderPage />
      </main>

      <Footer />
    </>
  );
}

export default PageWrapper;
