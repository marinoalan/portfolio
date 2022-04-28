import Link from "next/link";
import { ReactChild } from "react";
import styled from "styled-components";

const NavbarLogoContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  text-align: center;
  padding: 1rem 0rem;
`;

const Span = styled.span`
  position: relative;

  @media (prefers-color-scheme: dark) {
    --textShadow: #d84315;
  }
  
  @media (prefers-color-scheme: light) {
    --textShadow: #ffe9e9;
  }
  
  text-shadow: 0.1em 0.1em var(--textShadow);

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

  @media (hover: hover) and (pointer: fine) {
    ${NavbarLogoContainer}:hover && {
      ::after {
        width: 100%;
      }
    }
  }
`;

const TextLogo = ({ children }: { children: ReactChild }) => (
  <div>
    <Span>{children}</Span>
  </div>
);

const LinkContainer = styled.div`
  margin-left: 2rem;
  a {
    text-decoration: none;
    color: var(--fontColor) !important;
  }
`;

const NavbarLogo = () => (
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
