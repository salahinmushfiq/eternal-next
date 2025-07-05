'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { removeFromCart, updateQuantity } from '@/features/cart/cartSlice';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-[#7f6d5f]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          <ShoppingBag size={28} />
          Your Cart
        </h1>
        <p className="text-[#6a5c51] text-sm mt-2">
          Review your selected items and proceed to checkout.
        </p>
      </div>

      {/* Empty Cart State */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-16">
          <ShoppingBag size={48} className="mx-auto text-[#d6ccc5] mb-4" />
          <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="inline-block bg-[#7f6d5f] hover:bg-[#6a5c51] text-white px-6 py-2 rounded-full transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-xl p-4 bg-[#fcfaf8] shadow-sm hover:shadow-md transition-all"
              >
                {/* Thumbnail */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <div className='w-full h-full'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />

                    </div>
                    
                  </div>
                  {/* Info */}
                  <div>
                    <h3 className="font-semibold text-md">{item.name}</h3>
                    <p className="text-sm text-[#6a5c51] capitalize">{item.category}</p>
                    <p className="text-sm text-[#b59f90]">৳{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                    }
                    disabled={item.quantity <= 1}
                    className="p-1 rounded-full bg-[#e9e4e0] hover:bg-[#ded7d1] transition disabled:opacity-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                    }
                    className="p-1 rounded-full bg-[#e9e4e0] hover:bg-[#ded7d1] transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-sm font-semibold text-[#b59f90] min-w-[80px] text-right">
                  ৳{item.price * item.quantity}
                </div>

                {/* Remove */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-[#b59f90] hover:text-red-500 transition"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="mt-12 border-t pt-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-lg font-semibold text-[#7f6d5f]">
                Total: <span className="text-[#b59f90]">৳{total}</span>
              </p>
              {/* <button className="px-6 py-2 rounded-full bg-[#7f6d5f] text-white hover:bg-[#6a5c51] transition">
                Proceed to Checkout
              </button> */}
              <Link
                href="/checkout"
                className="block w-full text-center bg-[#7f6d5f] text-white py-2 rounded-full hover:bg-[#6a5c51] transition"
              >
                Proceed to Checkout
              </Link>
            </div>

            {/* Continue shopping link */}
            <Link
              href="/"
              className="block mt-6 text-center text-sm text-[#7f6d5f] hover:text-[#b59f90] transition"
            >
              &larr; Continue browsing products
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
