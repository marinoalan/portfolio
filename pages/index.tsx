import type { NextPage } from "next";
import AboutMeSection from "@components/organisms/AboutMeSection";
import SkillsSection from "@components/organisms/SkillsSection";

const Home: NextPage = () => {
  return (
    <>
      <AboutMeSection />
      <SkillsSection />
    </>
  );
};

export default Home;
