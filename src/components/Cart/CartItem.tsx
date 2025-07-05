// components/Cart/CartItem.tsx
'use client';

import React from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { incrementQty, decrementQty, removeFromCart } from '@/features/cart/cartSlice';
import { Product } from '@/types/Product';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface Props {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-4 border-b pb-4 mb-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <div className="font-semibold text-[#7f6d5f]">{item.name}</div>
        <div className="text-sm text-gray-500">{item.subLabel}</div>
        <div className="flex items-center mt-2 space-x-2 ">
          <button  className="text-gray-500 gray" onClick={() => dispatch(decrementQty(item.id))}>
            <Minus className="text-gray-500 gray" color='black' size={16} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQty(item.id))}>
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="text-sm font-medium text-[#7f6d5f]">৳ {item.price * item.quantity}</div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          <Trash2 size={18} className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
