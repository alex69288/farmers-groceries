import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import advantagesList from '../../mocks/advantagesList';
import { AppRoute } from '../../mocks/routes';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import MainPage from '../pages/main-page/main-page';
import OrderPage from '../pages/order-page/order-page';
import ScrollTop from '../ui/scroll-top/scroll-top';
import { GlobalStyle } from './style';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              exact
              path={AppRoute.ORDER.replace(AppRoute.MAIN, '')}
              element={<OrderPage advantages={advantagesList} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
