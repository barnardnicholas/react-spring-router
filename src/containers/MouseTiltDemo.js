import React from 'react';
import MouseTiltItem from '../DemoItems/MouseTiltItem';
import useMousePosition from '../hooks/useMousePosition';

const DemoPage = () => {
  const { position, windowSize } = useMousePosition();

  return (
    <main className="container">
      <h1>Mouse tilt</h1>
      <section>
        <MouseTiltItem position={position} windowSize={windowSize} />
      </section>
    </main>
  );
};

export default DemoPage;
