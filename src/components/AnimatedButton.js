import React, { useEffect, useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import usePrevious from '../hooks/usePrevious';

const AnimatedButton = ({ children, onClick = () => {}, animTime = 200 }) => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const prevClicking = usePrevious(isClicking);

  const clickStyles = useSpring({
    config: { ...config.wobbly },
    from: {
      transform: 'scale(100%)',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
    },
    to: {
      transform: isClicking ? 'scale(80%)' : isHovering ? 'scale(110%)' : 'scale(100%)',
      boxShadow: isHovering ? '5px 5px 5px 5px rgba(0,0,0,0.66)' : '0px 0px 0px 0px rgba(0,0,0,0)',
    },
  });

  useEffect(() => {
    if (!prevClicking && isClicking) {
      setTimeout(() => {
        onClick();
      }, animTime / 2);
    }
  }, [isClicking, prevClicking]); // invoke onClick prop half the animTime after isClicking reverts to false

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicking(true);
    setTimeout(() => {
      setIsClicking(false);
    }, animTime / 2);
  }; // set isClicking to true, then revert to false after half the animTime

  return (
    <animated.button
      style={clickStyles}
      className="animated-button"
      onClick={handleClick}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {children}
    </animated.button>
  );
};

export default AnimatedButton;
