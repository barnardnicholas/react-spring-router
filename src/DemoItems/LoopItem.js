import React from 'react';
import { useSpring, config, animated } from 'react-spring';

const LoopItem = () => {
  const loopStyles = useSpring({
    loop: true,
    to: [{ transform: `scale(50%)` }, { transform: `scale(100%)` }],
    from: { transform: `scale(100%)` },
    config: config.wobbly,
  });
  return <animated.div style={loopStyles}>This text changes size continually</animated.div>;
};

export default LoopItem;
