'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type PageLoaderProps = {
  children: React.ReactNode
}

const PageLoader = ({ children }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-[#f4f1ed] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pulsing Logo */}
            <motion.div
              className="mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/LogoTwo.png"
                alt="Eternal Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-[#7f6d5f] text-sm md:text-base font-medium tracking-wide mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Embracing the Eternal lifestyle...
            </motion.p>

            {/* Subtle Spinner */}
            <motion.div
              className="w-6 h-6 border-2 border-[#b59f90] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content appears after loader */}
      {!isLoading && children}
    </>
  )
}

export default PageLoader
