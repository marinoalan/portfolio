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
  row-gap: 40px;
  padding: 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: calc(50% - 1px);
    background-color: var(--lineColor);
  }
`;

const Li = styled.li`
  background-color: #405164;
  width: calc(50% - 15px);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: var(--fontColor);
    top: -12px;
  }

  &:nth-child(even) {
    margin-left: 50%;
    transform: translateX(15px);
    border-radius: 0 10px 10px 10px;

    &:after {
      left: 0;
      transform: translateX(-21px);
    }
  }

  &:nth-child(odd) {
    border-radius: 10px 0 10px 10px;

    &:after {
      right: 0;
      transform: translateX(21px);
    }
  }
`;

const UlWrapper = styled.div`
  width: 100%;
`;

const Article = styled.article`
  padding: 20px;
`;

const ExperienceSection: FunctionComponent = () => (
  <Section id="experience" title="Experience">
    <Container>
      <UlWrapper>
        <Ul>
          <Li>
            <Article>
              <h3>Accenture Argentina</h3>
              <p>Hice tal cosa</p>
            </Article>
          </Li>
          <Li>
            <Article>
              <h3>Atix Labs</h3>
              <p>Hice tal cosa</p>
            </Article>
          </Li>
          <Li>
            <Article>
              <h3>Softtek Argentina</h3>
              <p>Hice tal cosa</p>
            </Article>
          </Li>
        </Ul>
      </UlWrapper>
    </Container>
  </Section>
);

export default ExperienceSection;
