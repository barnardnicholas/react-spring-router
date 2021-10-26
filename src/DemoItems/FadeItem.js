import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';

const FadeItem = () => {
  const [showA, setShowA] = useState(false);

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0 },
    to: {
      opacity: showA ? 1 : 0,
    },
  });

  return (
    <>
      <animated.div style={fadeStyles}>
        <p>This text fades in and out</p>
      </animated.div>
      <button onClick={() => setShowA(val => !val)}>Toggle Opacity</button>
    </>
  );
};

export default FadeItem;
