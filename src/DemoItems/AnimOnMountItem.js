import React, { useState } from 'react';
import Button from '../components/Button';

const AnimOnMount = () => {
  return (
    <div>
      <p>This component animates on mount</p>
    </div>
  );
};

const AnimOnMountItem = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible ? <AnimOnMount /> : <div style={{ minHeight: '2.1rem' }} />}
      <Button onClick={() => setVisible((val) => !val)}>Toggle Component</Button>
    </>
  );
};

export default AnimOnMountItem;
