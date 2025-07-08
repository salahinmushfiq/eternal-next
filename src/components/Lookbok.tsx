// components/Lookbook.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

type LookbookItem = {
  name: string
  image: string
}

const items: LookbookItem[] = [
  {
    name: 'Modern Minimal',
    image:
      'https://images.pexels.com/photos/10422197/pexels-photo-10422197.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Street Neutral',
    image:
      'https://images.pexels.com/photos/3372595/pexels-photo-3372595.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Urban Softwear',
    image:
      'https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Lookbook() {
  return (
    <section className="py-28 px-6 bg-[#f4f1ed]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{fadeInUp}}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#7f6d5f]">
          Lookbook
        </h2>
        <p className="mt-4 text-[#7f6d5f]">Curated outfits from seasonal collections</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover filter grayscale group-hover:filter-none transition duration-700 ease-in-out"
                priority={idx === 0}
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl font-semibold pointer-events-none">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
