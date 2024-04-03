import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 bg-black w-full h-screen grid grid-cols-12 gap-6">
      <section
        className="col-span-5 mt-[72px] p-14 pt-24 relative h-fit glass-component"
        aria-label="Profile Card"
      >
        <Image
          width={1000}
          height={1000}
          src="/"
          alt="My profile image"
          className="bg-blue-500 absolute top-0 -translate-y-1/2 w-full h-full max-w-36 max-h-36"
        ></Image>
        <div aria-label="General Information">
          <p aria-label="Greeting">Hi! I'm</p>
          <h2 aria-label="Name">Konstantinos Siasios</h2>
          <div aria-label="Title">
            <span aria-hidden>Wrench</span>
            <span>Front-end Developer</span>
          </div>
          <div aria-label="Location">
            <span aria-hidden>Location Pin</span>
            <span>Greece</span>
          </div>
        </div>
        <div aria-label="Profile bullet points">
          <ul>
            <li>
              <p>
                BSc in <span>Computer Science</span>
              </p>
            </li>
            <li>
              <p>
                Experienced in <span>React.js</span>
              </p>
            </li>
            <li>
              <p>
                Front-end oriented, interested in web <span>design</span> and{" "}
                <span>development</span>
              </p>
            </li>
          </ul>
        </div>
        <Link href="/">View my resume</Link>
      </section>
    </main>
  );
}
