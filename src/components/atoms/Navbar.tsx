import styled from "styled-components";
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

const Link = ({ href, text, onClick }: ILink & { onClick: () => void }) => (
  <NextLink href={href}>
    <a onClick={onClick}>{text}</a>
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
  justify-content: space-evenly;
  height: 100%;
  margin: 0px;
  align-items: center;
  padding: 0px;`}
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
        background: #ffffff1a;
        backdrop-filter: blur(0.3rem);
      }
      `}
`;

const HamburgerNavbar = styled(Hamburger)`
  display: none;
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
      display: initial;
    }
  `}
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
      <Nav isActive={activeHamburger}>
        <Ul isActive={activeHamburger}>
          {links.map(({ homeLink, ...link }: ILink, index) => (
            <Li homeLink={homeLink}>
              <Link
                key={index}
                {...link}
                onClick={() => setActiveHamburger(!activeHamburger)}
              />
            </Li>
          ))}
        </Ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
