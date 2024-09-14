import ksiegowosc24 from "@/assets/images/ksiegowosc24.png";
import onmarket from "@/assets/images/onmarket.png";
import ewanCorlett from "@/assets/images/ewan-corlett.png";
import instagramAdsMockup from "@/assets/images/instagram-ads-mockup.png";
import wpshopmaker from "@/assets/images/wpshopmaker.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Ewan Corlett",
    year: "2024",
    title: "Personal Branding Website For a Life Coach",
    results: [
      { title: "98% PSI Score" },
      { title: "100% ON-Page SEO Score" },
      { title: "Only Blocksy and Elementor is Used" },
    ],
    link: "https://ewancorlett.com/",
    image: ewanCorlett,
  },
  {
    company: "Socially Found",
    year: "2024",
    title: "Instagram Preview Tool",
    results: [
      { title: "Built Using React, Tailwind, ShadCN, Zustand" },
      { title: "Highly optimized UI" },
      { title: "100% Mobile Responsive" },
    ],
    link: "https://developerhasan99.github.io/instagram-ads-mockup/",
    image: instagramAdsMockup,
  },
  {
    company: "WP SHOP Maker",
    year: "2024",
    title: "A Website For WordPress E-Commerce Development Agency",
    results: [
      { title: "Pixel-perfect and UX optimized design" },
      { title: "Fully Optimized for Speed (97% PSI)" },
      { title: "100% ON-page SEO score" },
    ],
    link: "https://wpshopmaker.com/",
    image: wpshopmaker,
  },
  {
    company: "Rafsoft",
    year: "2023",
    title: "WooCommerce website Design, SEO and performance",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ksiegowosc24.pl/",
    image: ksiegowosc24,
  },
  {
    company: "Onmarket",
    year: "20223",
    title: "Freelance Marketplace Creation, Similar to Fiverr",
    results: [
      { title: "Technologies: Laravel, Tailwind, Livewire used" },
      { title: "User authentication, and multiple user role" },
      { title: "Custom CMS for managing users and gigs" },
    ],
    link: "https://onmarket.ai/",
    image: onmarket,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-12 md:pt-12 lg:pt-16 lg:px-16 z-0 sticky"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:4xl mt-2 md:mt-5">
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
                    target="_blank"
                    href={project.link}
                    className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold flex md:inline-flex justify-center items-center gap-2 mt-8"
                  >
                    <span>Visit Live site</span>
                    <ArrowRightIcon />
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
