import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    centerX: Math.floor(window.innerWidth / 2),
    centerY: Math.floor(window.innerHeight / 2),
  });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleResize = (event) => {
    console.log(windowSize);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      centerX: Math.floor(window.innerWidth / 2),
      centerY: Math.floor(window.innerHeight / 2),
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { position, windowSize };
};

export default useMousePosition;
