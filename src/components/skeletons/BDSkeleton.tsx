import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const BDSkeleton = () => {
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
        <h1 className="text-white text-3xl md:text-5xl font-semibold">Blog Details</h1>
      </div>

      {/* Details */}
      <div className="container">
        <div>
          <div className="h-60 sm:h-[500px] w-full p-5 border border-slate-800/50 rounded-md overflow-hidden sm:shrink-0 bg-slate-700/50 animate-pulse"></div>
        </div>
        <div className="grow space-y-2">
          <div className="flex items-center gap-2 flex-wrap !mt-5">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <span key={index} className="h-6 w-16 bg-slate-700/50 rounded-md animate-pulse"></span>
              ))}
          </div>
          <h2 className="h-6 w-40 bg-slate-700/50 rounded-md animate-pulse"></h2>
          <p className="space-y-2">
            <span className="block h-4 w-full bg-slate-700/50 rounded-md animate-pulse"></span>
            <span className="block h-4 w-3/4 bg-slate-700/50 rounded-md animate-pulse"></span>
            <span className="block h-4 w-2/3 bg-slate-700/50 rounded-md animate-pulse"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BDSkeleton;
