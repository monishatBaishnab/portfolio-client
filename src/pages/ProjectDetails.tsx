import { Github, Link2, MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import PDSkeleton from "@/components/skeletons/PDSkeleton";
import { TSkill } from "@/types";

const fetchSingleProject = async (id: string) => {
  const result = await axiosInstance.get(`/projects/${id}`);
  return result?.data;
};

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => fetchSingleProject(id as string),
    enabled: !!id,
  });
  const project = data?.data;

  if (!id || isLoading) {
    return <PDSkeleton />;
  }

  const buttonHoverAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 1 },
  };
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
        <h1 className="text-white/80 text-3xl md:text-5xl font-semibold">Project Details</h1>
      </div>

      {/* Details */}
      <div className="container grid gap-5 grid-cols-1 md:grid-cols-2">
        <div>
          <div className="h-60 sm:h-96 w-full p-5 border border-slate-800/50 rounded-md overflow-hidden sm:shrink-0">
            <img className="w-full h-full object-cover" src={project?.image} alt={project?.title} />
          </div>
        </div>
        <div className="grow space-y-2 text-white/60">
          <span className="text-sm">FULLSTACK</span>
          <h2 className="text-2xl font-semibold text-white/80">{project?.title}</h2>
          <p>{project?.description}</p>
          <div className="flex items-center gap-2 flex-wrap !mt-5">
            {project?.skills?.map((skill: TSkill) => (
              <button key={skill?._id} className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">
                {skill?.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 !mt-7">
            {Object.keys(project?.links)?.map((key) => {
              return (
                <a href={project?.links?.[key as "client" | "server" | "live"]} target="_blank">
                  <motion.button
                    {...buttonHoverAnimation}
                    className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-m-bg-light/10 border-m-bg-light/5 text-white/60"
                  >
                    {key === "live" ? <Link2 className="size-5" /> : <Github className="size-5" />}
                    {key === "live" ? (
                      <p>Go to Live</p>
                    ) : (
                      <p>{key.slice(0, 1).toUpperCase() + key.slice(1)} Code</p>
                    )}
                  </motion.button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
