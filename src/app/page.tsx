"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaWrench } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import SocialLink from "./components/SocialLink";
import projects from "./utils/project_data";

export default function Home() {
  const projectsArray = Object.values(projects);
  const [projectIndex, setProjectIndex] = useState(0);
  const [theme, setTheme] = useState("");
  const cardDuration = 5000; // 1 second
  // let intervalHandler: ReturnType<typeof setTimeout>[];
  // const arr = ["a", "b", "c"];
  // console.log();

  useEffect(() => {
    if (!localStorage.getItem("prefered-theme")) {
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
    }

    // intervalHandler.push(
    //   setTimeout(() => {
    //     swipeHandler(projectIndex + 1);
    //   }, cardDuration)
    // );

    // console.log(theme);
  });

  function swipeHandler(index: any, event?: any) {
    console.log(index);
    // console.log(event);
    // clearTimeout(intervalHandler[-1]);
    // // clearInterval(intervalHandler);
    // intervalHandler = setTimeout(() => {
    //   swipeHandler(projectIndex + 1);
    // }, cardDuration);
    if (event) {
      event.preventDefault();
    }
    if (index < 0) {
      setProjectIndex(projectsArray.length - 1);
      return;
    }
    if (index > projectsArray.length - 1) {
      setProjectIndex(0);
      return;
    }
    setProjectIndex(index);
  }

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
      className="mx-auto max-w-[1440px] p-6 bg-bg-clr w-full h-fit grid grid-cols-12 gap-6"
    >
      <section
        className="z-50 flex flex-col gap-9 text-2xl col-span-5 mt-[72px] p-14 pt-24 relative glass-component"
        aria-label="Profile Card"
      >
        <Image
          width={1000}
          height={1000}
          src="/public_assets/portrait.jpg"
          alt="My profile image"
          className="glass-component rounded-full absolute top-0 -translate-y-1/2 w-full h-full max-w-36 max-h-36"
        ></Image>
        <div className="flex flex-col" aria-label="General Information">
          <p className="font-thin" aria-label="Greeting">
            Hi! I'm
          </p>
          <h2 className="text-4xl font-bold text-inherit" aria-label="Name">
            Konstantinos Siasios
          </h2>
          <div
            className="text-base font-light inline-flex gap-1 items-center"
            aria-label="Title"
          >
            <span aria-hidden>
              <FaWrench />
            </span>
            Front-end Developer
          </div>
          <div
            className="text-base font-light inline-flex gap-1 items-center"
            aria-label="Location"
          >
            <span aria-hidden>
              <FaLocationDot />
            </span>
            Greece
          </div>
        </div>
        <div className="font-extralight" aria-label="Profile bullet points">
          <ul className="flex flex-col gap-6 list">
            <li>
              <p className="font-extralight">
                BSc in{" "}
                <span className="font-bold text-inherit">Computer Science</span>
              </p>
            </li>
            <li>
              <p>
                Experienced in{" "}
                <span className="font-bold text-inherit">React.js</span>
              </p>
            </li>
            <li>
              <p>
                Front-end oriented, interested in web{" "}
                <span className="font-bold text-inherit">design</span> and{" "}
                <span className="font-bold text-inherit">development</span>
              </p>
            </li>
          </ul>
        </div>
        <Link className="underline" href="/">
          View my resume
        </Link>
      </section>
      <section
        className="z-50 flex flex-col items-start gap-9 text-2xl col-span-7 mt-[72px] p-14 pt-24 relative h-fit glass-component"
        aria-label="Profile Card"
      >
        <div className="flex items-start justify-start w-full overflow-hidden">
          {projects &&
            projectsArray.map((project, index) => (
              <article
                key={index}
                style={{
                  translate: `${-100 * projectIndex}%`,
                }}
                className="transition-translate duration-300 linear inline-flex justify-between items-start gap-6 min-w-full"
              >
                <figure className="overflow-hidden flex-1 bg-bg-clr rounded-3xl border-2 border-white/10 h-full w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                    alt={`Cover image for the ${project.name} project`}
                    src={project["cover-image"]}
                  />
                  <figcaption className="hidden">{`Cover image for the "${project.name}" project`}</figcaption>
                </figure>
                <div className="flex-1 flex flex-col gap-11">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Link
                    className="round-button py-6 px-20 w-fit font-bold"
                    target="_blank"
                    href={project["project-link"]}
                  >
                    VIEW
                  </Link>
                </div>
              </article>
            ))}
        </div>
        <div
          id="project-carousel-progress"
          className="glass-component w-fit inline-flex gap-1 p-2 mx-auto justify-center items-center"
        >
          <button
            className="p-2 flex justify-center items-center rounded-full hover:bg-white/5 focus:bg-white/5"
            onClick={(e) => swipeHandler(projectIndex - 1, e)}
          >
            <IoIosArrowBack />
          </button>
          {projectsArray &&
            projectsArray.map((project, index) => {
              return (
                <button
                  key={index}
                  onClick={(e) => swipeHandler(index, e)}
                  className={`${index === projectIndex ? "playing" : ""} ${
                    index < projectIndex ? "finished" : ""
                  } indicator h-1 w-9 rounded-full relative`}
                ></button>
              );
            })}
          <button
            className="p-2 flex justify-center items-center rounded-full hover:bg-white/5 focus:bg-white/5"
            onClick={(e) => swipeHandler(projectIndex + 1, e)}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      <section className="z-50 my-5 glass-component flex gap-10 px-14 py-11 col-span-8 h-fit">
        <h4 className="absolute top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
          Socials
        </h4>
        <SocialLink href="/">
          <FaGithub className="text-6xl" />
        </SocialLink>
      </section>
      <section className="z-50 my-5 glass-component col-span-4 px-14 py-11 h-fit">
        <h4 className="absolute top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
          Skills
        </h4>
        <div className="inline-flex gap-10 overflow-x-hidden overflow-y-visible w-full rounded-3xl">
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
          <SocialLink href="/">
            <FaGithub className="text-6xl" />
          </SocialLink>
        </div>
      </section>
      <section className="z-50 left-1/2 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl">
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
      <div
        aria-hidden
        className="pointer-events-none overflow-hidden blur-[200px] z-0 absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-0 left-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#FF7676] to-[#A128FF]"></div>
        <div className="absolute bottom-0 right-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#0094FF] to-[#FFC700] -rotate-45"></div>
      </div>
    </main>
  );
}
