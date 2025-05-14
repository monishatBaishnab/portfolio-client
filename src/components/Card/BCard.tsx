import { TBlog } from "@/types";
import { useNavigate } from "react-router";
import { CalendarDays } from "lucide-react";

const BCard = ({ blog }: { blog: TBlog }) => {
  const navigate = useNavigate();
  const date = new Date(blog?.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="h-full border border-slate-800/50 p-4 rounded-2xl bg-slate-800/10 hover:bg-slate-800/20 transition-all shadow-lg space-y-4"
    >
      {/* Image */}
      <div className="w-full h-52 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          src={blog?.image}
          alt={blog?.title}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {blog?.skills?.map((skill) => (
          <span
            key={skill._id}
            className="bg-slate-800/50 text-xs text-white px-4 py-1 rounded-full border border-slate-800/60 hover:bg-slate-800/80"
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        onClick={() => navigate(`/blogs/${blog?._id}`)}
        className="text-white/90 text-lg font-semibold leading-snug hover:underline cursor-pointer line-clamp-1"
      >
        {blog?.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm line-clamp-2">
        {blog?.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
        {/* Author */}
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://i.ibb.co.com/X7gMYdj/pasport-size.jpg"
            alt="Monishat Baishnab"
          />
          <span className="text-sm text-white/70">Monishat Baishnab</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-white/50 text-sm">
          <CalendarDays size={14} />
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BCard;
