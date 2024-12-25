import { cn } from "@/lib/utils";

const ESkeleton = () => {
  return (
    <div
      className={cn(
        "space-y-3 p-5 transition-all",
        "bg-slate-800/20 border border-slate-800/60",
        "hover:bg-slate-800/30"
      )}
    >
      <div>
        <div className="flex justify-between flex-wrap sm:flex-nowrap">
          <div className="h-6 w-48 bg-slate-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-20 bg-slate-700 rounded-md animate-pulse"></div>
        </div>
        <div className="h-5 w-40 bg-slate-700 rounded-md animate-pulse mt-2"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-slate-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-5/6 bg-slate-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-4/5 bg-slate-700 rounded-md animate-pulse"></div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="h-6 w-20 bg-slate-700 rounded-full animate-pulse"></div>
        <div className="h-6 w-24 bg-slate-700 rounded-full animate-pulse"></div>
        <div className="h-6 w-28 bg-slate-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ESkeleton;
