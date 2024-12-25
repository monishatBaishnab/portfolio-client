import { Github, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
const ProjectDetails = () => {
  const navigate = useNavigate();
  const buttonHoverAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 1 },
  };
  return (
    <div>
      <div className="container space-y-2">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 relative group pl-6 font-medium flex items-center gap-2"
        >
          <div className="absolute left-0 top-0 bottom-0 group-hover:-left-1.5 transition-all flex items-center">
            <MoveLeft className="size-5" />
          </div>
          Go to Home
        </button>
        <h1 className="text-white/80 text-3xl md:text-5xl font-semibold">Project Details</h1>
      </div>

      {/* Details */}
      <div className="container grid gap-5 grid-cols-1 md:grid-cols-2">
        <div>
          <div className="h-60 sm:h-96 w-full p-5 border border-slate-800/50 rounded-md overflow-hidden sm:shrink-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/stfsY68/23126584-202.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grow space-y-2 text-white/60">
          <span className="text-sm">FULLSTACK</span>
          <h2 className="text-2xl font-semibold text-white/80">Frontend Developer</h2>
          <p>
            As the sole frontend developer at a startup focused on LMS products, I am responsible
            for building an LMS from scratch. I've designed and developed all user interfaces,
          </p>
          <div className="flex items-center gap-2 flex-wrap !mt-5">
            <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">Javascript</button>
            <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">React</button>
            <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">REST API</button>
          </div>
          <div className="flex flex-wrap items-center gap-3 !mt-7">
            <motion.button
              {...buttonHoverAnimation}
              className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-m-bg-light/10 border-m-bg-light/5 text-white/60"
            >
              <Github className="size-4" />
              Client Code
            </motion.button>
            <motion.button
              {...buttonHoverAnimation}
              className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-m-bg-light/10 border-m-bg-light/5 text-white/60"
            >
              <Github className="size-4" />
              Server Code
            </motion.button>
            <motion.button
              {...buttonHoverAnimation}
              className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-m-bg-light/10 border-m-bg-light/5 text-white/60"
            >
              <Github className="size-4" />
              Go to Live
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
