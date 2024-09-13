import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/developerhasan99/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/developerhasan99/",
  },
  {
    title: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e0d306e3c729d12e",
  },
  {
    title: "Github",
    href: "https://github.com/developerhasan99/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className=" flex flex-col md:flex-row items-center gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
