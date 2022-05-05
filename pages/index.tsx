import type { NextPage } from "next";
import NextLink from "next/link";
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

  @media (prefers-color-scheme: dark) {
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

const FlagSpan = styled.span`
  @media (prefers-color-scheme: dark) {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
`;

const ArgentinaFlagText = styled(FlagSpan)`
  @media (prefers-color-scheme: dark) {
    background: radial-gradient(circle at center, white, #73abde 50%);
  }
`;

const ItalianFlagText = styled(FlagSpan)`
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #0c9246, #ffffff, #c32e29);
  }
`;

const Home: NextPage = () => {
  return (
    <TextWrapper>
      <TextContainer>
        <CenteredText>
          Hi! <WavingHand>👋</WavingHand> I'm Alan, a {getAge("1994-08-07")}
          -year-old{" "}
          <CountryFlag>
            <ArgentinaFlagText>Argentinian</ArgentinaFlagText> 🇦🇷
          </CountryFlag>{" "}
          software developer, graduated at{" "}
          <NextLink
            href="http://www.unq.edu.ar/english/sections/159-the-university"
            passHref
          >
            <CustomLink target="_blank" rel="noopener noreferrer">
              National University of Quilmes
            </CustomLink>
          </NextLink>{" "}
          and recently based in{" "}
          <CountryFlag>
            <ItalianFlagText>Italy</ItalianFlagText> 🇮🇹
          </CountryFlag>
          .
        </CenteredText>
        <CenteredText>
          I oriented my career towards building frontend projects using React as
          my library for building user interfaces. I first started programming
          with Javascript and then with Typescript, where I found my passion.
        </CenteredText>
        <CenteredText>
          In my spare time i enjoy learning and staying up to date on new
          frameworks, libraries and technologies. So i like to read books, watch
          videos and articles from different blogs and social networks to see
          how other developers implement efficient solutions.
        </CenteredText>
        {/* <br />
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
          for me to quickly learn Meteor, React, MongoDB, Node, etc. */}
      </TextContainer>
    </TextWrapper>
  );
};

export default Home;
