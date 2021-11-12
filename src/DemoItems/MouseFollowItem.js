import React, { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import useMousePosition from '../hooks/useMousePosition';

const MouseFollowItem = () => {
  const {
    position: { x, y },
    windowSize: { width, height, centerX, centerY },
  } = useMousePosition();

  const [followerPosition, setFollowerPosition] = useState({ pX: 50, pY: 50 });

  useEffect(() => {
    const getFollowerPosition = (w, h, cX, cY, mX, mY) => {
      const dX = mX - cX;
      const dY = mY - cY;
      let pX = (dX / w) * 200 + 50;
      let pY = (dY / h) * 200 + 50;
      if (pX < 0) pX = 0;
      if (pX > 100) pX = 100;
      if (pY < 0) pY = 0;
      if (pY > 100) pY = 100;
      return { pX, pY };
    };
    setFollowerPosition(getFollowerPosition(width, height, centerX, centerY, x, y));
  }, [width, height, centerX, centerY, x, y]);

  const followStyles = useSpring({
    config: { ...config.wobbly },
    from: { top: 'calc(50% - 1rem)', left: 'calc(50% - 1rem)' },
    to: {
      top: `calc(${followerPosition.pY}% - 1rem)`,
      left: `calc(${followerPosition.pX}% - 1rem)`,
    },
  });

  return (
    <div className="mouse-follow-container">
      <animated.span className="mouse-follower" style={followStyles} />
    </div>
  );
};

export default MouseFollowItem;
