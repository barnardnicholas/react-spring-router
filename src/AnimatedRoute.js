import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

const customConfig = {
  mass: 1,
  tension: 600,
  friction: 30,
};

const { stiff, wobbly, slow } = config;

const AnimatedRoute = ({ children }) => {
  const { pathname } = useLocation();

  const transitions = useTransition(pathname, {
    key: pathname,
    from: { opacity: 0, transform: 'translateX(101vw) translateY(50vh) perspective(900px) rotateY(90deg)' },
    enter: { opacity: 1, transform: 'translateX(0vw) translateY(0vh) perspective(900px) rotateY(0deg)' }, // IMPORTANT - 0 values must have units
    leave: {
      opacity: 0,
      transform: 'translateX(-101vw) translateY(50vh) perspective(900px) rotateY(-90deg)',
      pointerEvents: 'none',
    },
    config: stiff,
  });

  return (
    <Route
      render={({ location }) =>
        transitions((style) => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>{children(location)}</animated.div>
        ))
      }
    />
  );
};

export default AnimatedRoute;
