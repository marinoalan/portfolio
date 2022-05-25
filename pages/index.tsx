import type { NextPage } from "next";
import NextLink from "next/link";
import styled from "styled-components";
import NextImage from "next/image";
import profileImg from "../public/profile-img.webp";
import { ReactNode, useRef, useState } from "react";
import useElementIsVisible from "hooks/useElementIsVisible";

const CenteredText = styled.p`
  text-align: center;
  @media (min-width: 56.5rem) {
    text-align: left;
  }

  margin-block: 0px;
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
  display: flex;
  flex-direction: column;
  row-gap: var(--horizontalMargin);
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

const WavingHandStyled = styled.span`
  @media (prefers-color-scheme: light) {
    filter: contrast(0.5);
  }

  ${({ isVisible }: { isVisible: boolean }) =>
    isVisible &&
    `
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    animation-iteration-count: 2;
    animation-delay: 1s;
    display: inline-block;

    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      } /* The following five values can be played with to make the waving more or less extreme */
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      } /* Reset for the last half to pause */
      100% {
        transform: rotate(0deg);
      }
    }
  `}
`;

const WavingHand = ({ children }: { children: ReactNode }) => {
  const wavingHandRef = useRef(null);

  const isVisible = useElementIsVisible({ elementRef: wavingHandRef });

  return (
    <WavingHandStyled ref={wavingHandRef} isVisible={isVisible}>
      {children}
    </WavingHandStyled>
  );
};

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

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: min(14rem, 100%);
  height: min(12rem, 65vw);
`;

const Image = styled(NextImage)`
  max-width: 100% !important;
  width: unset !important;
  min-width: unset !important;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const ImageShapeBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 75% 25% 84% 16% / 85% 51% 49% 15%;
  height: 100%;

  @media (prefers-color-scheme: dark) {
    --imageBackgroundColor: var(--fontColor);
  }

  @media (prefers-color-scheme: light) {
    --imageBackgroundColor: #152b2e;
  }

  background: linear-gradient(to right, var(--imageBackgroundColor), #9e9e9ebd);
`;

const ImageProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageProfile = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20rem;
  flex-grow: 1;
`;

const ImageWithGradient = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>();
  return (
    <ImageWrapper>
      <ImageContainer>
        {isImageLoaded && <ImageShapeBackground />}
        <ImageProfileContainer>
          <ImageProfile>
            <Image
              src={profileImg}
              alt="Profile image"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk5uV9CwABZAEUcnMSRQAAAABJRU5ErkJggg==`}
              layout="fill"
              objectFit="contain"
              priority
              onLoadingComplete={() => {
                setIsImageLoaded(true);
              }}
            />
          </ImageProfile>
        </ImageProfileContainer>
      </ImageContainer>
    </ImageWrapper>
  );
};

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

const SectionContent = styled.div`
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ alignItems }: { alignItems: "center" | "baseline" }) =>
    alignItems};
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

const Section = styled.section`
  margin: 2rem 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 10rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 10rem), 1fr));
`;

const Home: NextPage = () => {
  return (
    <>
      <Section id="home">
        <SectionContent alignItems="center">
          <SectionTitle>About me</SectionTitle>
          <FlexContainer>
            <ImageWithGradient />
            <Content>
              <TextWrapper>
                <TextContainer>
                  <CenteredText>
                    Hi! <WavingHand>👋</WavingHand> I'm Alan, a{" "}
                    {getAge("1994-08-07")}
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
                    I oriented my career towards building frontend projects
                    using React as my library for building user interfaces. I
                    first started programming with Javascript and then with
                    Typescript, where I found my passion.
                  </CenteredText>
                  <CenteredText>
                    In my spare time i enjoy learning and staying up to date on
                    new frameworks, libraries and technologies. So i like to
                    read books, watch videos and articles from different blogs
                    and social networks to see how other developers implement
                    efficient solutions.
                  </CenteredText>
                </TextContainer>
              </TextWrapper>
            </Content>
          </FlexContainer>
        </SectionContent>
      </Section>
      <Section id="skills">
        <SectionContent alignItems="baseline">
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            <div style={{ position: "relative" }}>
              <Image src="/html.svg" layout="fill" objectFit="contain" />
            </div>
            <div style={{ position: "relative" }}>
              <Image src="/css.svg" layout="fill" objectFit="contain" />
            </div>
            <div style={{ position: "relative" }}>
              <Image src="/js.svg" layout="fill" objectFit="contain" />
            </div>
            <div style={{ position: "relative" }}>
              <Image src="/ts.svg" layout="fill" objectFit="contain" />
            </div>
          </SkillsGrid>
        </SectionContent>
      </Section>
    </>
  );
};

export default Home;
