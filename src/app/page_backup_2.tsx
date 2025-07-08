/*
  Eternal Fashion - Cinematic Landing Page
  Enhancements:
  1. Split-screen Hero
  2. Grayscale Lookbook with Hover Reveal (Updated Image)
  3. True Scroll-pinned Multi-step Brand Story Section
*/

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const clipReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
}

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = '#f4f1ed'
  }, [])

  return (
    <main className="bg-[#f4f1ed] text-[#3d3a36] font-sans overflow-x-hidden">
      {/* SPLIT HERO SECTION */}
      <section className="relative flex flex-col md:flex-row h-screen px-6 md:px-16 items-center justify-center gap-8">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left z-10"
          initial="hidden"
          animate="show"
          variants={{fadeInUp}}
        >
          <motion.h1
            variants={{clipReveal}}
            className="text-5xl md:text-7xl font-bold text-[#2a2a2a] uppercase tracking-tight"
          >
            Eternal Fashion
          </motion.h1>
          <motion.p
            className="mt-6 text-[#7f6d5f] text-lg md:text-xl"
            variants={{fadeInUp}}
          >
            Discover timeless designs for modern expression
          </motion.p>
          <motion.div className="mt-8" variants={{fadeInUp}}>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-[#7f6d5f] text-white rounded-full font-medium hover:bg-[#3d3a36] transition"
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
            alt="Fashion Hero"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* LOOKBOOK SECTION with GRAYSCALE EFFECT */}
      <section className="py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{fadeInUp}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7f6d5f]">Lookbook</h2>
          <p className="mt-4 text-[#7f6d5f]">Curated outfits from seasonal collections</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Modern Minimal',
              image:
                'https://images.pexels.com/photos/6311395/pexels-photo-6311395.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              name: 'Street Neutral',
              image:
                'https://images.pexels.com/photos/18136136/pexels-photo-18136136.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
            {
              name: 'Urban Softwear',
              image:
                'https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=800',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover filter grayscale group-hover:filter-none transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl font-semibold">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MULTI-PANEL BRAND STORY SECTION */}
      <section className="relative h-[400vh] bg-white">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4">
          {[
            {
              title: 'Grounded in Earth Tones',
              text: 'Our palette reflects calmness — warm beige, neutral sand, and soft clay.',
              image:
                'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1600',
            },
            {
              title: 'Designed for Flow',
              text: 'Silhouettes that move with you, not against you. Simplicity in motion.',
              image:
                'https://images.pexels.com/photos/974923/pexels-photo-974923.jpeg?auto=compress&cs=tinysrgb&w=1600',
            },
            {
              title: 'Style That Lasts',
              text: 'Slow fashion pieces built to outlast trends and honor your rhythm.',
              image:
                'https://images.pexels.com/photos/974928/pexels-photo-974928.jpeg?auto=compress&cs=tinysrgb&w=1600',
            },
          ].map((slide, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center"
              style={{ transform: `translateY(${index * 100}vh)` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#3d3a36]">{slide.title}</h2>
                <p className="text-lg md:text-xl text-[#7f6d5f] mb-10">{slide.text}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-4xl h-[60vh] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7f6d5f] text-white py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Eternal Fashion. All rights reserved.</p>
      </footer>
    </main>
  )
}