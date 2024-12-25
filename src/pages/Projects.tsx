import PContainer from "@/components/home/PContainer";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";

const fetchAllProjects = async () => {
  const result = await axiosInstance.get("/projects");
  return result?.data;
};
const Projects = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchAllProjects,
  });
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
        <h1 className="text-white/80 text-3xl md:text-5xl font-semibold">All Projects</h1>
      </div>
      <PContainer isLoading={isLoading} projects={data?.data} disabledTitle />
    </div>
  );
};

export default Projects;
