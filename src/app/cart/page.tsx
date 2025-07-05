// app/cart/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { removeFromCart, updateQuantity } from '@/features/cart/cartSlice';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from "next/image";

const CartPage: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-[#f4f1ed] min-h-screen text-[#7f6d5f]">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
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
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-sm"
              >
                {/* Image & Info */}
                <div className="flex items-center gap-4">
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded object-cover border"
                  /> */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded object-cover border"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-[#6a5c51] capitalize">{item.category}</p>
                    <p className="text-sm mt-1">৳{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                    }
                    disabled={item.quantity <= 1}
                    className="p-1 rounded-full border text-sm hover:bg-[#f4f1ed]"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                    }
                    className="p-1 rounded-full border text-sm hover:bg-[#f4f1ed]"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Subtotal + Remove */}
                <div className="text-right">
                  <p className="font-semibold">৳{item.price * item.quantity}</p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg font-semibold text-[#7f6d5f]">
              Total: <span className="text-[#b59f90]">৳{total}</span>
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="/"
                className="px-6 py-2 rounded-full border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed] transition"
              >
                Continue Shopping
              </Link>
             <Link
                href="/checkout"
                className="px-6 py-2 rounded-full border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed] transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
