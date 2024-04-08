"use client";

import { useEffect, useState } from "react";
import {
  FaCodepen,
  FaCss3Alt,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaNode,
  FaPhoneAlt,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import Decoration from "./components/Decoration";
import ProfileCard from "./components/ProfileCard";
import ProjectsSlideshow from "./components/ProjectsSlideshow";
import Scroller from "./components/Scroller";
import SkillContainer from "./components/SkillContainer";
import SocialLink from "./components/SocialLink";

export default function Home() {
  const [theme, setTheme] = useState("");
  const cardDuration = 5000; // 1 second

  useEffect(() => {
    let savedTheme = localStorage.getItem("prefered-theme");
    if (!savedTheme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // dark mode
        setTheme("dark");
        localStorage.setItem("prefered-theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("prefered-theme", "light");
      }
    } else {
      setTheme(savedTheme);
      document.body.setAttribute("data-prefered-theme", savedTheme);
    }
  });

  function toggleTheme(selector?: boolean) {
    if (selector) {
      setTheme("light");
      localStorage.setItem("prefered-theme", "light");
      // document.body.attributes.setNamedItem("data-prefered-theme") = "";
      document.body.setAttribute("data-prefered-theme", "light");
      return;
    }
    setTheme("dark");
    localStorage.setItem("prefered-theme", "dark");
    document.body.setAttribute("data-prefered-theme", "dark");
  }

  return (
    <main
      data-prefered-theme={theme}
      className="mx-auto max-w-[1440px] p-3 sm:p-6 bg-bg-clr w-full h-fit grid grid-cols-12 gap-6"
    >
      <ProfileCard />
      <ProjectsSlideshow />
      <section className="z-50 my-5 glass-component flex gap-10 px-3 sm:px-14 py-11 col-span-12 md:col-span-8 h-fit">
        <h4 className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
          Socials
        </h4>
        <Scroller className="text-6xl">
          <SocialLink href="/">
            <FaGithub />
          </SocialLink>
          <SocialLink href="/">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="/">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="/">
            <FaPhoneAlt />
          </SocialLink>
          <SocialLink href="/">
            <FaCodepen />
          </SocialLink>
        </Scroller>
      </section>
      <section className="z-50 my-5 glass-component flex gap-10 px-3 sm:px-14 py-11 col-span-12 md:col-span-4 h-fit">
        <h4 className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
          Skills
        </h4>
        <Scroller className="overflow-visible text-6xl">
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
      <section className="z-50 left-1/2 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl overflow-y-visible">
        <button
          aria-label="Toggle Light Theme"
          className="round-button"
          onClick={() => toggleTheme(true)}
        >
          <IoSunny className="p-2" />
        </button>
        <button
          aria-label="Toggle Dark Theme"
          className="round-button"
          onClick={() => toggleTheme(false)}
        >
          <IoMoon className="p-2" />
        </button>
      </section>
      <Decoration />
    </main>
  );
}
