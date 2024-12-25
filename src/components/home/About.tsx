import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="about"
      className="container space-y-8"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h1 className="text-white/80 text-2xl font-semibold">About & Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* About Me */}
        <motion.div
          className="text-white/60 space-y-3"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h5 className="text-white/70 font-medium">Who I Am?</h5>
          <p className="text-white/60">
            I'm Monishat Baishnab from Sylhet-Bangladesh, a full-stack developer passionate about
            creating accessible, pixel-perfect user interfaces. I specialize in blending thoughtful
            design with solid engineering, ensuring that the experiences I build are not only visually
            stunning but also functional and user-friendly.
          </p>
          <p className="text-white/60">
            I worked on personal projects to improve my skills. I stay updated with new technologies
            and build projects to reinforce my learning. Recently, I created a full-stack e-commerce
            system using React JS, Redux, RTK Query, Express JS, Prisma, and PostgreSQL, with MyPay
            as the payment method.
          </p>
          <p className="text-white/60">
            In my free time, I enjoy cycling, traveling, and spending quality time with my family.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="text-white/60 space-y-3"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h5 className="text-white/70 font-medium">Professional Experience</h5>
          <div
            className={cn(
              "space-y-3 p-5 transition-all",
              "bg-slate-800/20 border border-slate-800/60",
              "hover:bg-slate-800/30"
            )}
          >
            <div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-white/80">Frontend Developer</h4>
                <span className="uppercase text-sm">2024 - present</span>
              </div>
              <h5 className="font-medium text-white/70">Learner LMS</h5>
            </div>
            <p>
              As the sole frontend developer at a startup focused on LMS products, I am responsible
              for building an LMS from scratch. I've designed and developed all user interfaces,
              including complex form handling. I also manage the integration of APIs with the
              frontend to ensure seamless functionality.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">Javascript</button>
              <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">React</button>
              <button className="px-3 py-1 rounded-full bg-m-bg-light/5 text-sm">REST API</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
