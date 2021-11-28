import React, { useState, useEffect } from 'react';
import { useSpring, config, animated } from 'react-spring';
import BobbleHead from '../DemoItems/BobbleHead';

export default function Home() {
  const [isAnimatingIn, setIsAnimatingIn] = useState(true);
  const [style, animate] = useSpring({ transform: `scale(10%) translateY(33%)` }, []);
  useEffect(() => {
    animate({ transform: `scale(100%) translateY(0%)` });
    setTimeout(() => {
      setIsAnimatingIn(false);
    }, 200);
  }, []);

  return (
    <animated.main style={style} className="container">
      <div className="bobble-cols">
        <BobbleHead person="mark" isAnimatingIn={isAnimatingIn} extraStyles={{ marginTop: '5rem' }} />
        <BobbleHead person="oli" isAnimatingIn={isAnimatingIn} />
        <BobbleHead person="rob" isAnimatingIn={isAnimatingIn} extraStyles={{ marginTop: '5rem' }} />
      </div>
      <h1 className="display-title">Loony Springs</h1>
    </animated.main>
  );
}
