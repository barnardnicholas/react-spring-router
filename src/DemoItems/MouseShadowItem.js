import React, { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import useMousePosition from '../hooks/useMousePosition';

const MouseShadowItem = () => {
  const {
    position: { x, y },
    windowSize: { width, height, centerX, centerY },
  } = useMousePosition();

  const [shadowOffset, setShadowOffset] = useState({ oX: 0, oY: 0 });

  const getShadowOffset = (w, h, mX, mY) => {
    const dX = mX - w / 2;
    const dY = mY - h / 2;
    const oX = ((20 * dX) / w) * -1;
    const oY = ((20 * dY) / h) * -1;
    return { oX, oY };
  };

  useEffect(() => {
    setShadowOffset(getShadowOffset(width, height, x, y));
  }, [width, height, x, y]);

  const shadowStyles = useSpring({
    config: { ...config.wobbly },
    from: { textShadow: '0px 0px 15px #ff0000' },
    to: {
      textShadow: `${shadowOffset.oX}px ${shadowOffset.oY}px 15px #ff0000`,
    },
  });

  return (
    <>
      <p style={{ marginBottom: '3rem' }}>The text shadow should change in response to cursor movement.</p>
      <animated.p className="mouse-shadow-text" style={shadowStyles}>
        Shadow Text
      </animated.p>
    </>
  );
};

export default MouseShadowItem;
