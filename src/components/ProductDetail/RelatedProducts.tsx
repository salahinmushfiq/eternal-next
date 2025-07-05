'use client';

import React from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Product } from '@/types/Product';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold text-[#7f6d5f] mb-6 tracking-wide">
        You might also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-[#e9e4e0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Offer Badge */}
            {product.offer && (
              <div className="absolute top-2 left-2 bg-[#7f6d5f] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                {product.offer}
              </div>
            )}

            {/* Product Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-[#7f6d5f] font-semibold text-lg mb-1 truncate">{product.name}</h3>
              <p className="text-sm text-[#6a5c51] mb-1 capitalize">{product.category}</p>
              <p className="text-md font-semibold text-[#b59f90]">৳{product.price}</p>
            </div>

            {/* View Details CTA */}
            <div className="absolute inset-0 bg-[#f4f1ed]/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <Link
                href={`/product/${product.id}`}
                className="flex items-center gap-2 bg-[#7f6d5f] text-white text-sm px-5 py-2 rounded-full shadow hover:bg-[#6a5c51] transition"
              >
                <Eye size={16} />
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
