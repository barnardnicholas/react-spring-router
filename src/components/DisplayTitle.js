import React from 'react';
import { useTrail, config, animated } from 'react-spring';

const customConfig = {
  mass: 5,
  tension: 2000,
  friction: 200,
};

const DisplayTitle = ({ visible, text = '' }) => {
  const items = text.split('');

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 20,
    height: visible ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <h1 className="display-title">
      {trail.map((style, index) => (
        <animated.span key={index} style={style}>
          {items[index]}
        </animated.span>
      ))}
    </h1>
  );
};

export default DisplayTitle;
