import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="container flex items-center justify-center flex-wrap sm:flex-nowrap sm:justify-between !py-5 border-t border-t-slate-800/50">
      <p className="text-white/60 text-center">
        Designed and Developed by <a className="text-white/80 cursor-pointer hover:underline">Monishat Baishnab</a> © 2024.
      </p>
      <div className="flex items-center gap-3">
        <button className="text-white/60 hover:text-white/80 transition-all">
          <Linkedin className="size-5" />
        </button>
        <div className="h-5 w-0.5 bg-white/15"></div>
        <button className="text-white/60 hover:text-white/80 transition-all">
          <Github className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
