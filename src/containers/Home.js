import React, { useState, useEffect } from 'react';
import { useSpring, config, animated } from 'react-spring';
import AnimatedButton from '../components/AnimatedButton';
import DisplayTitle from '../components/DisplayTitle';
import BobbleHead from '../DemoItems/BobbleHead';
import useIntroMusic from '../hooks/useIntroMusic';

export default function Home({ isIntro = false, extraStyles = {} }) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(true);
  const [titleCanShow, setTitleCanShow] = useState(false);

  const [style, animate] = useSpring(
    { to: { transform: isIntro ? `scale(0%) translateY(33%)` : `scale(100%) translateY(0%)` }, config: config.slow },
    [],
  );

  useEffect(() => {
    if (isIntro) {
      animate({ transform: `scale(100%) translateY(0%)` });
      setTimeout(() => {
        setIsAnimatingIn(false);
      }, 300);
      setTimeout(() => {
        setTitleCanShow(true);
      }, 800);
    }
  }, []);

  useIntroMusic();

  return (
    <main style={extraStyles} className="container home">
      <animated.div style={style} className="bobble-cols">
        <BobbleHead person="mark" isAnimatingIn={isAnimatingIn} extraStyles={{ marginTop: '5rem' }} />
        <BobbleHead person="oli" isAnimatingIn={isAnimatingIn} />
        <BobbleHead person="rob" isAnimatingIn={isAnimatingIn} extraStyles={{ marginTop: '5rem' }} />
      </animated.div>
      <DisplayTitle visible={isIntro ? titleCanShow : true} text="Loony Springs" />
      {!!isIntro && (
        <AnimatedButton className="intro-button" onClick={() => window.location.replace('/home')}>
          Next
        </AnimatedButton>
      )}
    </main>
  );
}
