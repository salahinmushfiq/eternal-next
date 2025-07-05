// components/Contact.jsx
"use client";
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="bg-[#f4f1ed] py-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-4 text-center"
    >
      <h2 className="text-3xl font-bold text-[#7f6d5f] mb-6">Contact Us</h2>
      <p className="text-[#6a5c51] mb-8">
        We&apos;d love to hear from you.Reach out to us for collaborations, inquiries, or custom orders.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-[#d3c7c1] rounded bg-white text-[#7f6d5f] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-[#d3c7c1] rounded bg-white text-[#7f6d5f] focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-[#d3c7c1] rounded bg-white text-[#7f6d5f] focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-[#7f6d5f] text-white px-6 py-2 rounded hover:bg-[#6d5b4e] transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </section>
);

export default Contact;
