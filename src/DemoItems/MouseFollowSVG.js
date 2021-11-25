import React, { useEffect, useState, useRef } from 'react';
import SVGCurvedArrow from '../components/svg/SVGCurvedArrow';
import useMousePosition from '../hooks/useMousePosition';

const MouseFollowSVG = () => {
  const {
    position: { x, y },
    windowSize: { width, height },
    isTopHalf,
    isLeftHalf,
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
      <p style={{ marginBottom: '3rem' }}>The arrow should track the mouse cursor.</p>
      <div className="mouse-follow-container large no-overflow">
        <SVGCurvedArrow position={followerPosition} />
      </div>
    </>
  );
};

export default MouseFollowSVG;
