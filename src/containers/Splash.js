import React from 'react';
import AnimatedButton from '../components/AnimatedButton';

export default function Splash() {
  return (
    <main className="splash">
      <AnimatedButton onClick={() => window.location.replace('/intro')}>Start</AnimatedButton>
    </main>
  );
}
