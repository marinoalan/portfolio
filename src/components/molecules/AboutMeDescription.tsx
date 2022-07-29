import styled from "styled-components";
import WavingHand from "@components/atoms/WavingHand";
import UniversityLink from "@components/atoms/UniversityLink";
import { ArgentinianFlag, ItalianFlag } from "@components/atoms/Flag";

const CenteredText = styled.p`
  text-align: center;
  @media (min-width: 56.5rem) {
    text-align: left;
  }

  margin-block: 0px;
  font-size: 1rem;
  line-height: 1.4rem;

  @media (prefers-color-scheme: light) {
    color: #424141;
  }

  @media (prefers-color-scheme: dark) {
    color: #3aff3a;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--horizontalMargin);

  border-radius: 10px;
  padding: 10px;
  
  @media (min-width: 56.5rem) {
    border: 2px solid var(--lineColor);
  }
  
  @media (prefers-color-scheme: light) {
    background-color: #6ac396;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1e1e1e;
  }
`;

const millisecondsSecond = 1000;
const millisecondsMinute = 60 * millisecondsSecond;
const millisecondsHour = 60 * millisecondsMinute;
const millisecondsDay = 24 * millisecondsHour;
const millisecondsYear = 365 * millisecondsDay;

const getAge = (dateString: string) => {
  const today: number = +new Date();
  const birthDate: number = +new Date(dateString);
  const millisecondsDiff = today - birthDate;
  return Math.floor(millisecondsDiff / millisecondsYear);
};

const AboutMeDescription = () => (
  <TextContainer>
    <CenteredText>
      Hi! <WavingHand /> I'm Alan, a {getAge("1994-08-07")}
      -year-old <ArgentinianFlag /> software developer, graduated at{" "}
      <UniversityLink /> and recently based in <ItalianFlag />.
    </CenteredText>
    <CenteredText>
      I oriented my career towards building frontend projects using React as my
      library for building user interfaces. I first started programming with
      Javascript and then with Typescript, where I found my passion.
    </CenteredText>
    <CenteredText>
      In my spare time i enjoy learning and staying up to date on new
      frameworks, libraries and technologies. So i like to read books, watch
      videos and articles from different blogs and social networks to see how
      other developers implement efficient solutions.
    </CenteredText>
  </TextContainer>
);

export default AboutMeDescription;
