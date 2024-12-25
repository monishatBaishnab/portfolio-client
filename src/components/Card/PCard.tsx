import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Github, Link2 } from "lucide-react";
import { useNavigate } from "react-router";

const PCard = () => {
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
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co/stfsY68/23126584-202.jpg"
          alt=""
        />
      </div>
      <div className="grow space-y-2 text-white/60">
        <span className="text-sm">FULLSTACK</span>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
          <h2
            onClick={() => navigate("/projects/12")}
            className="text-2xl cursor-pointer font-semibold text-white/80"
          >
            Frontend Developer
          </h2>
          <div className="flex items-center gap-3">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <button className="text-white/60 hover:text-white/80 transition-all">
                    <Github className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="text-sm bg-m-bg-light/5 border-m-t-light/5 text-white"
                >
                  <p>Server Repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="h-5 w-0.5 bg-white/15"></div>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <button className="text-white/60 hover:text-white/80 transition-all">
                    <Github className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="text-sm bg-m-bg-light/5 border-m-t-light/5 text-white"
                >
                  <p>Client Repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="h-5 w-0.5 bg-white/15"></div>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <button className="text-white/60 hover:text-white/80 transition-all">
                    <Link2 className="size-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="text-sm bg-m-bg-light/5 border-m-t-light/5 text-white"
                >
                  <p>Go To Live</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <p>
          As the sole frontend developer at a startup focused on LMS products, I am responsible for
          building an LMS from scratch. I've designed and developed all user interfaces,
        </p>
        <div className="flex items-center gap-2 flex-wrap !mt-5">
          <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">Javascript</button>
          <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">React</button>
          <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">REST API</button>
        </div>
      </div>
    </div>
  );
};

export default PCard;
