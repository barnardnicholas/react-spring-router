import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import AnimatedButton from '../components/AnimatedButton';
import useHeight from '../hooks/useHeight';

const SizeItem = () => {
  const [heightRef, height] = useHeight();
  const [showB, setShowB] = useState(false);
  const slideInStyles = useSpring({
    config: { ...config.stiff },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: showB ? 1 : 0,
      height: showB ? height : 0,
    },
  });

  return (
    <>
      <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
        <div ref={heightRef} style={{ padding: '40px' }}>
          <p>
            Huh? Wait a minute, what are you doing, Doc? Hey c'mon, I had to change, you think I'm going back in that
            zoot suit? The old man really came through it worked. No, Doc. Shape up, man. You're a slacker. You wanna be
            a slacker for the rest of your life? Oh no, don't touch that. That's some new specialized weather sensing
            equipment. Uh, Doc. Let me show you my plan for sending you home. Please excuse the crudity of this model, I
            didn't have time to build it to scale or to paint it. No no no, Doc, I just got here, okay, Jennifer's here,
            we're gonna take the new truck for a spin. Are you gonna order something, kid? You do? George, help me,
            please. McFly. Oh, great scott. You get the cable, I'll throw the rope down to you. What's that thing he's
            on?
          </p>
        </div>
      </animated.div>
      <AnimatedButton onClick={() => setShowB((val) => !val)}>Toggle Height</AnimatedButton>
    </>
  );
};

export default SizeItem;
