import React, { useState } from 'react';
import Button from '../components/Button';
import useHeight from '../hooks/useHeight';

const SizeItem = () => {
  const [heightRef, height] = useHeight();
  const [showB, setShowB] = useState(false);
  const slideInStyles = {
    height: showB ? height : 0,
  };

  return (
    <>
      <div style={{ ...slideInStyles, overflow: 'hidden' }}>
        <div ref={heightRef} style={{ padding: '40px' }}>
          <h3>This text is either full height or no height</h3>
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
      </div>
      <Button onClick={() => setShowB((val) => !val)}>Toggle Height</Button>
    </>
  );
};

export default SizeItem;
