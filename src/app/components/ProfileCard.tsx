import Image from "next/image";
import Link from "next/link";
import { FaHandPaper, FaLongArrowAltDown, FaWrench } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <section
      className="z-50 flex flex-col gap-9 text-lg xs:text-2xl col-span-12 lg:col-span-5 mt-[124px] xs:mt-[72px] p-7 pt-24 xs:p-14 xs:pt-24 relative glass-component"
      aria-label="Profile Card"
    >
      <figure className="glass-component rounded-full absolute top-0 -translate-y-1/2 w-full h-full max-w-36 max-h-36 overflow-hidden">
        <Image
          width={144}
          height={144}
          src="/public_assets/portrait.jpg"
          alt="My profile image"
          className=""
        />
      </figure>
      <div className="flex flex-col" aria-label="General Information">
        <p className="font-thin inline-flex gap-2" aria-label="Greeting">
          Hi!{" "}
          <FaHandPaper className="animate-wave transform-origin-bottom-center" />{" "}
          I&apos;m
        </p>
        <h2
          className="text-2xl xs:text-4xl font-bold text-inherit"
          aria-label="Name"
        >
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
      <Link
        className="underline inline-flex items-end"
        target="_blank"
        // download="Konstantinos Siasios - Resume"
        href="./public_assets/resume/Konstantinos Siasios - Resume.pdf"
      >
        <FaLongArrowAltDown className="animate-bounce" />
        View my resume
      </Link>
    </section>
  );
};

export default ProfileCard;
