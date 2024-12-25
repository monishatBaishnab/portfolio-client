import { cn } from "@/lib/utils";

const PSkeleton = () => {
  return (
    <div
      className={cn(
        "flex gap-6 flex-wrap md:flex-nowrap",
        "space-y-3 p-5 transition-all rounded-lg",
        "bg-slate-800/20 border border-slate-800/60"
      )}
    >
      <div className="h-52 w-80 overflow-hidden sm:shrink-0">
        <div className="w-full h-full bg-slate-700 animate-pulse"></div>
      </div>
      <div className="grow space-y-2">
        <div className="h-4 w-20 bg-slate-700 animate-pulse rounded"></div>
        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
          <div className="h-6 w-48 bg-slate-700 animate-pulse rounded"></div>
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-slate-700 animate-pulse rounded-full"></div>
            <div className="h-5 w-0.5 bg-slate-700 animate-pulse"></div>
            <div className="h-5 w-5 bg-slate-700 animate-pulse rounded-full"></div>
            <div className="h-5 w-0.5 bg-slate-700 animate-pulse"></div>
            <div className="h-5 w-5 bg-slate-700 animate-pulse rounded-full"></div>
          </div>
        </div>
        <div className="h-4 w-full bg-slate-700 animate-pulse rounded"></div>
        <div className="h-4 w-5/6 bg-slate-700 animate-pulse rounded"></div>
        <div className="flex items-center gap-2 flex-wrap mt-5">
          <div className="px-3 py-1 rounded-full bg-slate-700 animate-pulse w-20 h-6"></div>
          <div className="px-3 py-1 rounded-full bg-slate-700 animate-pulse w-20 h-6"></div>
          <div className="px-3 py-1 rounded-full bg-slate-700 animate-pulse w-20 h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default PSkeleton;
