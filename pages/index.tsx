import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      {Array(20).fill(1).map((each) => (
        <p key={each}>Home</p>
      ))}
    </>
  );
};

export default Home;
