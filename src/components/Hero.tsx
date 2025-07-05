"use client";
import React from 'react';
import { motion } from 'framer-motion';
import LogoHeader from './LogoHeader';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[100vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat top-[-16px]"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/7679881/pexels-photo-7679881.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[#f4f1ed]/70 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <LogoHeader />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7f6d5f] mt-6"
        >
          Embrace the Eternal Lifestyle
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#b59f90] text-lg md:text-xl mt-4 max-w-xl mx-auto"
        >
          Discover timeless fashion designed to inspire your everyday.
        </motion.p>
        <motion.a
          href="#products"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block mt-8 px-6 py-3 bg-[#7f6d5f] text-white rounded-full hover:bg-[#b59f90] transition-colors"
        >
          Shop Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
