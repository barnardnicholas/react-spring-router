import { Howl } from 'howler';

const useIntroMusic = () => {
  const sound = new Howl({
    src: ['content/music.mp3'],
  });

  sound.once('load', () => {
    console.log('sound loaded');
    sound.play();
  });
};

export default useIntroMusic;
