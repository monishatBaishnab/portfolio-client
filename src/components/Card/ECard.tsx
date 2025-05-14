import { cn } from "@/lib/utils";
import { TExperience } from "@/types";

const ECard = ({ experience }: { experience: TExperience }) => {
  return (
    <div
      className={cn(
        "space-y-4 p-6 transition-all",
        "bg-slate-800/20 border border-slate-800/60 rounded-lg",
        "hover:bg-slate-800/30"
      )}
    >
      <div>
        <div className="flex justify-between flex-wrap sm:flex-nowrap">
          <h4 className="text-xl font-semibold text-white">{experience?.designation}</h4>
          <span className="uppercase text-sm text-white/80">
            {experience.startDate} - {experience?.endDate ? experience.endDate : "Present"}
          </span>
        </div>
        <h5 className="font-medium text-white/70">{experience?.company}</h5>
      </div>
      <p className="text-white/80">{experience?.description}</p>
      <div className="flex items-center gap-3 flex-wrap !mt-4">
        {experience?.technologies?.map((tech) => (
          <button
            key={tech?._id}
            className="bg-slate-800/50 text-xs text-white px-4 py-1 rounded-full border border-slate-800/60 hover:bg-slate-800/80"
          >
            {tech?.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ECard;
