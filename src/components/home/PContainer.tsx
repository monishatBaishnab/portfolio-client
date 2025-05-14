import { MoveRight } from "lucide-react";
import PCard from "../Card/PCard";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { TProject } from "@/types";
import PSkeleton from "../skeletons/PSkeleton";

const PContainer = ({
  disabledTitle = false,
  projects,
  isLoading,
}: {
  disabledTitle?: boolean;
  projects: TProject[];
  isLoading: boolean;
}) => {
  const navigate = useNavigate();

  // Animation variants for staggered reveal of each PCard
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 }, // Stagger the children animations
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="container space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
      {!disabledTitle ? (
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Latest Projects</h1>
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center text-white/60 hover:text-white transition-all gap-2 text-sm"
          >
            Show all
            <MoveRight className="size-5" />
          </button>
        </div>
      ) : null}

      <motion.div className="space-y-5">
        {isLoading
          ? Array.from({ length: 3 }).map((_, id) => (
              <motion.div
                key={id}
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <PSkeleton />
              </motion.div>
            ))
          : projects?.map((project) => (
              <motion.div
                key={project._id}
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <PCard project={project} />
              </motion.div>
            ))}
      </motion.div>
    </motion.div>
  );
};

export default PContainer;
