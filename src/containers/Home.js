import React from 'react';
import BobbleHead from '../DemoItems/BobbleHead';

export default function Home() {
  return (
    <main className="container">
      <div className="bobble-cols">
        <BobbleHead person="mark" extraStyles={{ marginTop: '5rem' }} />
        <BobbleHead person="oli" />
        <BobbleHead person="rob" extraStyles={{ marginTop: '5rem' }} />
      </div>
      <h1 className="display-title">Loony Springs</h1>
    </main>
  );
}
