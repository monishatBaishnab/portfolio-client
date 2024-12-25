import { TBlog } from "@/types";
import { useNavigate } from "react-router";

const BCard = ({ blog }: { blog: TBlog }) => {
  const navigate = useNavigate();
  const date = new Date(blog?.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="border border-slate-800/50 p-4 rounded-lg space-y-5 hover:bg-slate-800/20 transition-all shadow-md">
      <div className="w-full h-56 overflow-hidden rounded-sm">
        <img className="w-full h-full object-cover" src={blog?.image} alt={blog?.title} />
      </div>
      <div className="space-y-2">
        {blog?.skills?.map((skill) => (
          <span
            key={skill._id}
            className="bg-slate-800/50 px-2 py-1 inline-block text-white/60 rounded-md text-sm"
          >
            {skill.name}
          </span>
        ))}
        <h3
          onClick={() => navigate(`/blogs/${blog?._id}`)}
          className="text-xl text-white/90 font-semibold cursor-pointer"
        >
          {blog?.title}
        </h3>
        {/* User & Date */}
        <div className="flex items-center gap-4 justify-between">
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
  );
};

export default BCard;
