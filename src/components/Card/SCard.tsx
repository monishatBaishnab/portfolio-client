import { cn } from "@/lib/utils";

const SCard = () => {
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
          src="https://monishat-portfolio.web.app/assets/react.b7bf6c65-1h8K5xRc.png"
          alt=""
        />
      </div>
      <div className="flex justify-between grow">
        <h4 className="text-2xl font-semibold text-white/80">Figma</h4>
        <span className="text-white/60 bg-slate-800/40 px-3 pt-1 rounded-full border border-slate-800/80">
          Design
        </span>
      </div>
    </div>
  );
};

export default SCard;
