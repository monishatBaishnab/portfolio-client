import { Github, Link, Linkedin, Menu } from "lucide-react";
import logo from "../assets/images/m.me.large.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#projects", label: "Project" },
  { path: "#skills", label: "Skill" },
  { path: "#blogs", label: "Blog" },
  { path: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [open, setOpen] = useState(false);

  // Update active link based on scroll position
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.path));
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="z-10 sticky left-0 right-0 top-0 container !py-0">
      <div className=" bg-m-bg-light/5 flex items-center rounded-lg justify-between px-5 min-h-16 border border-m-bg-light/10 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="outline-none p-2 text-white/60 block md:hidden"
            >
              <Menu />
            </button>

            <a href="#home" className="flex items-center gap-1 cursor-pointer">
              <div className="size-8 overflow-hidden">
                <img src={logo} alt="Logo" className="size-8 object-contain" />
              </div>
              <h1 className="text-xl text-white/80 font-medium">{"[M]"}</h1>
            </a>
            <div
              className={cn(
                "absolute min-w-32 z-20 p-1 rounded-md space-y-0.5 left-5 transition-all duration-300",
                open ? "top-full visible opacity-100" : "top-[90%] invisible opacity-0",
                "bg-slate-800 border border-slate-800/50"
              )}
            >
              {navLinks.map(({ path, label }) => (
                <a
                  className={cn(
                    "transition-all flex items-center gap-2 w-full px-2 py-1 rounded-sm",
                    activeLink === path.slice(1)
                      ? "text-white/80 bg-m-bg"
                      : "text-white/50 hover:text-white/80 hover:bg-m-bg"
                  )}
                  onClick={() => {
                    setActiveLink(path.slice(1));
                    setOpen(false);
                  }}
                  href={path}
                >
                  <Link className="!size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  className={cn(
                    "transition-all",
                    activeLink === link.path.slice(1)
                      ? "text-white/80"
                      : "text-white/50 hover:text-white/80"
                  )}
                  onClick={() => setActiveLink(link.path.slice(1))}
                  href={link.path}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/monishat-baishnab666/"
            target="_blank"
            className="text-white/60 hover:text-white/80 transition-all"
          >
            <Linkedin />
          </a>
          <div className="h-5 w-0.5 bg-white/15"></div>
          <a
            href="https://github.com/monishatBaishnab"
            target="_blank"
            className="text-white/60 hover:text-white/80 transition-all"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
