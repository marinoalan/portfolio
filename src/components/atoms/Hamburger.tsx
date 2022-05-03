import styled from "styled-components";

const HamburgerContainer = styled.div`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  height: 24px;
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 24px;
`;

const HamburgerInner = styled.div`
  position: absolute;
  bottom: 0px;
  width: 2.5rem;
  height: 0.25rem;

  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
  background-color: var(--fontColor);

  ${({ isActive }) =>
    isActive
      ? `transition-delay: .22s;
  transition-timing-function: cubic-bezier(.215,.61,.355,1);
  transform: translate3d(0,-10px,0) rotate(-45deg);`
      : `transition-timing-function: ease;`}

  &:before,
  &:after {
    position: absolute;
    width: 2.5rem;
    height: 0.25rem;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: var(--fontColor);
  }

  &:before {
    content: "";
    display: block;

    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `
            top: 0;
            transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s;
            transform: rotate(-90deg);
        `
        : `
            top: -10px;
            transition: top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19);
    `}
  }

  &:after {
    content: "";
    display: block;
    bottom: -10px;
    ${({ isActive }: { isActive: boolean }) =>
      isActive
        ? `
            top: 0;
            transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s;
            opacity: 0;
        `
        : `
            top: -20px;
            transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
              opacity 0.1s linear;
    `}
  }
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
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
