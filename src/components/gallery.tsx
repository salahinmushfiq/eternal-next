// components/Gallery.jsx
"use client";
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Modern casual wear',
  },
  {
    src: 'https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Man in coat outdoors',
  },
  {
    src: 'https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Bridal Wears',
  },
  {
    src: 'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Streetwear outfit',
  },
  {
    src: 'https://images.pexels.com/photos/4452386/pexels-photo-4452386.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Shoes and bag flatlay',
  },
  {
    src: 'https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Elegant fashion studio',
  },
];


const Gallery = () => (
  <section className="bg-[#f4f1ed] py-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold text-center text-[#7f6d5f] mb-10">
        Style Inspiration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-medium">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Gallery;
