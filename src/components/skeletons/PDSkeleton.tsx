import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const PDSkeleton = () => {
  const navigate = useNavigate();
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
        <h1 className="text-white text-3xl md:text-5xl font-semibold">Project Details</h1>
      </div>

      {/* Details Skeleton */}
      <div className="container sm:h-[500px] space-y-7">
        <div>
          <div className="h-60 sm:h-96 w-full p-5 border border-slate-800/50 rounded-md overflow-hidden sm:shrink-0 bg-slate-700 animate-pulse"></div>
        </div>
        <div className="grow space-y-2">
          <div className="h-4 w-20 bg-slate-700 rounded-md animate-pulse"></div>
          <div className="h-6 w-48 bg-slate-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-full bg-slate-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-3/4 bg-slate-700 rounded-md animate-pulse"></div>
          <div className="flex items-center gap-2 flex-wrap !mt-5">
            <div className="h-6 w-20 bg-slate-700 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-slate-700 rounded-full animate-pulse"></div>
            <div className="h-6 w-28 bg-slate-700 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-wrap items-center gap-3 !mt-7">
            <div className="h-10 w-32 bg-slate-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-32 bg-slate-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-32 bg-slate-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDSkeleton;
