import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import AnimatedButton from '../components/AnimatedButton';
import useHeight from '../hooks/useHeight';
import rob from '../content/rob.png';
import oli from '../content/oli.png';
import mark from '../content/mark.png';

const customConfig = {
  mass: 5,
  tension: 800,
  friction: 10,
};

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
  const [props, setProps] = useState({ angle: 0, scale: 100 });
  const [canMouseOver, setCanMouseOver] = useState(true);

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

  function _handleClick() {
    const angle = Math.random() * 20 - 10;
    const scale = Math.random() * 40 - 20 + 100;
    setProps({ angle, scale });
    setTimeout(() => {
      setProps({ angle: 0, scale: 100 });
    }, 200);
  }

  function _handleMouseEnter(e) {
    const { pageX, pageY } = e;
    const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = e.target;

    const clientX = pageX - offsetLeft;
    const clientY = pageY - offsetTop;

    const isTop = clientY < offsetHeight / 2;
    const isLeft = clientX < offsetWidth / 2;

    let angle = 0;

    angle += isLeft ? 10 : -10;
    if (isTop) angle *= 1.2;

    const scale = Math.random() * 40 - 20 + 100;

    if (canMouseOver) {
      setCanMouseOver(false);
      setProps({ angle, scale });
      setTimeout(() => {
        setProps({ angle: 0, scale: 100 });
      }, 200);
      setTimeout(() => {
        setCanMouseOver(true);
      }, 2000);
    }
  }
};

export default BobbleHead;
