'use client';

import React, { useState } from 'react';
import { Product } from '@/types/Product';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/features/cart/cartSlice';
import { Button } from '@/components/ui/button';
import ProductGallery from './ProductGallery';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import { toast } from 'sonner';
import ProductData from '@/data/ProductData';

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = ProductData.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const totalPrice = Math.round(
    (product.price * (1 - (product.discount || 0) / 100)) * quantity
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: ${quantity}`,
    });
  };
 
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-[#7f6d5f] bg-[#f4f1ed]">
      {/* Product Top Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* <ProductGallery image={product.image} /> */}
            <ProductGallery
            image={product.image}
            additionalImages={[
                'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
                'https://images.pexels.com/photos/6311587/pexels-photo-6311587.jpeg'
            ]}
            />
        <div className="space-y-6">
          {/* Title & Price */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            {product.subLabel && (
              <p className="text-sm text-[#a39387] mt-1">{product.subLabel}</p>
            )}

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
              <label className="text-sm font-medium">Quantity:</label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 border border-[#d6ccc2] rounded px-2 py-1 text-center bg-white focus:outline-none focus:ring-1 focus:ring-[#b59f90]"
              />
            </div>

            <div className="text-sm text-[#6a5c51]">
              Total Price:{' '}
              <span className="font-semibold text-[#b59f90]">৳{totalPrice}</span>
            </div>

            <Button
              onClick={handleAddToCart}
              className="bg-[#7f6d5f] hover:bg-[#6a5c51] text-white px-6 py-2 rounded-full shadow transition"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <ProductTabs />
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
