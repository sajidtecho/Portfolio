import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10">
      <div className="mt-10 flex lg:flex-row flex-col gap-8 justify-center overflow-hidden max-w-5xl mx-auto">
        
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 bg-surface p-6 rounded-2xl border border-gray-800 backdrop-blur-md"
        >
          <p className="sm:text-[16px] text-[12px] text-gray-400 uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[45px] sm:text-[35px] xs:text-[30px] text-[25px]">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-black/50 py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm hover-target focus:ring-2 focus:ring-brand"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your valid email address?"
                className="bg-black/50 py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm hover-target focus:ring-2 focus:ring-brand"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-black/50 py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium text-sm hover-target focus:ring-2 focus:ring-brand resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-2 bg-brand py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-brand hover:bg-brand/80 transition-all text-sm hover-target"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Info Card */}
        <motion.div
           variants={fadeIn("left", "tween", 0.2, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.25 }}
           className="flex-1 lg:h-auto md:h-[400px] h-[300px] flex justify-center items-center"
        >
          <div className="w-full h-full rounded-2xl border-2 border-dashed border-gray-700/50 flex flex-col items-center justify-center p-6 text-center text-gray-400">
             <div className="w-16 h-16 rounded-full bg-surface border border-brand/50 flex justify-center items-center text-2xl mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-pulse">
                💬
             </div>
             <p className="max-w-xs leading-relaxed text-[14px]">
                Ready to turn your ideas into functional, beautiful realities? Send me a message, and let's craft something amazing together.
             </p>
             <div className="mt-6 flex gap-4">
               <a href="https://linkedin.com/in/sajid-ahmad-er" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors text-xl hover-target">in</a>
               <a href="https://github.com/sajidtecho" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors text-xl hover-target">GH</a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
