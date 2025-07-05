"use client";
import React from 'react';
import { motion } from 'framer-motion';
// import Logo from '../assets/Frame 1.svg?react'; // adjust path as needed
// import Logo from '../assets/Frame_1.svg?react'
// import Logo from '../assets/Logo2.svg';
import Image from 'next/image';



const LogoHeader = () => {
  return (
    <motion.div
  className="flex items-center justify-center py-4"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <motion.div
    whileHover={{ scale: 1.05, rotate: -1 }}
    transition={{ type: 'spring', stiffness: 150 }}
    className="w-40 md:w-52 lg:w-64"
  >
    <Image
      src="/LogoTwo.png"
      alt="Eternal logo"
      width={256} // Adjust based on actual dimensions or match w-64 (≈256px)
      height={80} // Adjust proportionally
      className="w-full h-auto"
      priority
    />
  </motion.div>
</motion.div>

  );
};

export default LogoHeader;
