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

  const bobbleStyles = useSpring({
    config: customConfig,
    from: { transform: `rotate(0deg) scale(100%)` },
    to: { transform: `rotate(${props.angle}deg) scale(${props.scale}%)` },
  });

  useEffect(() => {
    if (!isAnimatingIn && prevIsAnimatingIn) _handleClick();
  }, [isAnimatingIn, prevIsAnimatingIn]);

  return (
    <div className="bobble-container">
      <animated.div
        onClick={_handleClick}
        onMouseEnter={_handleMouseEnter}
        className="bobblehead"
        style={{ ...baseStyles, ...bobbleStyles }}
      />
    </div>
  );
};

export default BobbleHead;
