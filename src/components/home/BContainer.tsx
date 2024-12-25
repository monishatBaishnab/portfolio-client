import { MoveRight } from "lucide-react";
import BCard from "../Card/BCard";
import { useNavigate } from "react-router";

const BContainer = ({ disabledTitle }: { disabledTitle?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="container space-y-8">
      {!disabledTitle ? (
        <div className="flex items-center justify-between">
          <h1 className="text-white/80 text-2xl font-semibold">Latest Blogs</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center text-white/60 hover:text-white/80 transition-all gap-2 text-sm"
          >
            Show all
            <MoveRight className="size-5" />
          </button>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Card */}
        <BCard />
        <BCard />
        <BCard />
      </div>
    </div>
  );
};

export default BContainer;
