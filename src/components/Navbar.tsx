import { Github, Link, Linkedin, Menu } from "lucide-react";
import logo from "../assets/images/m.me.large.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#project",
    label: "Project",
  },
  {
    path: "#skill",
    label: "Skill",
  },
  {
    path: "#blog",
    label: "Blog",
  },
  {
    path: "#Contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <div className="z-10 sticky left-0 right-0 top-0 container !py-0">
      <div className="bg-m-bg-light/5 flex items-center rounded-lg justify-between px-5 min-h-16 border border-m-bg-light/10 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <button className="outline-none p-2 text-white/60">
                    <Menu />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-m-bg text-white/60 border-none">
                  {navLinks?.map(({ path, label }) => (
                    <DropdownMenuItem
                      key={path}
                      className="focus:bg-slate-800/60 focus:text-white/80 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Link className="!size-4" />
                        {label}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="size-8 overflow-hidden">
                <img src={logo} alt="Logo" className="size-8 object-contain" />
              </div>
              <h1 className="text-xl text-white/80 font-medium">{"[M]"}</h1>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-3">
            {navLinks?.map((link) => (
              <li key={link.path}>
                <a className="text-white/50 hover:text-white/80 transition-all" href={link.path}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white/60 hover:text-white/80 transition-all">
            <Linkedin />
          </button>
          <div className="h-5 w-0.5 bg-white/15"></div>
          <button className="text-white/60 hover:text-white/80 transition-all">
            <Github />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
