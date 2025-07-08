'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types/Product';
import ProductCard from '../ProductCard';

interface Props {
  products: Product[];
}

const RelatedProducts: React.FC<Props> = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#7f6d5f] text-center mb-8">
        You Might Also Like
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RelatedProducts;
