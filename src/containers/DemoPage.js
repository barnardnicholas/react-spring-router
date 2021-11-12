import React from 'react';
import FadeItem from '../DemoItems/FadeItem';
import SizeItem from '../DemoItems/SizeItem';
import AnimOnMountItem from '../DemoItems/AnimOnMountItem';
import MouseFollowItem from '../DemoItems/MouseFollowItem';

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
      <section>
        <h2>Animate on Mount</h2>
        <AnimOnMountItem />
      </section>
      <section>
        <h2>Mouse follower</h2>
        <MouseFollowItem />
      </section>
    </main>
  );
};

export default DemoPage;
