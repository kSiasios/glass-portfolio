import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaWrench } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SocialLink from "./components/SocialLink";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Home() {
  return (
    <main className="p-6 bg-black w-full h-screen grid grid-cols-12 gap-6">
      <section
        className="z-10 flex flex-col gap-9 text-2xl col-span-5 mt-[72px] p-14 pt-24 relative h-fit glass-component"
        aria-label="Profile Card"
      >
        <Image
          width={1000}
          height={1000}
          src="/imgs/Portrait.jpg"
          alt="My profile image"
          className="rounded-full bg-blue-500 absolute top-0 -translate-y-1/2 w-full h-full max-w-36 max-h-36"
        ></Image>
        <div className="flex flex-col" aria-label="General Information">
          <p className="font-thin" aria-label="Greeting">
            Hi! I'm
          </p>
          <h2 className="text-4xl font-bold text-white" aria-label="Name">
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
          <ul className="flex flex-col gap-6 text-white/70">
            <li>
              <p className="font-extralight">
                BSc in{" "}
                <span className="font-bold text-white">Computer Science</span>
              </p>
            </li>
            <li>
              <p>
                Experienced in{" "}
                <span className="font-bold text-white">React.js</span>
              </p>
            </li>
            <li>
              <p>
                Front-end oriented, interested in web{" "}
                <span className="font-bold text-white">design</span> and{" "}
                <span className="font-bold text-white">development</span>
              </p>
            </li>
          </ul>
        </div>
        <Link className="underline" href="/">
          View my resume
        </Link>
      </section>
      <section className="my-5 glass-component flex gap-10 px-14 py-11 col-span-8">
        <h4 className="absolute top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-white">
          Socials
        </h4>
        <SocialLink href="/">
          <FaGithub className="text-6xl" />
        </SocialLink>
      </section>
      <div
        aria-hidden
        className="pointer-events-none overflow-hidden blur-[200px] z-0 absolute top-0 left-0 w-screen h-screen"
      >
        <div className="absolute top-0 left-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#FF7676] to-[#A128FF]"></div>
        <div className="absolute bottom-0 right-0 pointer-events-none aspect-video w-[500px] bg-gradient-conic from-[#0094FF] to-[#FFC700] -rotate-45"></div>
      </div>
      <section className="z-50 left-1/2 -translate-x-1/2 glass-component absolute inline-flex gap-4 p-2 text-4xl">
        <button aria-label="Toggle Light Theme" className="round-button">
          <IoSunny className="p-2" />
        </button>
        <button aria-label="Toggle Dark Theme" className="round-button">
          <IoMoon className="p-2" />
        </button>
      </section>
    </main>
  );
}
