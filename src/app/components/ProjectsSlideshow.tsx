import projects from "@/app/utils/project_data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectsSlideshow = () => {
  const router = useRouter();
  const projectsArray = Object.values(projects);
  const [projectIndex, setProjectIndex] = useState(0);

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
                <figure className="overflow-hidden flex-1 bg-bg-clr rounded-3xl border-2 border-txt-clr/15 h-full w-full">
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
                  <h3 className="font-bold text-2xl xs:text-4xl">
                    {project.name}
                  </h3>
                  <p className="text-lg xs:text-2xl leading-9">
                    {project.description}
                  </p>
                </div>
              </div>
              <Link
                className="round-button py-6 px-20 w-fit font-bold"
                target="_blank"
                aria-hidden
                onFocusCapture={(e) => {
                  // setFocusing(true);
                  swipeHandler(index, e);
                }}
                // onBlur={() => {
                //   setFocusing(false);
                // }}
                href={project["project-link"]}
              >
                VIEW
              </Link>
            </article>
            // {/* </Link> */}
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
          onClick={(e) => swipeHandler(projectIndex + 1, e)}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSlideshow;
