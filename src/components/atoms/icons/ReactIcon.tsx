import { FunctionComponent } from "react";
import styled from "styled-components";

const Circle = styled.circle`
  @media (prefers-color-scheme: light) {
    fill: var(--fontColor);
  }
`;

const G = styled.g`
  @media (prefers-color-scheme: light) {
    stroke: var(--fontColor);
  }
`;

const ReactIcon: FunctionComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.232 23 20.463"
    {...props}
  >
    <Circle r={2.05} fill="#61dafb" />
    <G stroke="#61dafb" fill="none">
      <ellipse rx={11} ry={4.2} />
      <ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </G>
  </svg>
);

export default ReactIcon;
