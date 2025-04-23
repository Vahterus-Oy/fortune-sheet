import React, { CSSProperties } from "react";

type Props = {
  name: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
};

const SVGIcon: React.FC<Props> = ({ width = 18, height = 18, name, style }) => (
  <svg width={width} height={height} style={style} aria-hidden="true">
    <use xlinkHref={`#${name}`} />
  </svg>
);

export default SVGIcon;
