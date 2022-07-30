import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";
import NavbarLogo from "./NavbarLogo";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";

type IHRef = "/" | "/#home" | "/about" | "/#skills" | "/#experience";

interface ILink {
  href: IHRef;
  text: string;
  homeLink?: boolean;
  scroll?: boolean;
}

interface INavbarProps {
  isActive: boolean;
  closingEffect?: boolean;
}

const NAVBAR_HEIGHT = "6rem";

const MAX_WIDTH_FOR_SIDEBAR = "35em";

const HEADER__BOTTOM_LINE_HEIGHT = "7px";

const ALink = styled.a`
  cursor: pointer;
  text-decoration: unset;
  color: var(--fontColor);

  @media (prefers-color-scheme: light) {
    --linkBackgroundColor: var(--fontColor);
  }

  @media (prefers-color-scheme: dark) {
    --linkBackgroundColor: #42d54a;
  }

  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    color: var(--backgroundColor);
    background-color: var(--linkBackgroundColor);
    padding: 1.5rem 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Link = ({ href, text, ...rest }: ILink) => (
  <NextLink href={href} {...rest} passHref>
    <ALink>{text}</ALink>
  </NextLink>
);

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: var(--backgroundColor);
  min-height: ${NAVBAR_HEIGHT};
  font-size: 1.1rem;
  font-weight: bold;

  /* box shadow line */
  &:after {
    content: "";
    position: absolute;
    bottom: -${HEADER__BOTTOM_LINE_HEIGHT};
    height: ${HEADER__BOTTOM_LINE_HEIGHT};
    width: 100%;
    background: linear-gradient(to bottom, var(--boxShadowColor), #00000000);
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;

  > a {
    color: var(--fontColor) !important;
  }

  column-gap: 1.5rem;

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    `
      display: flex;
      flex-direction: column;
      margin: 0;
      align-items: center;
      padding: 0;
    `}
`;

const fadeTranslateY = `-${NAVBAR_HEIGHT}`;

const fadeKeyframe = (fadeIn: boolean) => keyframes`
  ${fadeIn ? "from" : "to"} {
    opacity: 0;
    transform: translateY(${fadeTranslateY});
  }
  ${fadeIn ? "to" : "from"} {
    opacity: 1;
    transform: translate(0);
  }
`;

const fadeAnimation = (fadeIn: boolean) => css`
  animation: ${fadeKeyframe(fadeIn)} 0.4s forwards;
`;

const fadeInAnimation = fadeAnimation(true);

const fadeOutAnimation = fadeAnimation(false);

const Nav = styled(
  ({
    isActive,
    closingEffect,
    ...props
  }: INavbarProps & {
    [props: string]: any;
  }) => <nav {...props} />
)`
  margin-right: var(--horizontalMargin);

  @media (prefers-color-scheme: light) {
    --navBackgroundColor: #2a2a2ad1;
  }

  @media (prefers-color-scheme: dark) {
    --navBackgroundColor: #565656d1;
  }

  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    ${({ isActive, closingEffect }: INavbarProps) =>
      closingEffect ? fadeOutAnimation : isActive && fadeInAnimation}
  }

  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    ${({ isActive, closingEffect }: INavbarProps) =>
      isActive || closingEffect
        ? `
        position: fixed;
        margin-right: 0;
        top: ${NAVBAR_HEIGHT};
        height: calc(100vh - ${NAVBAR_HEIGHT});
        width: 100%;
        background: var(--navBackgroundColor);
        backdrop-filter: blur(0.3rem);
      `
        : "display: none;"}
  }
`;

const HamburgerNavbar = styled(Hamburger)`
  display: none;
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  margin-left: calc(var(--horizontalMargin) - 24px);
  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    display: initial;
  }
`;

const ExperienceLink: ILink = {
  href: "/#experience",
  text: "Experience",
  scroll: false,
};

const SkillsLink: ILink = { href: "/#skills", text: "Skills", scroll: false };

const HomeLink: ILink = { href: "/#home", text: "Home", homeLink: true };

const links: ILink[] = [HomeLink, SkillsLink, ExperienceLink];

const ResponsiveNavbarLogo = styled(NavbarLogo)`
  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    display: none;
  }
`;

const Li = styled.li`
  position: relative;

  @media (prefers-color-scheme: light) {
    --liBorderBottomColor: white;
  }

  @media (prefers-color-scheme: dark) {
    --liBorderBottomColor: var(--backgroundColor);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 0;
    border-bottom: 0.3rem solid var(--lineColor);
    transition: width 0.4s cubic-bezier(0.74, -0.57, 0.33, 1.19);
  }

  ${({ homeLink }: { homeLink?: boolean }) =>
    homeLink &&
    `
    display: none;
    @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
      display: flex;
    }
  `}

  @media (max-width: ${MAX_WIDTH_FOR_SIDEBAR}) {
    width: 100%;
    display: flex;
    border-bottom: 2px solid var(--liBorderBottomColor);

    &:after {
      content: none;
    }
  }
`;

const Navigation = ({
  isActive,
  setActiveHamburger,
  onClick,
  isSmallDevice,
  children,
}: {
  isActive: boolean;
  setActiveHamburger: (isActive: boolean) => void;
  onClick: () => void;
  isSmallDevice: boolean;
  children: any;
}) => {
  const [closingEffect, setClosingEffect] = useState<boolean>(false);

  const closeMenu = (action: () => void) => {
    setClosingEffect(true);
    action();
    setTimeout(() => {
      setClosingEffect(false);
    }, 400);
  };

  return (
    <>
      <HamburgerNavbar
        isActive={isActive}
        onClick={() => {
          if (isActive) {
            const action = () => setActiveHamburger(false);
            closeMenu(action);
          } else {
            setActiveHamburger(true);
          }
        }}
      />
      <Nav
        isActive={isActive}
        closingEffect={closingEffect}
        onClick={() => {
          if (isSmallDevice) {
            const action = onClick;
            closeMenu(action);
          }
        }}
      >
        <Ul isActive={isActive || closingEffect}>{children}</Ul>
      </Nav>
    </>
  );
};

const Navbar = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  const matches = useMediaQuery(`(max-width: ${MAX_WIDTH_FOR_SIDEBAR})`);

  useEffect(() => {
    if (activeHamburger && !matches) {
      setActiveHamburger(false);
    }
  }, [activeHamburger, matches]);

  return (
    <Header id="navigationBar">
      <ResponsiveNavbarLogo />
      <Navigation
        setActiveHamburger={setActiveHamburger}
        isActive={activeHamburger}
        isSmallDevice={matches}
        onClick={() => {
          if (matches) {
            setActiveHamburger(false);
          }
        }}
      >
        {links.map(({ homeLink, ...link }: ILink, index) => (
          <Li key={index} homeLink={homeLink}>
            <Link {...link} />
          </Li>
        ))}
      </Navigation>
    </Header>
  );
};

export default Navbar;
