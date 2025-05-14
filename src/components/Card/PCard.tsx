import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Github, Link2 } from "lucide-react";
import { useNavigate } from "react-router";
import { TProject } from "@/types";

const PCard = ({ project }: { project: TProject }) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "flex gap-6 flex-wrap md:flex-nowrap",
        "space-y-3 p-6 transition-all rounded-xl shadow-md bg-slate-800/20 border border-slate-800/60 hover:bg-slate-800/40",
      )}
    >
      <div className="h-52 w-80 overflow-hidden sm:shrink-0 rounded-lg shadow-lg">
        <img className="w-full h-full object-cover rounded-lg" src={project?.image} alt={project?.title} />
      </div>
      <div className="grow space-y-3 text-white">
        <span className="text-sm font-semibold text-gray-300">FULLSTACK</span>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
          <h2
            onClick={() => navigate(`/projects/${project._id}`)}
            className="text-lg sm:text-2xl line-clamp-2 font-bold text-white hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            {project?.title}
          </h2>
          <div className="flex items-center gap-4">
            {Object.keys(project?.links)?.map((key) => {
              return (
                <>
                  <div className="h-6 w-0.5 bg-white/20 first:hidden"></div>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          href={project?.links?.[key as "client" | "server" | "live"]}
                          target="_blank"
                          className="text-white/70 hover:text-white transition-all duration-300"
                        >
                          {key === "live" ? <Link2 className="size-5" /> : <Github className="size-5" />}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        align="end"
                        side="top"
                        className="text-sm bg-slate-800/60 border-slate-700/50 text-white"
                      >
                        {key === "live" ? (
                          <p>Go to Live</p>
                        ) : (
                          <p>{key.slice(0, 1).toUpperCase() + key.slice(1)} Code</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-white/60 line-clamp-3">{project.description}</p>
        <div className="flex items-center gap-3 flex-wrap !mt-5">
          {project?.skills?.map((skill) => (
            <button
              key={skill?._id}
              className="bg-slate-800/50 text-xs text-white px-4 py-1 rounded-full border border-slate-800/60 hover:bg-slate-800/80"
            >
              {skill?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PCard;
