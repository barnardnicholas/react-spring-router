import { useState } from 'react';
import { Howl } from 'howler';
import src from '../content/looneytunes.mp3';

const useIntroMusic = () => {
  console.log('useIntroMusic');
  const [soundLoaded, setSoundLoaded] = useState(false);
  const sound = new Howl({
    src: [src],
  });

  sound.once('load', () => {
    console.log('sound loaded');
    setSoundLoaded(true);
  });

  return { sound, soundLoaded };
};

export default useIntroMusic;
