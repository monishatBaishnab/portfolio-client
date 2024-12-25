import { MoveRight } from "lucide-react";
import PCard from "../Card/PCard";
import { useNavigate } from "react-router";

const PContainer = ({ disabledTitle = false }: { disabledTitle?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="container space-y-8">
      {!disabledTitle ? (
        <div className="flex items-center justify-between">
          <h1 className="text-white/80 text-2xl font-semibold">Latest Projects</h1>
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center text-white/60 hover:text-white/80 transition-all gap-2 text-sm"
          >
            Show all
            <MoveRight className="size-5" />
          </button>
        </div>
      ) : null}
      <div className="space-y-5">
        <PCard />
        <PCard />
        <PCard />
      </div>
    </div>
  );
};

export default PContainer;
