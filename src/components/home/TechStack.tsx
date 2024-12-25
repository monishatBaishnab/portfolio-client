import SCard from "../Card/SCard";
import { motion } from "framer-motion";

const TechStack = () => {
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
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <SCard /> {/* The SCard component */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
