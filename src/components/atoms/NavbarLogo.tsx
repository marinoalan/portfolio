import Link from "next/link";
import { ReactChild } from "react";
import styled from "styled-components";

const TextLogoContainer = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

const NavbarLogoContainer = styled.div`
  padding: 1rem 0rem;
`;

const Span = styled.span`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 0%;
    border-bottom: 0.3rem solid var(--lineColor);
    transition: width 0.5s cubic-bezier(0.74, -0.57, 0.33, 1.19);
  }

  ${NavbarLogoContainer}:hover && {
    ::after {
      width: 100%;
    }
  }
`;

const TextLogo = ({ children }: { children: ReactChild }) => (
  <TextLogoContainer>
    <Span>{children}</Span>
  </TextLogoContainer>
);

const LinkContainer = styled.div`
  a {
    text-decoration: none;
    color: var(--fontColor) !important;
  }
`;

const NavbarLogo = () => (
  // eslint-disable-next-line @next/next/link-passhref
  <LinkContainer>
    <Link href="/">
      <a>
        <NavbarLogoContainer>
          <TextLogo>Alan Marino</TextLogo>
          <TextLogo>Software developer</TextLogo>
        </NavbarLogoContainer>
      </a>
    </Link>
  </LinkContainer>
);

export default NavbarLogo;
