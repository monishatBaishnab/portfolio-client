import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="container space-y-8">
      <h1 className="text-white/80 text-2xl font-semibold">Get in Touch</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="bg-slate-800/30 space-y-3 p-5 md:p-10 border border-slate-800/50 rounded-lg w-full"
      >
        <h5 className="text-white/70 font-medium text-center">New Message</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
          <div className="text-white/60 flex items-center gap-2 border-b border-b-slate-800/80">
            <label htmlFor="name" className="shrink-0">
              Full Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 outline-none bg-transparent"
            />
          </div>
          <div className="text-white/60 flex items-center gap-2 border-b border-b-slate-800/80">
            <label htmlFor="email" className="shrink-0">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="text-white/60 flex items-center gap-2 border-b border-b-slate-800/80">
          <label htmlFor="subject" className="shrink-0">
            Subject :
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 outline-none bg-transparent"
          />
        </div>
        <textarea
          rows={7}
          placeholder="Write what you think about me."
          id="message"
          name="message"
          className="w-full px-4 py-2 outline-none text-white/60 placeholder:text-white/40 bg-slate-800/40 rounded-lg resize-none"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          className="px-6 py-2 border-2 flex items-center gap-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50 text-white/60"
        >
          <Send className="size-4" />
          Send me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Contact;
