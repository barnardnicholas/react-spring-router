import React, { useState, useEffect } from 'react';
import { useSpring, config, animated } from 'react-spring';

const AnimOnMount = () => {
  const [style, animate] = useSpring({ transform: `scale(10%)` }, []);
  useEffect(() => {
    animate({ transform: `scale(100%)` });
  }, []);
  return (
    <animated.div style={style}>
      <p>This component animates on mount</p>
    </animated.div>
  );
};
const AnimOnMountItem = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? <AnimOnMount /> : <div style={{ minHeight: '2.1rem' }} />}
      <button onClick={() => setVisible((val) => !val)}>Toggle Component</button>
    </>
  );
};

export default AnimOnMountItem;
