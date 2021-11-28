import React from 'react';
import MouseShadowItem from '../DemoItems/MouseShadowItem';
import useMousePosition from '../hooks/useMousePosition';

const DemoPage = () => {
  const { position, windowSize } = useMousePosition();

  return (
    <main className="container">
      <h1>Mouse Shadow</h1>
      <section>
        <MouseShadowItem position={position} windowSize={windowSize} />
      </section>
    </main>
  );
};

export default DemoPage;
