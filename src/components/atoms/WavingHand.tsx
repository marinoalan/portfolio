import { useRef } from "react";
import styled from "styled-components";
import useElementIsVisible from "@hooks/useElementIsVisible";

const WavingHandStyled = styled.span`
  &:before {
    @media (prefers-color-scheme: light) {
      content: '👋🏻';
    }
  
    @media (prefers-color-scheme: dark) {
      content: '👋';
    }
  }
  

  ${({ isVisible }: { isVisible: boolean }) =>
    isVisible &&
    `
      animation-name: wave-animation;
      animation-duration: 2.5s;
      transform-origin: 70% 70%;
      animation-iteration-count: 2;
      animation-delay: 1s;
      display: inline-block;

      @keyframes wave-animation {
        0%, 60%, 100% {
          transform: rotate(0deg);
        }
        10%, 30% {
          transform: rotate(14deg);
        }
        20% {
          transform: rotate(-8deg);
        }
        40% {
          transform: rotate(-4deg);
        }
        50% {
          transform: rotate(10deg);
        }
      }
  `}
`;

const WavingHand = () => {
  const wavingHandRef = useRef(null);

  const isVisible = useElementIsVisible({ elementRef: wavingHandRef });

  return (
    <WavingHandStyled ref={wavingHandRef} isVisible={isVisible} />
  );
};

export default WavingHand;
