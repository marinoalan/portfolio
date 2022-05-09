import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";
import NavbarLogo from "./NavbarLogo";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import useMediaQuery from "hooks/useMediaQuery";

type IHRef = "/" | "/about" | "/#skills" | "/#home";

interface ILink {
  href: IHRef;
  text: string;
  homeLink?: boolean;
  scroll?: boolean;
}

const ALink = styled.a`
  cursor: pointer;
  text-decoration: unset;
  color: var(--fontColor);

  @media (max-width: 35em) {
    color: var(--backgroundColor);
    @media (prefers-color-scheme: light) {
      background-color: var(--fontColor);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #42d54a;
    }

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
  position: sticky;
  top: 0px;
  z-index: 1000;
  background-color: var(--backgroundColor);
  min-height: 6rem;
  font-size: 1.1rem;
  font-weight: bold;

  /* box shadow line */
  &:after {
    content: "";
    position: absolute;
    bottom: -7px;
    height: 7px;
    width: 100%;
    background: linear-gradient(to bottom, var(--boxShadowColor), #00000000);
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  > a {
    color: var(--fontColor) !important;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    `
      display: flex;
      flex-direction: column;
      margin: 0px;
      align-items: center;
      padding: 0px;
    `
  }
`;

const fadeTranslateY = "-6rem";

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
  }: {
    isActive: boolean;
    closingEffect?: boolean;
    [props: string]: any;
  }) => <nav {...props} />
)`
  margin-right: 2rem;

  @media (max-width: 35em) {
    ${({
      isActive,
      closingEffect,
    }: {
      isActive?: boolean;
      closingEffect?: boolean;
    }) => !isActive && !closingEffect && "display: none;"}
  }

  @media (max-width: 35em) {
    ${({ closingEffect }: { closingEffect?: boolean }) =>
      closingEffect && fadeOutAnimation}

    ${({
      isActive,
      closingEffect,
    }: {
      isActive?: boolean;
      closingEffect?: boolean;
    }) => isActive && !closingEffect && fadeInAnimation}
  }

  ${({
    isActive,
    closingEffect,
  }: {
    isActive: boolean;
    closingEffect?: boolean;
  }) =>
    (isActive || closingEffect) &&
    `
      @media (max-width: 35em) {
        position: fixed;
        margin-right: 0rem;
        top: 6rem;
        height: calc(100vh - 6rem);
        width: 100%;

        @media (prefers-color-scheme: light) {
          background: #2a2a2ad1;
        }
        

        @media (prefers-color-scheme: dark) {
          background: #565656d1;
        }
        
        backdrop-filter: blur(0.3rem);
      }
      `}
`;

const HamburgerNavbar = styled(Hamburger)`
  display: none;
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  margin-left: calc(2rem - 24px);
  @media (max-width: 35em) {
    display: initial;
  }
`;

const SkillsLink: ILink = { href: "/#skills", text: "Skills", scroll: false };

const HomeLink: ILink = { href: "/#home", text: "Home", homeLink: true };

const links: ILink[] = [HomeLink, SkillsLink];

const ResponsiveNavbarLogo = styled(NavbarLogo)`
  @media (max-width: 35em) {
    display: none;
  }
`;

const Li = styled.li`
  ${({ homeLink }: { homeLink?: boolean }) =>
    homeLink &&
    `
    display: none;
    @media (max-width: 35em) {
      display: flex;
    }
  `}

  @media (max-width: 35em) {
    width: 100%;
    display: flex;

    @media (prefers-color-scheme: light) {
      border-bottom: 2px solid white;
    }

    @media (prefers-color-scheme: dark) {
      border-bottom: 2px solid var(--backgroundColor);
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

  const matches = useMediaQuery("(max-width: 35em)");

  useEffect(() => {
    if (activeHamburger && !matches) {
      setActiveHamburger(false);
    }
  }, [activeHamburger, matches]);

  return (
    <Header>
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
