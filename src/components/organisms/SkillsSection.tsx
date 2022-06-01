import { FunctionComponent } from "react";
import styled from "styled-components";
import Section from "@components/atoms/Section";
import SkillArticle from "@components/molecules/SkillArticle";
import icons from "@components/atoms/icons";

const {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  GITIcon,
  StyledComponentsIcon,
  NextIcon,
  NodeIcon,
  MeteorIcon,
  GoogleAnalyticsIcon,
  KibanaIcon,
} = icons;

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-auto-rows: 8rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(6rem, 20vw, 10rem), 1fr)
  );
`;

type TSkillArticle = [string, FunctionComponent];

const skillArticles: TSkillArticle[] = [
  ["#html", HTMLIcon],
  ["#css", CSSIcon],
  ["#js", JSIcon],
  ["#ts", TSIcon],
  ["#react", ReactIcon],
  ["#git", GITIcon],
  ["#styled-components", StyledComponentsIcon],
  ["#nextjs", NextIcon],
  ["#nodejs", NodeIcon],
  ["#meteorjs", MeteorIcon],
  ["#google-analytics", GoogleAnalyticsIcon],
  ["#kibana", KibanaIcon],
];

const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <SkillsGrid>
      {skillArticles.map(([title, Component], index) => (
        <SkillArticle title={title} key={index}>
          <Component />
        </SkillArticle>
      ))}
    </SkillsGrid>
  </Section>
);

export default SkillsSection;
