import Image from "next/image";
import Link from "next/link";
import { FaWrench } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="p-6 bg-black w-full h-screen grid grid-cols-12 gap-6">
      <section
        className="flex flex-col gap-9 text-2xl col-span-5 mt-[72px] p-14 pt-24 relative h-fit glass-component"
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
          <h2 className="text-4xl font-bold" aria-label="Name">
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
          <ul className="flex flex-col gap-6">
            <li>
              <p>
                BSc in <span className="font-bold">Computer Science</span>
              </p>
            </li>
            <li>
              <p>
                Experienced in <span className="font-bold">React.js</span>
              </p>
            </li>
            <li>
              <p>
                Front-end oriented, interested in web{" "}
                <span className="font-bold">design</span> and{" "}
                <span className="font-bold">development</span>
              </p>
            </li>
          </ul>
        </div>
        <Link href="/">View my resume</Link>
      </section>
      <div aria-hidden className="absolute top-0 left-0 w-screen h-screen">
        <div className="pointer-events-none aspect-video w-[500px] bg-[conic-gradient(from 0deg at 50% 50%, #FF7676 0deg, #A128FF 360deg)]"></div>
      </div>
    </main>
  );
}

/* Rectangle 3 */

// position: absolute;
// width: 516px;
// height: 466px;
// left: 297px;
// top: 22px;

// background: conic-gradient(from 0deg at 50% 50%, #FF7676 0deg, #A128FF 360deg);
// filter: blur(100px);
