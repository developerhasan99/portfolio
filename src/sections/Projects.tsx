import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-8 md:px-12 md:pt-12 z-0"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl md:4xl mt-2 md:5">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm text-white/50"
                  >
                    <CheckIcon className="size-5 md:size-6" />
                    {result.title}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold flex justify-center items-center gap-2 mt-8"
              >
                <span>Visit Live site</span>
                <ArrowRightIcon />
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
