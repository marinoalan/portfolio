import type { NextPage } from "next";
import styled from "styled-components";

const CenteredText = styled.p`
  text-align: center;
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

const Home: NextPage = () => {
  return (
    <>
      <CenteredText>
        Hi! I'm Alan Marino, a {getAge("1994-08-07")}-year-old Argentinian
        software developer, graduated at National University of Quilmes and
        recently based in Italy.
      </CenteredText>
    </>
  );
};

export default Home;
