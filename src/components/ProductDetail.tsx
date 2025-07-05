'use client';

import React, { useState } from 'react';
import { Product } from '@/types/Product';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/features/cart/cartSlice';
import { motion } from 'framer-motion';
import ProductData from '@/data/ProductData'; // For related items
import { toast } from 'sonner';
import Image from "next/image";


type Props = {
  product: Product;
};

const ProductDetail: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [isZoomed, setIsZoomed] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'features'>('description');

const handleAddToCart = () => {
  console.log(handleAddToCart);  
  dispatch(
    addToCart({
      ...product,
      quantity,
    })
  );
  console.log(handleAddToCart);  
  toast.success(`${product.name} added to cart`, {
    description: `Quantity: ${quantity}`,
  });
};

  const relatedProducts = ProductData.filter(
    (item) =>
      item.category === product.category &&
      item.gender === product.gender &&
      item.id !== product.id
  ).slice(0, 4);

  return (
    <section className="bg-[#f4f1ed] py-10 px-4 min-h-screen text-[#7f6d5f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Image with Zoom */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-110' : 'scale-100'}`}
          />
          
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {product.subLabel && <p className="text-lg text-[#b59f90]">{product.subLabel}</p>}

          <div className="text-xl space-x-4">
            {product.discount ? (
              <>
                <span className="text-[#7f6d5f] font-semibold">
                  ৳{Math.floor(product.price * (1 - product.discount / 100))}
                </span>
                <span className="line-through text-gray-400">৳{product.price}</span>
                <span className="bg-[#b59f90] text-white px-2 py-0.5 text-sm rounded">{product.offer}</span>
              </>
            ) : (
              <span className="font-semibold">৳{product.price}</span>
            )}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
              className="w-16 px-2 py-1 border rounded text-center"
              min={1}
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-[#7f6d5f] text-white py-2 px-6 rounded-lg hover:bg-[#6e5e52] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-12 border-t pt-6">
        <div className="flex gap-6 mb-4">
          <button
            onClick={() => setActiveTab('description')}
            className={`uppercase tracking-wide font-semibold ${
              activeTab === 'description' ? 'text-[#7f6d5f]' : 'text-gray-400'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`uppercase tracking-wide font-semibold ${
              activeTab === 'features' ? 'text-[#7f6d5f]' : 'text-gray-400'
            }`}
          >
            Features
          </button>
        </div>
        <div className="text-sm text-gray-700">
          {activeTab === 'description' ? (
            <p>
              Discover the timeless elegance of this piece. Crafted with precision and comfort in mind,
              it blends classic style with modern utility. Perfect for any occasion.
            </p>
          ) : (
            <ul className="list-disc pl-5">
              <li>Breathable fabric</li>
              <li>Tailored fit</li>
              <li>Available in multiple sizes</li>
              <li>Easy to wash and care</li>
            </ul>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-3">
              {/* <img src={item.image} alt={item.name} className="rounded mb-3" /> */}
              <Image
                  src={item.image}
                  alt={item.name}
                  // width={200}
                  // height={200}
                  className="rounded mb-3 object-cover"
                />
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-[#b59f90]">{item.subLabel}</p>
              <p className="text-sm mt-1">৳{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
