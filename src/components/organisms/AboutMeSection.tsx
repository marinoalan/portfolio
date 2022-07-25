import styled from "styled-components";
import AboutMeProfileImage from "@components/atoms/AboutMeProfileImage";
import Section from "@components/atoms/Section";
import AboutMeDescription from "@components/molecules/AboutMeDescription";

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--horizontalMargin) 1rem;
`;

const Content = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 60%;
  align-items: center;
  display: flex;
  position: relative;

  @media (min-width: 60%) {
    &:after {
      content: "";
      height: 16px;
      width: 16px;
      background-color: var(--lineColor);
      border: inherit;
      position: absolute;
      left: -8px;
      top: calc(50% - 10px);
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      transform: rotate(45deg);
      border-radius: 0 0 0 0.3em;
    }
  }
`;

const AboutMeSection = () => (
  <Section id="home" title="About me">
    <FlexContainer>
      <AboutMeProfileImage />
      <Content>
        <TextWrapper>
          <AboutMeDescription />
        </TextWrapper>
      </Content>
    </FlexContainer>
  </Section>
);

export default AboutMeSection;
