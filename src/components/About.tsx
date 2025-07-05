"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="w-6 h-6 text-[#7f6d5f]" />,
    title: 'Sustainable Materials',
    desc: 'We source organic fabrics that feel great and reduce environmental impact.',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#7f6d5f]" />,
    title: 'Ethical Production',
    desc: 'Our clothing is made by skilled artisans in safe, fair working conditions.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#7f6d5f]" />,
    title: 'Timeless Aesthetics',
    desc: 'Styles that transcend trends, built to last and age beautifully.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#7f6d5f]" />,
    title: 'Quality Guaranteed',
    desc: 'Each piece is inspected to meet our strict quality standards.',
  },
];

const About = () => {
  return (
    <section className="bg-[#e9e4e0] py-20 px-4" id="about">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#7f6d5f] mb-10"
        >
          Our Philosophy
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md text-left"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-[#7f6d5f] mb-2">{item.title}</h4>
              <p className="text-sm text-[#7f6d5f]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
