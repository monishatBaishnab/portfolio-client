import { motion } from "framer-motion";
import monishat from "../../assets/images/moni.png";
import { FileDown } from "lucide-react";
const Header = () => {
  return (
    <div id="home">
      <div className="container !py-10 grid grid-cols-1 gap-5 items-center md:grid-cols-2">
        <div className="space-y-6 order-2 md:order-1" data-aos="fade-up" data-aos-duration="1000">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl text-white/80 font-semibold">Monishat Baishnab</h2>
            <h4 className="text-xl text-white/70 font-medium">Frontend Developer</h4>
          </div>
          <p className="text-white/60">
            A full-stack developer passionate about creating accessible,{" "}
            <br className="hidden sm:inline-block" /> pixel-perfect digital experiences for the web.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-m-bg-light/10 border-m-bg-light/5 text-white/60"
          >
            <FileDown className="size-4" />
            Resume
          </motion.button>
        </div>
        <div
          className="h-[400px] overflow-hidden w-full flex justify-center pb-5 order-1 md:order-2"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="h-full w-[320px] border-2 border-m-bg-light/10 pt-5 bg-gradient-to-t from-m-bg-light/15 from-5% to-95% to-m-bg-light/5"
          >
            <img className="h-full w-full object-contain" src={monishat} alt="Monishat" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
