import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="container flex items-center justify-center flex-wrap sm:flex-nowrap sm:justify-between !py-5 border-t border-t-slate-800/50">
      <p className="text-white/60 text-center">
        Designed and Developed by <a className="text-white cursor-pointer hover:underline">Monishat Baishnab</a> ©{" "}
        {new Date().getFullYear()}.
      </p>

      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/monishat-baishnab666/"
          target="_blank"
          className="text-white/60 hover:text-white transition-all"
        >
          <Linkedin className="size-5" />
        </a>
        <div className="h-5 w-0.5 bg-white/15"></div>
        <a
          href="https://github.com/monishatBaishnab"
          target="_blank"
          className="text-white/60 hover:text-white transition-all"
        >
          <Github className="size-5" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
