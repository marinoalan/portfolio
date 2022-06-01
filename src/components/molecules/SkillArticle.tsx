import { ReactNode } from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
`;

const SkillSVGContainer = styled.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SkillArticle = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Article>
    <Title>{title}</Title>
    <SkillSVGContainer>{children}</SkillSVGContainer>
  </Article>
);

export default SkillArticle;
