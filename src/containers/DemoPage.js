import React from 'react';
import FadeItem from '../DemoItems/FadeItem';
import SizeItem from '../DemoItems/SizeItem';
import AnimOnMountItem from '../DemoItems/AnimOnMountItem';
import MouseFollowItem from '../DemoItems/MouseFollowItem';
import MouseTiltItem from '../DemoItems/MouseTiltItem';
import MouseShadowItem from '../DemoItems/MouseShadowItem';
import LoopItem from '../DemoItems/LoopItem';
import MouseFollowSVG from '../DemoItems/MouseFollowSVG';
import useMousePosition from '../hooks/useMousePosition';

const DemoPage = () => {
  const { position, windowSize, isTopHalf, isLeftHalf } = useMousePosition();

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
        <h2>Looping animation</h2>
        <LoopItem />
      </section>
      <section>
        <h2>Animate on Mount</h2>
        <AnimOnMountItem />
      </section>
      <section>
        <h2>Mouse follower</h2>
        <MouseFollowItem position={position} windowSize={windowSize} />
      </section>
      <section>
        <h2>Mouse tilt</h2>
        <MouseTiltItem position={position} windowSize={windowSize} />
      </section>
      <section>
        <h2>Mouse shadow</h2>
        <MouseShadowItem position={position} windowSize={windowSize} />
      </section>
      <section>
        <h2>Dynamic SVG</h2>
        <MouseFollowSVG position={position} windowSize={windowSize} isTopHalf={isTopHalf} isLeftHalf={isLeftHalf} />
      </section>
    </main>
  );
};

export default DemoPage;
