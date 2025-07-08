'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/features/cart/cartSlice';
import { Button } from '@/components/ui/button';
import ProductGallery from './ProductGallery';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import { toast } from 'sonner';
import ProductData from '@/data/ProductData';
import Breadcrumbs from '../Breadcrumbs';
import Reviews from './Reviews';
import { RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const reviews = [
    {
      id: 1,
      user: "Alice Johnson",
      rating: 5,
      comment: "Excellent quality and fits perfectly! Highly recommend.",
      date: "2024-05-12T14:23:00Z",
    },
    {
      id: 2,
      user: "Bob Smith",
      rating: 4,
      comment: "Very comfortable but the color was slightly different than expected.",
      date: "2024-06-01T09:15:00Z",
    },
    {
      id: 3,
      user: "Charlie Lee",
      rating: 3,
      comment: "Good value for the price, but the fabric could be softer.",
      date: "2024-04-20T17:45:00Z",
    },
    {
      id: 4,
      user: "Diana Prince",
      rating: 5,
      comment: "Love it! The design is beautiful and delivery was quick.",
      date: "2024-07-03T11:30:00Z",
    },
    {
      id: 5,
      user: "Ethan Wright",
      rating: 2,
      comment: "Not what I expected, sizing runs small.",
      date: "2024-06-15T13:10:00Z",
    },
  ];

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const relatedProducts = ProductData.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const totalPrice = Math.round(
    product.price * (1 - (product.discount || 0) / 100) * quantity
  );

  const handleAddToCart = () => {
    if (isAdding) return;
    setIsAdding(true);
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: ${quantity}`,
    });
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12 text-[#7f6d5f] bg-[#f4f1ed]">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/product' },
          { label: product.name },
        ]}
      />

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mt-6">
        <ProductGallery
          image={product.image}
          additionalImages={[
            'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
            'https://images.pexels.com/photos/6311587/pexels-photo-6311587.jpeg',
          ]}
        />

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {product.subLabel && (
              <p className="text-sm text-[#a39387] mt-1">{product.subLabel}</p>
            )}

            <div className="mt-2 flex items-center gap-2 text-sm">
              <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
              <span className="font-medium text-[#7f6d5f]">{averageRating}</span>
              <span className="text-[#a39387]">({reviews.length} reviews)</span>
            </div>

            <div className="mt-4">
              {product.discount ? (
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-[#7f6d5f]">
                    ৳{Math.round(product.price * (1 - product.discount / 100))}
                    <span className="ml-3 text-sm line-through text-[#b7a89c]">
                      ৳{product.price}
                    </span>
                  </p>
                  {product.offer && (
                    <span className="text-sm text-red-500 font-medium">
                      {product.offer}
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-2xl font-semibold">৳{product.price}</p>
              )}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label htmlFor="qty" className="text-sm font-medium">
                Quantity:
              </label>
              <input
                id="qty"
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 border border-[#d6ccc2] rounded px-2 py-1 text-center bg-white focus:outline-none focus:ring-1 focus:ring-[#b59f90]"
              />
            </div>

            <p className="text-sm text-[#6a5c51]">
              Total Price:{' '}
              <span className="font-semibold text-[#b59f90]">৳{totalPrice}</span>
            </p>

            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`bg-[#7f6d5f] hover:bg-[#6a5c51] text-white px-6 py-2 rounded-full shadow transition ${
                isAdding ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>

            <div className="mt-10 grid sm:grid-cols-1 gap-4 text-sm text-[#6a5c51]">
              <div className="flex items-center gap-2">
                <Truck className="text-[#7f6d5f]" size={18} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="text-[#7f6d5f]" size={18} />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#7f6d5f]" size={18} />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <ProductTabs />
      </div>

      <Reviews reviews={reviews} />

      <div className="mt-20">
        <RelatedProducts products={relatedProducts} />
      </div>

      {/* Sticky Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-[#f4f1ed] border-t border-[#ddd5cd] px-4 py-3 flex items-center justify-between z-40 shadow-lg md:hidden"
          >
            <div className="text-sm font-medium text-[#7f6d5f]">
              ৳{totalPrice} for {quantity} item{quantity > 1 ? 's' : ''}
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="bg-[#7f6d5f] text-white px-5 py-1.5 rounded-full"
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
