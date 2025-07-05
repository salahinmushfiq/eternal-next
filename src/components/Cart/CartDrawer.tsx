'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { removeFromCart } from '@/features/cart/cartSlice';
import { Trash2, X } from 'lucide-react';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-[#f4f1ed] z-50 shadow-lg flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#e9e4e0]">
              <h2 className="text-lg font-semibold text-[#7f6d5f]">Your Cart</h2>
              <button onClick={onClose} aria-label="Close cart">
                <X className="text-[#7f6d5f]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm text-[#6a5c51]">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-3 border-[#e9e4e0]"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[#7f6d5f]">{item.name}</h4>
                      <p className="text-xs text-[#6a5c51]">Qty: {item.quantity}</p>
                      <p className="text-xs text-[#b59f90]">৳{item.price * item.quantity}</p>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                          <Trash2 size={18} className="text-red-400" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#e9e4e0]">
              <p className="text-sm font-semibold text-[#7f6d5f] mb-2">
                Total: ৳{total.toFixed(2)}
              </p>

              {/* View Cart Button */}
              <Link
                href="/cart"
                onClick={onClose}
                className="block w-full text-center bg-[#7f6d5f] text-white py-2 rounded-full hover:bg-[#6a5c51] transition"
              >
                View Full Cart
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
