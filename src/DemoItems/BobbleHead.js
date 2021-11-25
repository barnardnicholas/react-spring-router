import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import AnimatedButton from '../components/AnimatedButton';
import useHeight from '../hooks/useHeight';
import Rob from '../content/rob.png';

const BobbleHead = () => {
  const [props, setProps] = useState({ angle: 0, scale: 100 });

  const baseStyles = {
    transformOrigin: '50% 100%',
    backgroundImage: `url(${Rob})`,
  };

  const bobbleStyles = useSpring({
    config: { ...config.wobbly },
    from: { transform: `rotate(0deg) scale(100%)` },
    to: { transform: `rotate(${props.angle}deg) scale(${props.scale}%)` },
  });

  return (
    <div className="bobble-container">
      <animated.div onClick={_handleClick} className="bobblehead" style={{ ...baseStyles, ...bobbleStyles }} />
    </div>
  );

  function _handleClick() {
    const angle = Math.random() * 20 - 10;
    const scale = Math.random() * 40 - 20 + 100;
    setProps({ angle, scale });
    setTimeout(() => {
      setProps({ angle: 0, scale: 100 });
    }, 200);
  }
};

export default BobbleHead;
