import axiosInstance from "@/lib/axios";
import SCard from "../Card/SCard";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { TSkill } from "@/types";

const TechStack = () => {
  const getAllSkills = async () => {
    const result = await axiosInstance.get("/skills");
    return result?.data;
  };

  const { data, isLoading } = useQuery({ queryKey: ["skills"], queryFn: getAllSkills });
  const skills = data?.data;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="container space-y-8">
      <h1 className="text-white/80 text-2xl font-semibold">Skills & Tools</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Map over the SCard components with animation */}
        {isLoading
          ? [...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <div
                  className={cn(
                    "flex items-center gap-3",
                    "p-3 pr-5 transition-all rounded-lg",
                    "bg-slate-800/20 border border-slate-800/60",
                    "hover:bg-slate-800/30"
                  )}
                >
                  <div className="size-14 overflow-hidden rounded-lg bg-slate-700 animate-pulse"></div>
                  <div className="flex justify-between grow items-center">
                    <div className="h-6 w-24 bg-slate-700 animate-pulse rounded"></div>
                    <div className="h-6 w-16 bg-slate-700 animate-pulse rounded-full border border-slate-800/80"></div>
                  </div>
                </div>
              </motion.div>
            ))
          : skills?.map((skill: TSkill) => (
              <motion.div
                key={skill?._id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <SCard skill={skill} /> {/* The SCard component */}
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default TechStack;
