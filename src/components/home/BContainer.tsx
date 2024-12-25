import { MoveRight } from "lucide-react";
import BCard from "../Card/BCard";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const BContainer = ({ disabledTitle }: { disabledTitle?: boolean }) => {
  const navigate = useNavigate();

  // Animation variants for the cards
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
      {!disabledTitle ? (
        <div className="flex items-center justify-between">
          <h1 className="text-white/80 text-2xl font-semibold">Latest Blogs</h1>
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center text-white/60 hover:text-white/80 transition-all gap-2 text-sm"
          >
            Show all
            <MoveRight className="size-5" />
          </button>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Map over the BCard components with animation */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <BCard /> {/* The BCard component */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BContainer;
