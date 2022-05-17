import styled from "styled-components";

const TRANSITION_DURATION = ".15s";
const HAMBURGER_HEIGHT = "1.5rem";
const BORDER_RADIUS_LINE = "4px";

const CUBIC_BEZIER_INITIAL_ACTIVE_TRANSITION = ".33333,0,.66667,.33333";
const CUBIC_BEZIER_INITIAL_NOT_ACTIVE_TRANSITION = ".33333,.66667,.66667,1";

const CUBIC_BEZIER_FINAL_ACTIVE_TRANSITION = ".215,.61,.355,1";
const CUBIC_BEZIER_FINAL_NOT_ACTIVE_TRANSITION = ".55,.055,.675,.19";

const HamburgerContainer = styled.div`
  padding: 0.9375rem;
  transition-timing-function: linear;
  transition-duration: ${TRANSITION_DURATION};
  transition-property: opacity, filter;
  border: 0;
  height: ${HAMBURGER_HEIGHT};
`;

const HamburgerBox = styled.div`
  position: relative;
  width: 2.5rem;
  height: ${HAMBURGER_HEIGHT};
`;

const HamburgerInner = styled.div`
  position: absolute;
  bottom: 0;
  width: 2.5rem;
  height: 0.25rem;

  transition-duration: ${TRANSITION_DURATION};
  transition-property: transform;
  border-radius: ${BORDER_RADIUS_LINE};
  background-color: var(--fontColor);

  ${({ isActive }) =>
    isActive
      ? `transition-delay: .22s;
  transition-timing-function: cubic-bezier(${CUBIC_BEZIER_FINAL_ACTIVE_TRANSITION});
  transform: translate3d(0,-.625rem,0) rotate(-45deg);`
      : `transition-timing-function: ease;`}

  &:before,
  &:after {
    position: absolute;
    width: 2.5rem;
    height: 0.25rem;
    transition-timing-function: ease;
    transition-duration: ${TRANSITION_DURATION};
    transition-property: transform;
    border-radius: ${BORDER_RADIUS_LINE};
    background-color: var(--fontColor);
  }

  &:before {
    content: "";
    display: block;

    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `
            top: 0;
            transition: 
              top .1s cubic-bezier(${CUBIC_BEZIER_INITIAL_ACTIVE_TRANSITION}) .16s,
              transform .13s cubic-bezier(${CUBIC_BEZIER_FINAL_ACTIVE_TRANSITION}) .25s;
            transform: rotate(-90deg);
        `
        : `
            top: -.625rem;
            transition: 
              top .12s cubic-bezier(${CUBIC_BEZIER_INITIAL_NOT_ACTIVE_TRANSITION}) .2s,
              transform .13s cubic-bezier(${CUBIC_BEZIER_FINAL_NOT_ACTIVE_TRANSITION});
    `}
  }

  &:after {
    content: "";
    display: block;
    bottom: -0.625rem;
    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `
            top: 0;
            transition: 
              top .2s cubic-bezier(${CUBIC_BEZIER_INITIAL_ACTIVE_TRANSITION}),
              opacity .1s linear .22s;
            opacity: 0;
        `
        : `
            top: -1.25rem;
            transition: 
              top .2s cubic-bezier(${CUBIC_BEZIER_INITIAL_NOT_ACTIVE_TRANSITION}) .2s,
              opacity .1s linear;
    `}
  }
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  padding: 0;
`;

const Hamburger = ({
  className,
  isActive,
  onClick,
}: {
  className?: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button className={className} onClick={onClick}>
      <HamburgerContainer>
        <HamburgerBox>
          <HamburgerInner isActive={isActive} />
        </HamburgerBox>
      </HamburgerContainer>
    </Button>
  );
};

export default Hamburger;
