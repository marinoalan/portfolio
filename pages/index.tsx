import type { NextPage } from "next";
import styled from "styled-components";

const CenteredText = styled.p`
  text-align: center;
  margin-block: 0px;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4rem;

  @media (prefers-color-scheme: light) {
    color: #424141;
  }

  @media (prefers-color-scheme: light) {
    color: #3aff3a;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  max-width: max(44rem, 80%);
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

const CountryFlag = styled.span`
  white-space: nowrap;
`;

const WavingHand = styled.span`
  @media (prefers-color-scheme: light) {
    filter: contrast(0.5);
  }
`;

const Home: NextPage = () => {
  return (
    <TextWrapper>
      <TextContainer>
        <CenteredText>
          Hi! <WavingHand>👋</WavingHand> I'm Alan, a {getAge("1994-08-07")}
          -year-old <CountryFlag>Argentinian 🇦🇷</CountryFlag> software developer, graduated at National
          University of Quilmes and recently based in <CountryFlag>Italy 🇮🇹</CountryFlag>.
          <br />
          <br />
          I started my career working as a Fullstack developer using JAVA and
          Angular for backend and frontend side, respectively.
          <br />
          <br />
          In that experience i realized that i enjoyed coding and building
          frontend-oriented projects.
          <br />
          <br />
          Consequently i got a new job as a Frontend developer using frameworks,
          libraries and databases that i never used, it was a great challenge
          for me to quickly learn Meteor, React, MongoDB, Node, etc.
        </CenteredText>
      </TextContainer>
    </TextWrapper>
  );
};

export default Home;
