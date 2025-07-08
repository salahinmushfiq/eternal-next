// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };
// const clipReveal = {
//   hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
//   show: {
//     clipPath: 'inset(0% 0 0 0)',
//     opacity: 1,
//     transition: { duration: 1, ease: 'easeInOut' },
//   },
// };

// const HeroAlternative1 = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row h-1/2 md:h-screen px-6 md:px-16 items-center justify-center gap-8">
//       <motion.div
//         className="w-full md:w-1/2 text-center md:text-left z-10"
//         initial="hidden"
//         animate="show"
//         variants={{fadeInUp}}
//       >
//         {/* Logo Image above heading */}
//         <motion.div
//           whileHover={{ scale: 1.05, rotate: -1 }}
//           transition={{ type: 'spring', stiffness: 150 }}
//           className="mb-8 inline-block mx-auto md:mx-0 w-48 md:w-72 h-auto relative md:-left-10"
//           style={{ aspectRatio: '4 / 1' }}
//         >
//           <Image
//             src="/LogoTwo.png"
//             alt="Eternal logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </motion.div>
//         <motion.h1
//           variants={{clipReveal}}
//           className="text-3xl md:text-5xl font-bold text-[#7f6d5f] uppercase tracking-tight"
//         >
//           Embrace the Eternal Lifestyle
//         </motion.h1>

//         <motion.p className="mt-6 text-[#7f6d5f] text-base md:text-xl" variants={{fadeInUp}}>
//           Discover timeless fashion designed to inspire your everyday.
//         </motion.p>

//         <motion.div className="mt-8" variants={{fadeInUp}}>
//           <Link
//             href="/product"
//             className="inline-block px-6 py-3 bg-[#7f6d5f] text-white rounded-full font-medium hover:bg-[#3d3a36] transition"
//           >
//             Shop Collection
//           </Link>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden shadow-lg"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         <Image
//           src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt="Fashion Hero"
//           fill
//           className="object-cover object-center"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroAlternative1;

'use client';
import React from 'react';
import { easeInOut, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp: Variants =  {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const clipReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeInOut,
    },
  },
};
const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const HeroAlternative1 = () => {
  return (
    <section className="relative flex flex-col md:flex-row h-1/2 md:h-screen px-6 md:px-16 items-center justify-center gap-8 bg-[#f4f1ed]">
    <motion.div
        className="relative w-full md:w-1/2 text-center md:text-left z-10 bg-[#f4f1ed]/80 md:bg-transparent md:backdrop-blur-sm md:rounded-r-3xl px-4 py-6 md:py-0"
        initial="hidden"
        animate="show"
        variants={staggerChildren}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 160 }}
          className="mb-8 inline-block mx-auto md:mx-0 w-48 md:w-72 h-auto relative md:-left-10"
          style={{ aspectRatio: '4 / 1' }}
        >
          <Image
            src="/LogoTwo.png"
            alt="Eternal logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.h1
          variants={clipReveal}
          className="text-3xl md:text-5xl font-bold text-[#7f6d5f] uppercase tracking-tight drop-shadow-[0_1px_1px_rgba(127,109,95,0.5)]"
        >
          Embrace the Eternal Lifestyle
        </motion.h1>

        <motion.p
          className="mt-6 text-[#7f6d5f] text-base md:text-xl drop-shadow-[0_1px_1px_rgba(127,109,95,0.15)] transition-shadow"
          variants={fadeInUp}
        >
          Discover timeless fashion designed to inspire your everyday.
        </motion.p>

     <motion.div
      className="mt-8 inline-block"   // <-- inline-block here
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 140 }}
      >
        <Link
          href="/product"
          aria-label="Shop the Eternal fashion collection"
          className="inline-block px-6 py-3 bg-[#7f6d5f] text-white rounded-full font-medium 
                    hover:bg-[#6a5c51] hover:shadow-[0_0_10px_rgba(181,159,144,0.5)] transition-shadow"
        >
          Shop Collection
        </Link>
      </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 relative h-[60vh] md:h-[80vh] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Woman in beige minimalist fashion dress walking outdoors"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
};

export default HeroAlternative1;
