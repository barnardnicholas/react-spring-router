import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const MouseFollowItem = () => {
  const {
    position: { x, y },
    windowSize: { width, height },
  } = useMousePosition();

  const [followerPosition, setFollowerPosition] = useState({ pX: 50, pY: 50 });

  const getFollowerPosition = (w, h, mX, mY) => {
    let pX = mX / (w / 100);
    let pY = mY / (h / 100);
    if (pX < 0) pX = 0;
    if (pX > 100) pX = 100;
    if (pY < 0) pY = 0;
    if (pY > 100) pY = 100;
    return { pX, pY };
  };

  useEffect(() => {
    setFollowerPosition(getFollowerPosition(width, height, x, y));
  }, [width, height, x, y]);

  const followStyles = {
    top: `calc(${followerPosition.pY}% - 1rem)`,
    left: `calc(${followerPosition.pX}% - 1rem)`,
  };

  return (
    <>
      <p style={{ marginBottom: '3rem' }}>The ball should track the mouse cursor with spring movement.</p>
      <div className="mouse-follow-container">
        <span className="mouse-follower" style={followStyles} />
      </div>
    </>
  );
};

export default MouseFollowItem;
