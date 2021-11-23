import React, { useEffect, useState } from 'react';

const LoopItem = () => {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      setIsScaled(!isScaled);
    }, 1000);
    return () => clearInterval(tick);
  }, [isScaled, setIsScaled]);

  const loopStyles = { transform: isScaled ? `scale(50%)` : `scale(100%)` };
  return <div style={loopStyles}>This text changes size continually</div>;
};

export default LoopItem;
