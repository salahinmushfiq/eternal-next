// src/components/Checkout/OrderSummary.tsx
'use client';

import React from 'react';
import { useAppSelector } from '@/lib/hooks';

const OrderSummary: React.FC = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e9e4e0] space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-bold text-[#7f6d5f] mb-2">Order Summary</h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span className="font-semibold">৳{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="border-t border-gray-200 pt-4 mt-4 text-right">
        <p className="text-md font-semibold text-[#7f6d5f]">
          Total: <span className="text-[#b59f90]">৳{total}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
