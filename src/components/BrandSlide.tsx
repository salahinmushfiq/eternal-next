'use client'

import { motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import type { MotionValue } from 'framer-motion'

type BrandSlideProps = {
  index: number
  total: number
  title: string
  text: string
  image: string
  scrollYProgress: MotionValue<number>
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
      className={`flex flex-col ${flexDirection} items-center justify-center h-full px-6 md:px-12 max-w-7xl mx-auto gap-y-10 md:gap-x-10`}
      style={{ opacity }}
    >
      {/* Text */}
      <motion.div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-[#7f6d5f] mb-2 leading-tight">
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

        {/* Decorative Line */}
        <div className="h-px w-16 bg-[#cdbdb2] mb-6 mx-auto md:mx-0" />

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
