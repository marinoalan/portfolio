import { FunctionComponent } from "react";
import styled from "styled-components";

const SVG = styled.svg`
  @media (prefers-color-scheme: light) {
    fill: var(--fontColor);
  }

  @media (prefers-color-scheme: dark) {
    fill: #de4c36;
  }
`;

const GITIcon: FunctionComponent = (props) => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
    <path d="M46.793 22.09 27.91 3.207A4.093 4.093 0 0 0 25 2c-1.055 0-2.11.402-2.91 1.207l-3.735 3.734 4.622 4.622a3.994 3.994 0 0 1 4.851.609 3.988 3.988 0 0 1 .606 4.848l4.543 4.543a3.994 3.994 0 0 1 4.851 6.265 3.994 3.994 0 0 1-6.266-4.852l-4.542-4.542a3.855 3.855 0 0 1-1.02.421v12.286A3.99 3.99 0 0 1 29 35c0 2.21-1.79 4-4 4s-4-1.79-4-4a3.99 3.99 0 0 1 3-3.86V18.856a3.955 3.955 0 0 1-1.828-1.027 3.988 3.988 0 0 1-.606-4.848l-4.625-4.625L3.207 22.09a4.112 4.112 0 0 0 0 5.82L22.09 46.793A4.093 4.093 0 0 0 25 48c1.055 0 2.11-.402 2.91-1.207L46.793 27.91a4.112 4.112 0 0 0 0-5.82Z" />
  </SVG>
);

export default GITIcon;
