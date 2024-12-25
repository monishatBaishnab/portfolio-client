import { cn } from "@/lib/utils";
import { TSkill } from "@/types";

const SCard = ({skill}:{skill:TSkill}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        "p-3 pr-5 transition-all rounded-lg",
        "bg-slate-800/20 border border-slate-800/60",
        "hover:bg-slate-800/30"
      )}
    >
      <div className="size-14 overflow-hidden rounded-lg">
        <img
          className="size-full object-contain"
          src={skill.image}
          alt={skill.name}
        />
      </div>
      <div className="space-y-2">
        <h4 className="ml-1 text-lg font-semibold text-white/80">{skill.name}</h4>
        <span className="block text-white/60 bg-slate-800/40 px-3 text-xs py-1 rounded-full border border-slate-800/80">
          {skill.tagline}
        </span>
      </div>
    </div>
  );
};

export default SCard;
