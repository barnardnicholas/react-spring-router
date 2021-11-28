import React from 'react';
import FadeItem from '../DemoItems/FadeItem';
import SizeItem from '../DemoItems/SizeItem';
import AnimOnMountItem from '../DemoItems/AnimOnMountItem';
import LoopItem from '../DemoItems/LoopItem';
import useMousePosition from '../hooks/useMousePosition';

const DemoPage = () => {
  const { position, windowSize } = useMousePosition();

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
      <section>
        <h2>Animate on Mount</h2>
        <AnimOnMountItem />
      </section>
      <section>
        <h2>Looping animation</h2>
        <LoopItem />
      </section>
    </main>
  );
};

export default DemoPage;
