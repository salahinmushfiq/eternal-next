// // components/BrandSlide.tsx
// 'use client'

// import { motion, useTransform, useScroll } from 'framer-motion'
// import Image from 'next/image'

// type BrandSlideProps = {
//   index: number
//   total: number
//   title: string
//   text: string
//   image: string
//   scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
// }

// export default function BrandSlide({
//   index,
//   total,
//   title,
//   text,
//   image,
//   scrollYProgress,
// }: BrandSlideProps) {
//   const slice = 1 / total
//   const padding = slice * 0.1
//   const start = index * slice
//   const end = index === total - 1 ? 1 : start + slice
//   const appearStart = start + padding
//   const disappearEnd = end - padding

//   const opacity = useTransform(
//     scrollYProgress,
//     index === total - 1
//       ? [start, 1]
//       : [start, appearStart, disappearEnd, end],
//     index === total - 1
//       ? [1, 1]
//       : [0, 1, 1, 0]
//   )

//   const scale = useTransform(
//     scrollYProgress,
//     [start, appearStart, disappearEnd, end],
//     [0.95, 1, 1, 0.95]
//   )

//   const y = useTransform(scrollYProgress, [start, end], ['10%', '0%'])

//   return (
//     <motion.div
//       className="absolute w-full h-full flex items-center justify-center"
//       style={{ opacity, scale, pointerEvents: 'none', willChange: 'opacity, transform' }}
//     >
//       <div className="absolute inset-0 bg-white z-0" />

//      <div className="z-10 lg:w-2/3 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 text-center md:text-left">
//         {/* Text block */}
//         <motion.div className="w-full md:w-1/2 max-w-md md:max-w-xl">
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#3d3a36]">
//             {title}
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-[#7f6d5f]">
//             {text}
//             </p>
//         </motion.div>

//         {/* Image block */}
//         <motion.div
//             style={{ y }}
//             className="relative w-full md:w-2/3 h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl"
//         >
//             <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//             priority={index === 0}
//             />
//         </motion.div>
//         </div>
//     </motion.div>
//   )
// }






// 'use client'

// import { motion, useTransform, useScroll } from 'framer-motion'
// import Image from 'next/image'

// type BrandSlideProps = {
//   index: number
//   total: number
//   title: string
//   text: string
//   image: string
//   scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
// }

// export default function BrandSlide({
//   index,
//   total,
//   title,
//   text,
//   image,
//   scrollYProgress,
// }: BrandSlideProps) {
//   const slice = 1 / total
//   const padding = slice * 0.1
//   const start = index * slice
//   const end = index === total - 1 ? 1 : start + slice
//   const appearStart = start + padding
//   const disappearEnd = end - padding

//   const opacity = useTransform(
//     scrollYProgress,
//     index === total - 1
//       ? [start, 1]
//       : [start, appearStart, disappearEnd, end],
//     index === total - 1
//       ? [1, 1]
//       : [0, 1, 1, 0]
//   )

//   const scale = useTransform(
//     scrollYProgress,
//     [start, appearStart, disappearEnd, end],
//     [0.95, 1, 1, 0.95]
//   )

//   const y = useTransform(scrollYProgress, [start, end], ['10%', '0%'])

//   // Flip layout every other slide
//   const reverseLayout = index % 2 === 1
//   const flexDirection = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'

//   return (
//     <motion.div
//       className="absolute w-full h-full flex items-center justify-center overflow-hidden"
//       style={{ opacity, scale, pointerEvents: 'none', willChange: 'opacity, transform' }}
//     >
//       <div className="absolute inset-0 bg-white z-0" />

//       <div
//         className={`z-10 flex flex-col ${flexDirection} items-center justify-center gap-8 px-6 md:px-12 text-center md:text-left max-w-screen-xl w-full`}
//       >
//         {/* Text block */}
//         <motion.div className="w-full md:w-1/2 max-w-md md:max-w-xl">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#3d3a36]">
//             {title}
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-[#7f6d5f]">
//             {text}
//           </p>
//         </motion.div>

//         {/* Image block */}
//         <motion.div
//           style={{ y }}
//           className="relative w-full md:w-2/3 h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl overflow-hidden shadow-xl"
//         >
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//             priority={index === 0}
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }


'use client'

import { motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import type { MotionValue } from 'framer-motion';

type BrandSlideProps = {
  index: number
  total: number
  title: string
  text: string
  image: string
  scrollYProgress: MotionValue<number>;
}

export default function BrandSlide({
  index,
  total,
  title,
  text,
  image,
  scrollYProgress,
}: BrandSlideProps) {
  const slice = 1 / total
  const start = index * slice
  const end = index === total - 1 ? 1 : start + slice

  const opacity = useTransform(scrollYProgress, [start, end], [1, 1])
  const y = useTransform(scrollYProgress, [start, end], ['5%', '0%'])

  const flexDirection = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'

  const splitTitle = title.split(' ')

  return (
    <motion.div
      className={`flex flex-col ${flexDirection} items-center justify-center h-full px-6 md:px-12 max-w-7xl mx-auto  gap-y-8 md:gap-x-12`}
      style={{ opacity }}
    >
      {/* Text */}
      <motion.div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-[#7f6d5f] mb-4 leading-tight">
          {splitTitle.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg md:text-xl text-[#7f6d5f]">{text}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        style={{ y }}
        className="relative w-full md:w-1/2 h-[50vh] rounded-xl overflow-hidden shadow-xl"
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>
    </motion.div>
  )
}
