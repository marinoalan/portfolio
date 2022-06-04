import type { NextPage } from "next";
import AboutMeSection from "@components/organisms/AboutMeSection";
import SkillsSection from "@components/organisms/SkillsSection";
import ExperienceSection from "@components/organisms/ExperienceSection";

const Home: NextPage = () => {
  return (
    <>
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
};

export default Home;
