import { ReactNode } from "react";
import styled from "styled-components";

const SectionContent = styled.div`
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  text-decoration: underline;
  text-decoration-color: var(--lineColor);
  text-underline-offset: 0.17em;
  text-decoration-thickness: 0.15em;
`;

const StyledSection = styled.section`
  padding: 2rem 0;
`;

const Section = ({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) => (
  <StyledSection {...(id ? { id } : {})}>
    <SectionContent>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContent>
  </StyledSection>
);

export default Section;
