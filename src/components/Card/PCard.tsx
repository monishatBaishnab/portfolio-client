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
        "space-y-3 p-5 transition-all rounded-lg",
        "bg-slate-800/20 border border-slate-800/60",
        "hover:bg-slate-800/30"
      )}
    >
      <div className="h-52 w-80 overflow-hidden sm:shrink-0">
        <img className="w-full h-full object-contain" src={project?.image} alt={project?.title} />
      </div>
      <div className="grow space-y-2 text-white/60">
        <span className="text-sm">FULLSTACK</span>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
          <h2
            onClick={() => navigate(`/projects/${project._id}`)}
            className="text-2xl cursor-pointer font-semibold text-white/80"
          >
            {project?.title}
          </h2>
          <div className="flex items-center gap-3">
            {Object.keys(project?.links)?.map((key) => {
              return (
                <>
                  <div className="h-5 w-0.5 bg-white/15 first:hidden"></div>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          href={project?.links?.[key as "client" | "server" | "live"]}
                          target="_blank"
                          className="text-white/60 hover:text-white/80 transition-all"
                        >
                          {key === "live" ? <Link2 className="size-5" /> : <Github className="size-5" />}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        align="end"
                        side="top"
                        className="text-sm bg-m-bg-light/5 border-m-t-light/5 text-white"
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
        <p>
          {project?.description?.length > 200
            ? project?.description?.slice(0, 200)
            : project.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap !mt-5">
          {project?.skills?.map((skill) => (
            <button key={skill?._id} className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">
              {skill?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PCard;
