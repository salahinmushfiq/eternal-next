// // components/BrandStory.tsx
// 'use client'

// import { useRef } from 'react'
// import { useScroll } from 'framer-motion'
// import BrandSlide from './BrandSlide'

// // const brandSlides = [
// //   {
// //     title: 'Grounded in Earth Tones',
// //     text: 'Our palette reflects calmness — warm beige, neutral sand, and soft clay.',
// //     image: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1600',
// //   },
// //   {
// //     title: 'Designed for Flow',
// //     text: 'Silhouettes that move with you, not against you. Simplicity in motion.',
// //     image: 'https://images.pexels.com/photos/974923/pexels-photo-974923.jpeg?auto=compress&cs=tinysrgb&w=1600',
// //   },
// //   {
// //     title: 'Style That Lasts',
// //     text: 'Slow fashion pieces built to outlast trends and honor your rhythm.',
// //     image: 'https://images.pexels.com/photos/974928/pexels-photo-974928.jpeg?auto=compress&cs=tinysrgb&w=1600',
// //   },
// // ]
// const brandSlides = [
//   {
//     title: 'Grounded in Earth Tones',
//     text: 'Our palette reflects calmness — warm beige, neutral sand, and soft clay.',
//     image:
//       'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     bg: '#f4f1ed',
//   },
//   {
//     title: 'Designed for Flow',
//     text: 'Silhouettes that move with you, not against you. Simplicity in motion.',
//     image:
//       'https://images.pexels.com/photos/974923/pexels-photo-974923.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     bg: '#f9f6f2',
//   },
//   {
//     title: 'Style That Lasts',
//     text: 'Slow fashion pieces built to outlast trends and honor your rhythm.',
//     image:
//       'https://images.pexels.com/photos/974928/pexels-photo-974928.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     bg: '#ece8e4',
//   },
// ]
// export default function BrandStory() {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({ target: ref })

//   return (
//     <section ref={ref} className="relative h-[300vh] bg-white">
//       <div className="sticky top-0 h-screen flex items-center justify-center text-center overflow-hidden w-fill">
//         {[...brandSlides]
//           .reverse()
//           .map((slide, reversedIndex) => {
//             const index = brandSlides.length - 1 - reversedIndex
//             return (
//               <BrandSlide
//                 key={index}
//                 index={index}
//                 total={brandSlides.length}
//                 title={slide.title}
//                 text={slide.text}
//                 image={slide.image}
//                 scrollYProgress={scrollYProgress}
//               />
//             )
//           })}
//       </div>
//     </section>
//   )
// }


'use client'

import { useScroll} from 'framer-motion'
import { useRef } from 'react'
import BrandSlide from './BrandSlide'

const slides = [
  {
    title: 'Grounded in Earth Tones',
    text: 'Our palette reflects calmness — warm beige, neutral sand, and soft clay.',
    image:
      'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bg: '#f4f1ed',
  },
  {
    title: 'Designed for Flow',
    text: 'Silhouettes that move with you, not against you. Simplicity in motion.',
    image:
      'https://images.pexels.com/photos/6322587/pexels-photo-6322587.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bg: '#f9f6f2',
  },
  {
    title: 'Style That Lasts',
    text: 'Slow fashion pieces built to outlast trends and honor your rhythm.',
    image:
      'https://images.pexels.com/photos/6827187/pexels-photo-6827187.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bg: '#ece8e4',
  },
]

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={ref} className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="h-screen w-full sticky top-0 z-0"
          style={{ backgroundColor: slide.bg }}
        >
          <BrandSlide
            index={index}
            total={slides.length}
            scrollYProgress={scrollYProgress}
            {...slide}
          />
        </div>
      ))}
    </section>
  )
}
