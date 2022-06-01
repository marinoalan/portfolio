import NextLink from "next/link";
import styled from "styled-components";

const CustomLink = styled.a`
  background-color: #832c1b;
  text-decoration: unset;
  color: #f3f3f3;
  transition: all 0.7s;

  &:hover {
    @media (prefers-color-scheme: light) {
      background-color: #424141;
      color: #ff5a5a;
    }

    @media (prefers-color-scheme: dark) {
      background-color: #ababab;
      color: #9b321d;
    }
  }
`;

const UniversityLink = () => (
  <NextLink
    href="http://www.unq.edu.ar/english/sections/159-the-university"
    passHref
  >
    <CustomLink target="_blank" rel="noopener noreferrer">
      National University of Quilmes
    </CustomLink>
  </NextLink>
);

export default UniversityLink;
