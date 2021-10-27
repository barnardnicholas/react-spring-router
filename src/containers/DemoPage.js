import React from 'react';
import FadeItem from '../DemoItems/FadeItem';
import SizeItem from '../DemoItems/SizeItem';

const DemoPage = () => {
  return (
    <main className="container">
      <h1>Demo Page</h1>
      <p>Demos for React-Spring implementations</p>
      <section>
        <h2>Toggle Opacity</h2>
        <FadeItem />
      </section>
      <section>
        <h2>Toogle Size</h2>
        <SizeItem />
      </section>
    </main>
  );
};

export default DemoPage;
