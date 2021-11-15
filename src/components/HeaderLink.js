import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';

export default function HeaderLink({ className, to, children }) {
  const [isOver, setIsOver] = useState(false);

  const hoverStyles = useSpring({
    config: { ...config.wobbly },
    from: {
      transform: 'scale(100%)',
      fontWeight: 'normal',
      transform: 'scale(100%)',
    },
    to: {
      transform: isOver ? 'scale(105%)' : 'scale(100%)',
      fontWeight: isOver ? 'bold' : 'normal',
    },
  });

  return (
    <animated.div style={hoverStyles}>
      <NavLink className={className} to={to} onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
        {children}
      </NavLink>
    </animated.div>
  );
}
