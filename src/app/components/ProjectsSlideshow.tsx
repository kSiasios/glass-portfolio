import projects from "@/app/utils/project_data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface GenericProps {
  muted?: boolean;
}

const ProjectsSlideshow = ({ muted }: GenericProps) => {
  const router = useRouter();
  const projectsArray = Object.values(projects);
  const [projectIndex, setProjectIndex] = useState(0);
  const [style, setStyle] = useState({});

  function swipeHandler(index: any, event?: any) {
    if (event) {
      event.preventDefault();
    }
    if (index < 0) {
      setProjectIndex(projectsArray.length - 1);
      router.push(`#project-${projectsArray.length - 1}`);
      return;
    }
    if (index > projectsArray.length - 1) {
      setProjectIndex(0);
      router.push(`#project-${0}`);
      return;
    }
    setProjectIndex(index);
    router.push(`#project-${index}`);
  }

  function pauseAnimation() {
    setStyle({
      animationPlayState: "paused",
      animation: "none",
    });
    // if (muted) {
    //   return;
    // }
    // buttonAudio.play();
  }

  function playAnimation() {
    setStyle({});
    // if (muted) {
    //   return;
    // }
    // buttonAudio.play();
  }

  // const buttonAudio = new Audio("/public_Assets/sound/button_sound.wav");
  // let style: CSSProperties = {};

  return (
    <section
      className="z-50 flex flex-col items-start gap-9 text-lg xs:text-2xl col-span-12 lg:col-span-7 lg:mt-[72px] relative h-fit"
      aria-label="Profile Card"
    >
      <div className="flex items-stretch justify-start w-full overflow-hidden gap-6 stripped-glass bg-transparent">
        {projects &&
          projectsArray.map((project, index) => (
            <article
              key={index}
              id={`project-${index}`}
              className="glass-component transition-all duration-300 linear flex flex-col justify-between items-center gap-6 min-w-full p-7 xs:p-14 border-none"
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <figure className="mx-auto sm:mx-0 max-w-[50%] overflow-hidden flex-1 bg-bg-clr rounded-3xl border-2 border-txt-clr/15 h-full w-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                    alt={`Cover image for the ${project.name} project`}
                    src={project["cover-image"]}
                  />
                  <figcaption className="hidden">{`Cover image for the "${project.name}" project`}</figcaption>
                </figure>
                <div className="flex-1 flex flex-col gap-5 sm:gap-10">
                  <h3 className="mx-auto sm:mx-0 font-bold text-2xl xs:text-4xl">
                    {project.name}
                  </h3>
                  <p className="text-lg xs:text-2xl leading-9">
                    <span className="block sm:hidden">
                      {project.description}
                    </span>
                    <span className="hidden sm:block">
                      {project["extended-description"]}
                    </span>
                  </p>
                </div>
              </div>
              <Link
                className="round-button py-6 px-20 w-fit font-bold animate-wiggle"
                target="_blank"
                aria-hidden
                onFocusCapture={(e) => {
                  // setFocusing(true);
                  swipeHandler(index, e);
                }}
                style={style}
                href={project["project-link"]}
                onMouseEnter={pauseAnimation}
                onMouseLeave={playAnimation}
              >
                VIEW
              </Link>
            </article>
          ))}
      </div>
      <div
        id="project-carousel-progress"
        className="glass-component w-fit inline-flex gap-1 p-2 mx-auto justify-center items-center"
      >
        <button
          className="p-2 flex justify-center items-center rounded-full hover:bg-white/5 focus:bg-white/5"
          onClick={(e) => {
            // if (!muted) {
            //   buttonAudio.play();
            // }
            swipeHandler(projectIndex - 1, e);
          }}
        >
          <IoIosArrowBack />
        </button>
        {projectsArray &&
          projectsArray.map((project, index) => {
            return (
              <Link
                href={`#project-${index}`}
                key={index}
                onClick={(e) => swipeHandler(index, e)}
                className={`${index === projectIndex ? "playing" : ""} ${
                  index < projectIndex ? "finished" : ""
                } indicator h-1 w-5 xs:w-9 rounded-full relative`}
              ></Link>
            );
          })}
        <button
          className="p-2 flex justify-center items-center rounded-full hover:bg-white/5 focus:bg-white/5"
          onClick={(e) => {
            // if (!muted) {
            //   buttonAudio.play();
            // }
            swipeHandler(projectIndex + 1, e);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSlideshow;
