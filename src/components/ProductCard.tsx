'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority }) => {
  const displayPrice = Math.round(product.price * (1 - (product.discount || 0) / 100));

  return (
    <Link href={`/product/${product.id}`} aria-label={`View details for ${product.name}`}>
      <div className="group relative bg-white border border-[#e9e4e0] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out">
        
        {/* Offer / Discount Badge */}
        {product.offer && (
          <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold rounded-full bg-[#7f6d5f] text-white shadow-md">
            {product.offer}
          </div>
        )}

        {/* Product Image */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            className="object-cover transform group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-2">
          <h3 className="text-[#7f6d5f] font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-[#6a5c51] capitalize">{product.category}</p>

          {/* Price */}
          <div className="flex items-center gap-2">
            <p className="text-md font-semibold text-[#b59f90]">৳{displayPrice}</p>
            {product.discount && (
              <p className="text-sm line-through text-[#a0897b]">৳{product.price}</p>
            )}
          </div>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 bg-[#f4f1ed]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div
            className="flex items-center gap-2 bg-[#7f6d5f] text-white text-sm px-5 py-2 rounded-full shadow hover:bg-[#6a5c51] transition"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
