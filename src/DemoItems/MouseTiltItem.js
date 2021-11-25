import React, { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';

const MouseTiltItem = ({ position: { x, y }, windowSize: { width, height, centerX, centerY } }) => {
  const [tilterPosition, setTilterPosition] = useState({ aX: 0, aY: 0 });

  const maxTilt = 25;

  const getTilterPosition = (w, h, mX, mY, cX, cY) => {
    const dY = (mX - cX) / (w / 2);
    const dX = (mY - cY) / (h / 2);
    const aX = dX * maxTilt * -1;
    const aY = dY * maxTilt;
    return { aX, aY };
  };

  useEffect(() => {
    setTilterPosition(getTilterPosition(width, height, x, y, centerX, centerY));
  }, [width, height, x, y]);

  const tiltStyles = useSpring({
    config: { ...config.wobbly },
    from: { transform: 'rotateX(0deg) rotateY(0deg)' },
    to: {
      transform: `rotateX(${tilterPosition.aX}deg) rotateY(${tilterPosition.aY}deg)`,
    },
  });

  return (
    <>
      <p>The box should tilt in response to mouse movement</p>
      <div className="mouse-tilt-container">
        <animated.div className="mouse-tilter" style={tiltStyles}>
          <h4>I tilt</h4>
        </animated.div>
      </div>
    </>
  );
};

export default MouseTiltItem;
