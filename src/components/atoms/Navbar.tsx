import styled from "styled-components";
import NextLink from "next/link";
import NavbarLogo from "./NavbarLogo";

type IHRef = "/" | "/about";

interface ILink {
  href: IHRef;
  text: string;
}

const Link = ({ href, text }: ILink) => (
  <NextLink href={href}>
    <a>{text}</a>
  </NextLink>
);

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 1000;
  box-shadow: 0 4px 4px -2px var(--boxShadowColor);
  background-color: var(--backgroundColor);
  min-height: 6rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Ul = styled.ul`
  > a {
    color: var(--fontColor) !important;
  }
`;

const Nav = styled.nav`
  margin-right: 2rem;
`;

const AboutLink: ILink = { href: "/about", text: "About" };

const links: ILink[] = [AboutLink];

const Navbar = () => (
  <Header>
    <NavbarLogo />
    <Nav>
      <Ul>
        {links.map((link: ILink, index) => (
          <Link key={index} {...link} />
        ))}
      </Ul>
    </Nav>
  </Header>
);

export default Navbar;
