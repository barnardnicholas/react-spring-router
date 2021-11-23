import React, { useState } from 'react';
import Button from '../components/Button';

const FadeItem = () => {
  const [showA, setShowA] = useState(false);

  return (
    <>
      <div style={{ opacity: showA ? 1 : 0 }}>
        <p>This text fades in and out</p>
      </div>
      <Button onClick={() => setShowA((val) => !val)}>Toggle Opacity</Button>
    </>
  );
};

export default FadeItem;
