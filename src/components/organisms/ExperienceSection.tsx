import Section from "@components/atoms/Section";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  padding: 0;

  @media (min-width: 56.5rem) {
    position: relative;
    row-gap: 2.5rem;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      left: calc(50% - 1px);
      background-color: var(--lineColor);
      background-color: #2a2a2a;
    }
  }
`;

const Li = styled.li`
  border: 2px solid #2a2a2a;
  border-radius: 10px;
  box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px,
    rgb(14 30 37 / 32%) 0px 2px 16px 0px;

  @media (prefers-color-scheme: light) {
    background-color: #6ac396;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }

  @media (min-width: 56.5rem) {
    position: relative;
    width: calc(50% - 0.9375rem);
    width: calc(50% - 15px);
    &:after {
      content: "";
      position: absolute;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      top: -13px;
      background-color: var(--lineColor);
      border: 2px solid #2a2a2a;
    }

    &:nth-child(even) {
      // margin-left: 50%;
      // transform: translateX(0.9375rem);
      margin-left: calc(50% + 11px);
      border-radius: 0 10px 10px 10px;

      &:after {
        left: 0;
        transform: translateX(-20px);
      }
    }

    &:nth-child(odd) {
      border-radius: 10px 0 10px 10px;

      &:after {
        right: 0;
        transform: translateX(20px);
      }
    }
  }
`;

const UlWrapper = styled.div`
  width: 100%;
`;

const Article = styled.article`
  padding: 20px;
`;

const ArticleTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
`;

const ArticleDate = styled.h4`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;

  @media (min-width: 56.5rem) {
    margin: 0px 0px 0.6rem;
    top: -24px;
    position: absolute;
  }
`;

const accentureStack = [
  "react",
  "next.js",
  "styled-components",
  "i18n",
  "moment.js",
  "git",
  "react-hook-form",
  "google-analytics",
  "kibana",
  "eslint",
  "prettier",
];

const TechnologyDelimiter = styled.span`
  color: var(--backgroundColor);
`;

const TechnologyText = styled.span`
  white-space: nowrap;
  background-color: black;
  border-radius: 2px;
  padding: 3px;
`;

const StackText = styled.p`
  line-height: 30px;
`;

const StackWithDelimiter = ({ stack }: { stack: string[] }) => {
  const [firstStackElem, ...restStackElem] = stack;
  return (
    <StackText>
      <TechnologyText>{firstStackElem}</TechnologyText>
      {restStackElem.map((each) => (
        <>
          {" "}
          <TechnologyDelimiter>-</TechnologyDelimiter>{" "}
          <TechnologyText>{each}</TechnologyText>
        </>
      ))}
    </StackText>
  );
};

const ArticleDescription = styled.p`
  margin: 0;
  font-size: 0.8125rem;

  @media (prefers-color-scheme: dark) {
    --experienceDescriptionColor: #bdbdbd;
  }

  @media (prefers-color-scheme: light) {
    --experienceDescriptionColor: #424242;
  }

  color: var(--experienceDescriptionColor);
`;

const ExperienceSection: FunctionComponent = () => (
  <Section id="experience" title="Experience">
    <Container>
      <UlWrapper>
        <Ul>
          <Li>
            <Article>
              <ArticleDate>December 2019 - March 2022</ArticleDate>
              <ArticleTitle>Accenture Argentina</ArticleTitle>
              <ArticleDescription>
                Build single-page applications using Next and React. Make alerts
                and graphs to analyze user interactions and performance to
                iterate solutions.
              </ArticleDescription>
            </Article>
          </Li>
          <Li>
            <Article>
              <ArticleDate>May 2019 - December 2019</ArticleDate>
              <ArticleTitle>Atix Labs</ArticleTitle>
              <ArticleDescription>
                Build reactive frontends using Meteor and React.
              </ArticleDescription>
            </Article>
          </Li>
          <Li>
            <Article>
              <ArticleDate>July 2018 - May 2019</ArticleDate>
              <ArticleTitle>Softtek Argentina</ArticleTitle>
              <ArticleDescription>
                Build backend API REST using Java 8 and migrate frontend from
                AngularJS to Angular 7.
              </ArticleDescription>
            </Article>
          </Li>
        </Ul>
      </UlWrapper>
    </Container>
  </Section>
);

export default ExperienceSection;
