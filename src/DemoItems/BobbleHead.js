import React from 'react';
import rob from '../content/rob.png';
import oli from '../content/oli.png';
import mark from '../content/mark.png';

const people = {
  rob,
  oli,
  mark,
};

const defaultSize = {
  width: 300,
  height: 300,
};

const BobbleHead = ({ person = 'rob', extraStyles = {} }) => {
  const baseStyles = {
    ...defaultSize,
    transformOrigin: '50% 100%',
    backgroundImage: `url(${people[person]})`,
    ...extraStyles,
  };

  return (
    <div className="bobble-container">
      <div className="bobblehead" style={baseStyles} />
      <div className="bobble-shadow" />
    </div>
  );
};

export default BobbleHead;
