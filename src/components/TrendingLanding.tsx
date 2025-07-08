'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductData from '../data/ProductData';
import { Product } from '../types/Product';

const curatedProducts: Product[] = ProductData.slice(0, 6); // Display top 6 products

export default function TrendingLanding() {
  return (
    <section id="trending" className="py-24 px-6 bg-[#f4f1ed]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-semibold text-[#7f6d5f]">
          Explore Our Picks
        </h2>
        <p className="mt-4 text-[#6a5c51] text-lg">
          Curated essentials for your everyday style.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {curatedProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProductCard product={product} priority={idx === 0} />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/product"
          className="inline-block px-6 py-3 bg-[#7f6d5f] text-white rounded-full font-medium hover:bg-[#6a5c51] transition-shadow hover:shadow-md"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
