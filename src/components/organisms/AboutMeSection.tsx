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
