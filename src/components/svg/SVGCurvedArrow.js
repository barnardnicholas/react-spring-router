import { useState, useRef, useLayoutEffect } from 'react';
import SVG from './SVG';
import PathCurve from './PathCurve';
import PolygonTriangle from './PolygonTriangle';

function SVGCurvedArrow({
  position = { pX: 0, pY: 0 }, // percentage
  flipHorizontal = false,
  pointerLength = 30,
  pointerWidth = 15,
  up = false,
  left = false,
}) {
  const containerRef = useRef(document.createElement('div'));
  console.log({ left: top });

  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setClientWidth(containerRef.current.clientWidth);
      setClientHeight(containerRef.current.clientHeight);
    }
  }, [containerRef.current.clientHeight, containerRef.current.clientWidth]);

  const convertPercentToCoords = (pX, pY) => {
    const x = (clientWidth / 100) * pX;
    const y = (clientHeight / 100) * pY;
    return [x, y];
  };

  const svgProps = {
    width: clientWidth,
    height: clientHeight,
    customStyles: { flex: 1 },
  };

  const startXY = [0, 0];
  const endXY = convertPercentToCoords(position.pX, position.pY);
  const centerXY = convertPercentToCoords(position.pX / 2, position.pY / 2);
  const curveXY = convertPercentToCoords(position.pX / 3, 0);

  const curveProps = {
    startXY,
    endXY,
    centerXY,
    curveXY,
    strokeWidth: 3,
    strokeColor: '#f7f7f7',
    customStyles: {},
  };

  const triangleProps = {
    startXY: [curveProps.endXY[0], curveProps.endXY[1]],
    width: pointerLength,
    height: pointerWidth,
    angle: left ? 180 : 0,
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div ref={containerRef} className="bracket-container" style={containerStyle}>
      <SVG {...svgProps}>
        <PathCurve {...curveProps} />
        <PolygonTriangle {...triangleProps} />
      </SVG>
    </div>
  );
}

export default SVGCurvedArrow;
