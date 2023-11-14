import React from 'react';
import About from '../../blocks/about/about';
import Advantages from '../../blocks/advantages/advantages';

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <Advantages advantages={advantages} />
    </>
  );
}

export default MainPage;
