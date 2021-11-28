import React from 'react';
import AnimatedButton from '../components/AnimatedButton';

export default function Splash({ setIsSplash = () => {} }) {
  return (
    <main className="splash">
      <AnimatedButton onClick={() => setIsSplash(false)}>Start</AnimatedButton>
    </main>
  );
}
