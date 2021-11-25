import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import { useSpring, config, animated } from 'react-spring';

const MouseShadowItem = ({ position: { x, y }, windowSize: { width, height } }) => {
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

  const shadowStyles = {
    textShadow: `${shadowOffset.oX}px ${shadowOffset.oY}px 15px #ff0000`,
  };

  return (
    <>
      <p style={{ marginBottom: '3rem' }}>The text shadow should change in response to cursor movement.</p>
      <p className="mouse-shadow-text" style={shadowStyles}>
        Shadow Text
      </p>
    </>
  );
};

export default MouseShadowItem;
