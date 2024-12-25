import { useNavigate } from "react-router";

const BCard = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-slate-800/50 p-4 rounded-lg space-y-5 hover:bg-slate-800/20 transition-all shadow-md">
      <div className="w-full h-56 overflow-hidden rounded-sm">
        <img
          className="w-full h-full object-cover"
          src="https://i.ibb.co.com/Ks3khJL/DSC01079.jpg"
          alt=""
        />
      </div>
      <div className="space-y-2">
        <span className="bg-slate-800/50 px-2 py-1 inline-block text-white/60 rounded-md text-sm">
          Technology
        </span>
        <h3
          onClick={() => navigate("/blogs/12")}
          className="text-xl text-white/90 font-semibold cursor-pointer"
        >
          The Impact of Technology on Workspace
        </h3>
        {/* User & Date */}
        <div className="flex items-center gap-4 justify-between">
          {/* User */}
          <div className="flex items-center gap-2">
            <div className="size-7 overflow-hidden rounded-full">
              <img
                className="size-full object-cover"
                src="https://i.ibb.co.com/5G1XTfb/customer.webp"
                alt=""
              />
            </div>
            <h6 className="text-white/70 text-sm font-medium">Tracey Wilson</h6>
          </div>
          {/* Date */}
          <span className="text-white/60 text-sm">August 20, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default BCard;
