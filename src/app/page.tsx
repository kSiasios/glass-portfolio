"use client";

import Decoration from "@/app/components/Decoration";
import ProfileCard from "@/app/components/ProfileCard";
import ProjectsSlideshow from "@/app/components/ProjectsSlideshow";
import Skills from "@/app/components/Skills";
import Socials from "@/app/components/Socials";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [muted, setMuted] = useState(true);
  const cardDuration = 5000; // 1 second

  const buttonAudio = new Audio("/public_Assets/sound/button_sound.wav");
  const today = new Date();
  const currentYear = today.getFullYear();

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
      className="mx-auto max-w-[1440px] p-3 sm:p-6 bg-bg-clr w-full h-fit grid grid-cols-12 gap-6 relative"
    >
      <ProfileCard />
      <ProjectsSlideshow muted={muted} />
      <Socials />
      <Skills />
      <Decoration />
      <footer className="absolute top-full inline-flex justify-center gap-2 items-center w-full py-9">
        &copy; {currentYear}{" "}
        <Link
          href="https://www.linkedin.com/in/konstantinos-siasios/"
          className="hover:underline focus:underline font-bold"
        >
          Konstantinos Siasios
        </Link>
      </footer>
      {/* Theme Toggler */}
      <section className="z-50 left-1/2 top-0 mt-6 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl overflow-y-visible">
        <button
          aria-label="Toggle Light Theme"
          className={`round-button ${theme === "light" ? "selected" : ""}`}
          onClick={() => toggleTheme(true)}
          onMouseEnter={() => {
            if (theme != "light" && !muted) {
              buttonAudio.play();
            }
          }}
          onMouseLeave={() => {
            if (theme != "light" && !muted) {
              buttonAudio.play();
            }
          }}
          onFocus={() => {
            if (theme != "light" && !muted) {
              buttonAudio.play();
            }
          }}
          // onBlur={() => {
          //   if (theme != "light" && !muted) {
          //     buttonAudio.play();
          //   }
          // }}
        >
          <IoSunny className="p-2" />
        </button>
        <button
          aria-label="Toggle Dark Theme"
          className={`round-button ${theme === "dark" ? "selected" : ""}`}
          onClick={() => toggleTheme(false)}
          onMouseEnter={() => {
            if (theme != "dark" && !muted) {
              buttonAudio.play();
            }
          }}
          onMouseLeave={() => {
            if (theme != "dark" && !muted) {
              buttonAudio.play();
            }
          }}
          onFocus={() => {
            if (theme != "light" && !muted) {
              buttonAudio.play();
            }
          }}
        >
          <IoMoon className="p-2" />
        </button>
      </section>
      {/* Sound Toggler */}
      <section className="z-50 right-0 top-0 mt-6 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl overflow-y-visible">
        <button
          aria-label="Toggle Sound"
          className={`round-button ${theme === "light" ? "selected" : ""}`}
          onClick={() => setMuted(!muted)}
          onMouseEnter={() => {
            if (!muted) {
              buttonAudio.play();
            }
          }}
          onMouseLeave={() => {
            if (!muted) {
              buttonAudio.play();
            }
          }}
          onFocus={() => {
            if (!muted) {
              buttonAudio.play();
            }
          }}
        >
          {muted ? (
            <FaVolumeXmark className="p-2" />
          ) : (
            <FaVolumeHigh className="p-2" />
          )}
          {/* <FaVolumeHigh className="p-2" /> */}
        </button>
      </section>
    </main>
  );
}
