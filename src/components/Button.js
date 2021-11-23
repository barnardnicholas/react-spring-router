import React from 'react';

const AnimatedButton = ({ children, onClick = () => {} }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button className="animated-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default AnimatedButton;
