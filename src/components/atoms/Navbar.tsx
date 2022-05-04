import styled, { createGlobalStyle } from "styled-components";
import NextLink from "next/link";
import NavbarLogo from "./NavbarLogo";
import Hamburger from "./Hamburger";
import { useState } from "react";

type IHRef = "/" | "/about";

interface ILink {
  href: IHRef;
  text: string;
  homeLink?: boolean;
}

const ALink = styled.a`
  cursor: pointer;
  @media (max-width: 35em) {
    @media (prefers-color-scheme: light) {
      color: white;
      background-color: var(--fontColor);
    }

    @media (prefers-color-scheme: dark) {
      color: var(--backgroundColor);
      background-color: #42d54a;
    }

    padding: 1.5rem 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Link = ({ href, text }: ILink) => (
  <NextLink href={href} passHref>
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
    `display: flex;
  flex-direction: column;
  margin: 0px;
  align-items: center;
  padding: 0px;`}
`;

const GlobalStyle = createGlobalStyle`
${({ isActive }: { isActive: boolean }) =>
  isActive &&
  `
  @media (max-width: 35em) {
    body {
      position: fixed;
      overflow-y: scroll;
      width: 100%;
    }
  }
  `}
`;

const Nav = styled.nav`
  @media (max-width: 35em) {
    ${({ isActive }: { isActive: boolean }) => !isActive && "display: none;"}
  }

  margin-right: 2rem;

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
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

const AboutLink: ILink = { href: "/about", text: "About" };

const HomeLink: ILink = { href: "/", text: "Home", homeLink: true };

const links: ILink[] = [HomeLink, AboutLink];

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

const Navbar = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);
  return (
    <Header>
      <ResponsiveNavbarLogo />
      <HamburgerNavbar
        isActive={activeHamburger}
        onClick={() => setActiveHamburger(!activeHamburger)}
      />
      <GlobalStyle isActive={activeHamburger} />
      <Nav isActive={activeHamburger} onClick={() => setActiveHamburger(false)}>
        <Ul isActive={activeHamburger}>
          {links.map(({ homeLink, ...link }: ILink, index) => (
            <Li key={index} homeLink={homeLink}>
              <Link {...link} />
            </Li>
          ))}
        </Ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
