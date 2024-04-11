import Scroller from "@/app/components/Scroller";
import SkillContainer from "@/app/components/SkillContainer";
import {
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="z-50 my-5 glass-component flex gap-10 px-3 sm:px-14 py-11 col-span-12 md:col-span-4 h-fit">
      <h4 className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
        Skills
      </h4>
      <Scroller className="text-6xl">
        <SkillContainer>
          <FaReact />
        </SkillContainer>
        <SkillContainer>
          <FaNode />
        </SkillContainer>
        <SkillContainer>
          <FaVuejs />
        </SkillContainer>
        <SkillContainer>
          <FaJs />
        </SkillContainer>
        <SkillContainer>
          <FaHtml5 />
        </SkillContainer>
        <SkillContainer>
          <FaCss3Alt />
        </SkillContainer>
        <SkillContainer>
          <FaPhp />
        </SkillContainer>
        <SkillContainer>
          <FaGit />
        </SkillContainer>
        <SkillContainer>
          <FaJava />
        </SkillContainer>
      </Scroller>
    </section>
  );
};

export default Skills;
