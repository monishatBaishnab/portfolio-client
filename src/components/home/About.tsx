import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import ESkeleton from "../skeletons/ESkeleton";
import ECard from "../Card/ECard";
import { TExperience } from "@/types";

const fetchAllExperience = async () => {
  const result = await axiosInstance.get("/experiences");
  return result?.data;
};

const About = () => {
  const controls = useAnimation();
  const { data, isLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: fetchAllExperience,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 },
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
    <motion.div id="about" className="container space-y-8" initial="hidden" animate={controls} variants={variants}>
      <h1 className="text-white text-2xl font-semibold">About & Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* About Me */}
        <motion.div className="text-white/60 space-y-2" initial="hidden" animate={controls} variants={variants}>
          <h5 className="text-white/80 font-medium text-lg">Who I Am?</h5>
          <p className="text-white/70 text-base leading-relaxed">
            I'm Monishat Baishnab from Sylhet, Bangladesh, a passionate full-stack developer focused on creating
            accessible, pixel-perfect user interfaces. I blend thoughtful design with robust engineering, ensuring that
            the experiences I build are not only visually stunning but also functional and user-friendly.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            I consistently work on personal projects to refine my skills, staying up-to-date with emerging technologies.
            Most recently, I built a full-stack e-commerce platform using React JS, Redux, RTK Query, Express JS,
            Prisma, and PostgreSQL, with AamarPay, Stripe integrated as the payment gateway.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            I graduated with a Diploma in Engineering in Computer Technology in 2023, achieving a CGPA of 3.84. Outside
            of coding, I enjoy cycling, traveling, and spending quality time with my family.
          </p>
        </motion.div>

        <div className="space-y-5">
          {/* Education */}
          {/* <motion.div className="text-white/60 space-y-3" initial="hidden" animate={controls} variants={variants}>
            <h5 className="text-white/70 font-medium text-lg">Education</h5>
            <div
              className={cn(
                "space-y-4 p-6 transition-all rounded-xl shadow-lg bg-slate-800/20 border border-slate-800/60",
                "hover:bg-slate-800/30",
              )}
            >
              <div>
                <div className="flex justify-between flex-wrap sm:flex-nowrap">
                  <h4 className="text-xl font-semibold text-white hover:text-blue-500 cursor-pointer transition-all duration-200">
                    Diploma in Engineering
                  </h4>
                  <span className="uppercase text-sm text-white/60">{`2019 - 2023`}</span>
                </div>
                <h5 className="font-medium text-white/80">{`Suranjit Sengupta Polytechnic Institute`}</h5>
              </div>
              <p className="text-white/80">CGPA: 3.84</p>
            </div>
          </motion.div> */}

          {/* Experience */}
          <motion.div className="text-white/60 space-y-3" initial="hidden" animate={controls} variants={variants}>
            <h5 className="text-white/70 text-lg font-medium">Professional Experience</h5>
            {isLoading ? (
              <ESkeleton />
            ) : (
              data?.data?.map((experience: TExperience) => <ECard key={experience._id} experience={experience} />)
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
