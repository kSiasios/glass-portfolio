"use client";

import Decoration from "@/app/components/Decoration";
import ProfileCard from "@/app/components/ProfileCard";
import ProjectsSlideshow from "@/app/components/ProjectsSlideshow";
import Skills from "@/app/components/Skills";
import Socials from "@/app/components/Socials";
// import { buttonAudio } from "@/assets/sound/button_sound.wav";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { QRCode } from "react-qrcode-logo";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [qrInput, setQrInput] = useState("");
  // const [muted, setMuted] = useState(true);
  // const buttonAudioRef = React.useRef<HTMLAudioElement | null>(null);
  // const cardDuration = 5000; // 1 second
  // const sound = require("");
  // console.log(sound);
  // const [buttonAudio, setButtonAudio] = useState(new Audio(sound));

  // const buttonAudio = new Audio("/public_Assets/sound/button_sound.wav");
  // const today = new Date();
  const currentYear = new Date().getFullYear();

  useLayoutEffect(() => {
    // setButtonAudio(new Audio("/public_Assets/sound/button_sound.wav"));
    // let savedTheme = localStorage.getItem("prefered-theme");
    // if (!savedTheme) {
    //   if (
    //     window.matchMedia &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches
    //   ) {
    //     // dark mode
    //     setTheme("dark");
    //     localStorage.setItem("prefered-theme", "dark");
    //   } else {
    //     setTheme("light");
    //     localStorage.setItem("prefered-theme", "light");
    //   }
    // } else {
    //   setTheme(savedTheme);
    //   document.body.setAttribute("data-prefered-theme", savedTheme);
    // }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        window.location.host +
          "/public_assets/resume/fullstack/Konstantinos Siasios - Resume.pdf"
      );

      setQrInput(
        window.location.host +
          "/public_assets/resume/fullstack/Konstantinos Siasios - Resume.pdf"
      );

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
    }
  }, []);

  // function playButtonHoverAudio() {
  //   if (!muted && buttonAudioRef.current) {
  //     buttonAudioRef.current.volume = 0.3;
  //     buttonAudioRef.current.play();
  //   }
  // }

  // function playButtonClickAudio() {
  //   if (!muted && buttonAudioRef.current) {
  //     buttonAudioRef.current.volume = 0.7;
  //     buttonAudioRef.current.play();
  //   }
  // }

  // function toggleMuted() {
  //   setMuted(!muted);
  // }

  function toggleTheme() {
    // playButtonClickAudio();
    // console.log(event);
    if (theme === "dark") {
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
    <main className="mx-auto max-w-[1440px] p-3 sm:p-6 bg-bg-clr w-full h-fit grid grid-cols-12 gap-6 relative">
      {/* <audio ref={buttonAudioRef}>
        <source src="/public_assets/sound/button_sound.wav" type="audio/wav" />
      </audio> */}
      <ProfileCard />
      <ProjectsSlideshow />
      {/* <ProjectsSlideshow muted={muted} /> */}
      <Socials />
      <Skills />
      <Decoration />
      <footer className="flex-col items-center sm:flex-row absolute top-full inline-flex justify-between p-8 gap-4 sm:items-end w-full py-9">
        <div className="group qrcode overflow-hidden rounded-lg shadow-xl relative">
          {/* <div className="peer"> */}
          <QRCode
            value={qrInput}
            eyeRadius={10}
            ecLevel="H"
            qrStyle="fluid"
            logoImage="/public_assets\favicon_siasios_com.svg"
            logoHeight={60}
            logoWidth={60}
            // bgColor="#00000000"
            // fgColor="white"
          />
          {/* </div> */}
          <div className="bg-[#00000088] w-full h-full absolute top-0 left-0 hidden group-hover:flex justify-center items-center gap-2">
            <Link
              href={encodeURI(qrInput)}
              target="_blank"
              className="round-button aspect-square h-1/2 max-h-14"
            >
              <IoIosLink />
            </Link>
            <Link
              href={qrInput}
              className="round-button aspect-square h-1/2 max-h-14"
            >
              <FaLongArrowAltDown />
            </Link>
          </div>
        </div>
        <div>
          &copy; {currentYear}{" "}
          <Link
            href="https://www.linkedin.com/in/konstantinos-siasios/"
            className="hover:underline focus:underline font-bold"
          >
            Konstantinos Siasios
          </Link>
        </div>
      </footer>
      {/* Theme Toggler */}
      <section className="z-50 left-1/2 top-0 mt-6 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl overflow-y-visible">
        <button
          aria-label="Toggle Light Theme"
          className={`round-button ${theme === "light" ? "selected" : ""}`}
          onClick={toggleTheme}
          disabled={theme === "light"}
          // onMouseEnter={playButtonHoverAudio}
          // onMouseLeave={theme !== "light" ? playButtonHoverAudio : undefined}
          // onFocus={playButtonHoverAudio}
          // onBlur={playButtonHoverAudio}
        >
          <IoSunny className="p-2" />
        </button>
        <button
          aria-label="Toggle Dark Theme"
          className={`round-button ${theme === "dark" ? "selected" : ""}`}
          onClick={toggleTheme}
          disabled={theme === "dark"}
          // onMouseEnter={playButtonHoverAudio}
          // onMouseLeave={theme !== "dark" ? playButtonHoverAudio : undefined}
          // onFocus={playButtonHoverAudio}
          // onBlur={playButtonHoverAudio}
        >
          <IoMoon className="p-2" />
        </button>
      </section>
      {/* Sound Toggler */}
      {/* <section className="z-50 right-0 top-0 mt-6 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl overflow-y-visible">
        <button
          aria-label="Toggle Sound"
          className={`round-button ${theme === "light" ? "selected" : ""}`}
          onClick={toggleMuted}
          onMouseEnter={playButtonHoverAudio}
          onMouseLeave={playButtonHoverAudio}
          onFocus={playButtonHoverAudio}
        >
          {muted ? (
            <FaVolumeXmark className="p-2" />
          ) : (
            <FaVolumeHigh className="p-2" />
          )}
        </button>
      </section> */}
    </main>
  );
}
