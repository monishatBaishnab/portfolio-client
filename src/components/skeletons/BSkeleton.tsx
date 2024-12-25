const BSkeleton = () => {
  return (
    <div className="border border-slate-800/50 p-4 rounded-lg space-y-5 hover:bg-slate-800/20 transition-all shadow-md">
      <div className="w-full h-56 overflow-hidden rounded-sm bg-slate-700/50 animate-pulse"></div>
      <div className="space-y-2">
        <span className="bg-slate-800/50 px-2 py-1 inline-block text-transparent rounded-md text-sm animate-pulse">
          &nbsp;
        </span>
        <h3 className="h-6 bg-slate-700/50 rounded-md animate-pulse"></h3>
        {/* User & Date */}
        <div className="flex items-center gap-4 justify-between">
          {/* User */}
          <div className="flex items-center gap-2">
            <div className="size-7 overflow-hidden rounded-full bg-slate-700/50 animate-pulse"></div>
            <h6 className="h-4 w-20 bg-slate-700/50 rounded-md animate-pulse"></h6>
          </div>
          {/* Date */}
          <span className="h-4 w-16 bg-slate-700/50 rounded-md animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default BSkeleton;
