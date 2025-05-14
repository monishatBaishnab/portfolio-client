import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, PhoneCall, Send, User } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const Contact = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const subject = form.get("subject")?.toString().trim();
    const messageInput = form.get("message")?.toString().trim();

    if (!name || !email || !subject || !messageInput) {
      toast.error("Please fill all input fields.");
    } else {
      toast.success("Message Sent!");
    }
    (e.target as HTMLFormElement).reset(); // Reset the form after successful submission
  };

  return (
    <div className="container space-y-8">
      <h1 className="text-white text-2xl font-semibold">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 md:col-span-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="bg-slate-800/30 p-6 border border-slate-800/50 rounded-lg"
          >
            <h5 className="text-white font-medium mb-4">Create New Message</h5>
            <div className="flex flex-col gap-4">
              <input
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Full Name"
                className="px-4 py-2 bg-transparent text-white/60 border-b border-slate-800/80 outline-none"
              />
              <input
                autoComplete="off"
                type="email"
                name="email"
                placeholder="Email"
                className="px-4 py-2 bg-transparent text-white/60 border-b border-slate-800/80 outline-none"
              />
              <input
                autoComplete="off"
                type="text"
                name="subject"
                placeholder="Subject"
                className="px-4 py-2 bg-transparent text-white/60 border-b border-slate-800/80 outline-none"
              />
              <textarea
                autoComplete="off"
                name="message"
                placeholder="Write your message..."
                className="px-4 py-2 bg-transparent text-white/60 border-b border-slate-800/80 outline-none resize-none"
                rows={5}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              type="submit"
              className="px-6 py-2 mt-4 border-2 flex items-center gap-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50 text-white/60"
            >
              <Send className="size-4" />
              Send Message
            </motion.button>
          </motion.div>
        </form>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="bg-slate-800/30 p-6 border border-slate-800/50 rounded-lg">
            <h5 className="text-white text-lg font-medium mb-4">Contact Info</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <User className="size-5 text-white" />
                <span className="text-white/60">Monishat Baishnab</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-white" />
                <span className="text-white/60">baishnabmonishat@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-white" />
                <span className="text-white/60">+8801609927144</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-white" />
                <span className="text-white/60">Sylhet, Bangladesh</span>
              </li>
            </ul>
          </div>
          <div className="mt-5 space-y-2.5 bg-slate-800/30 p-6 rounded-xl border border-slate-800/50 shadow-sm">
            <p className="text-white text-base font-semibold">Open to Freelance Work & Collaborations</p>
            <p className="text-white/60 text-sm leading-relaxed">
              I specialize in building responsive and performant web apps using{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">TypeScript</span>,{" "}
              <span className="text-white font-medium">Node.js</span>, and{" "}
              <span className="text-white font-medium">MongoDB</span>.
            </p>

            <div className="flex items-center gap-2 pt-2 text-white">
              <a
                href="https://github.com/monishatBaishnab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50"
              >
                <Github className="size-4 shrink-0" />
              </a>
              <a
                href="https://www.linkedin.com/in/monishat-baishnab666/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50"
              >
                <Linkedin className="size-4 shrink-0" />
              </a>
              <a
                href="https://wa.me/8801609927144"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50"
              >
                <PhoneCall className="size-4 shrink-0" />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Sd6SPfHb0_P3RUroWm0ScvdVXtaIvVGZ"
                download="Monishat Baishnab_Fullstack Developer"
                className="px-4 py-1.5 border-2 rounded-md transition-[background] bg-slate-800/40 border-slate-800/50"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
