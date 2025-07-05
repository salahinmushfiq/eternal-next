// components/Products.jsx
"use client";
import { motion } from 'framer-motion';

const Products = () => (
  <section id="products" className="bg-[#f4f1ed] py-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold text-center text-[#7f6d5f] mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={`https://images.pexels.com/photos/158053${i}/pexels-photo-158053${i}.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=600`}
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Product {i}</h3>
              <p className="text-sm text-[#6a5c51]">Artisan Craft</p>
              <div className="mt-2 text-[#b59f90]">$29.99</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Products;