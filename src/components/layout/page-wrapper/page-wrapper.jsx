import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
