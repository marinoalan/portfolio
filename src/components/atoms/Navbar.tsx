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
`;

const Ul = styled.ul`
  > a {
    color: var(--fontColor) !important;
  }
`;

const HomeLink: ILink = { href: "/", text: "Home" };

const AboutLink: ILink = { href: "/about", text: "About" };

const links: ILink[] = [HomeLink, AboutLink];

const Navbar = () => (
  <Header>
    <NavbarLogo />
    <nav>
      <Ul>
        {links.map((link: ILink, index) => (
          <Link key={index} {...link} />
        ))}
      </Ul>
    </nav>
  </Header>
);

export default Navbar;
