import React from 'react';
import MouseFollowItem from '../DemoItems/MouseFollowItem';
import useMousePosition from '../hooks/useMousePosition';

const DemoPage = () => {
  const { position, windowSize } = useMousePosition();

  return (
    <main className="container">
      <h1>Mouse follower</h1>
      <section>
        <MouseFollowItem position={position} windowSize={windowSize} />
      </section>
    </main>
  );
};

export default DemoPage;
