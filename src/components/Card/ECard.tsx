import { cn } from "@/lib/utils";
import { TExperience } from "@/types";

const ECard = ({ experience }: { experience: TExperience }) => {
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
          <h4 className="text-xl font-semibold text-white/80">{experience?.designation}</h4>
          <span className="uppercase text-sm">
            {experience.startDate} - {experience?.endDate ? experience.endDate : "Present"}
          </span>
        </div>
        <h5 className="font-medium text-white/70">{experience?.company}</h5>
      </div>
      <p>{experience?.description}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {experience?.technologies?.map((tech) => (
          <button key={tech?._id} className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">
            {tech?.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ECard;
