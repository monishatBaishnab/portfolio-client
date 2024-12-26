import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { TSkill } from "@/types";
import BDSkeleton from "@/components/skeletons/BDSkeleton";

const fetchSingleBlog = async (id: string) => {
  const result = await axiosInstance.get(`/blogs/${id}`);
  return result?.data;
};

const ProjectDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchSingleBlog(id as string),
    enabled: !!id,
  });
  const blog = data?.data;
  const date = new Date(blog?.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (!id || isLoading) {
    return <BDSkeleton />;
  }
  console.log(blog);
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
        <h1 className="text-white/80 text-3xl md:text-5xl font-semibold">Blog Details</h1>
      </div>

      {/* Details */}
      <div className="container space-y-7">
        <div>
          <div className="h-60 sm:h-[500px] w-full p-5 border border-slate-800/50 rounded-md overflow-hidden sm:shrink-0">
            <img className="w-full h-full object-cover" src={blog?.image} alt={blog?.title} />
          </div>
        </div>
        <div className="grow space-y-2 text-white/60">
          <div className="flex items-center gap-2 flex-wrap !mt-5">
            {blog?.skills?.map((skill: TSkill) => (
              <span
                key={skill._id}
                className="bg-slate-800/50 px-2 py-1 inline-block text-white/60 rounded-md text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-white/80">{blog?.title}</h2>
          <div className="tiptap" dangerouslySetInnerHTML={{ __html: blog?.content }} />

          {/* User & Date */}
          <div className="flex items-center gap-4 !mt-4">
            {/* User */}
            <div className="flex items-center gap-2">
              <div className="size-7 overflow-hidden rounded-full">
                <img
                  className="size-full object-cover"
                  src="https://i.ibb.co.com/X7gMYdj/pasport-size.jpg"
                  alt="Monishat Baishnab"
                />
              </div>
              <h6 className="text-white/70 text-sm font-medium">Monishat Baishnab</h6>
            </div>
            {/* Date */}
            <span className="text-white/60 text-sm">{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
