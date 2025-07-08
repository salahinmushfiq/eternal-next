'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { removeFromCart, updateQuantity } from '@/features/cart/cartSlice';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

const COUPON_CODE = 'ETERNAL10';
const COUPON_DISCOUNT_PERCENT = 10; // 10% off

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(amount);

const CartPage: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);
  const [showCouponMessage, setShowCouponMessage] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const discountAmount =
    appliedCoupon === COUPON_CODE ? (subtotal * COUPON_DISCOUNT_PERCENT) / 100 : 0;

  const total = subtotal - discountAmount;

  // Animate coupon message fade-in/out on message change
  useEffect(() => {
    if (couponMessage) {
      setShowCouponMessage(true);
      const timeout = setTimeout(() => setShowCouponMessage(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [couponMessage]);

  const handleApplyCoupon = () => {
    if (couponInput.trim().toUpperCase() === COUPON_CODE) {
      setAppliedCoupon(COUPON_CODE);
      setCouponMessage(`Coupon "${COUPON_CODE}" applied! You saved ${COUPON_DISCOUNT_PERCENT}%`);
    } else {
      setCouponMessage('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
    setCouponMessage(null);
    setShowCouponMessage(false);
  };

  return (
    <main className="bg-[#f4f1ed] min-h-screen pt-12 pb-24 px-6 text-[#7f6d5f]">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/product' },
            { label: 'Cart' },
          ]}
        />

        {/* Header */}
        <header className="mb-8 flex items-center gap-3">
          <ShoppingBag size={32} className="text-[#7f6d5f]" />
          <h1 className="text-4xl font-bold select-none">Your Cart</h1>
        </header>

        {cartItems.length === 0 ? (
          <section aria-label="Empty cart" className="text-center mt-20">
            <div className="mx-auto w-24 h-24 mb-6 text-[#d6ccc5]">
              <ShoppingBag size={96} />
            </div>
            <p className="text-xl text-gray-500 mb-6">Your cart is empty.</p>
            <Link
              href="/"
              className="inline-block bg-[#7f6d5f] hover:bg-[#6e5e52] text-white px-8 py-3 rounded-lg transition"
            >
              Continue Shopping
            </Link>
          </section>
        ) : (
          <>
            {/* Cart Items */}
            <section aria-label="Cart items" className="space-y-6 mb-12">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-row items-start gap-4 sm:gap-6 bg-white rounded-2xl p-4 shadow hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="relative w-20 h-[95px] rounded-xl overflow-hidden border border-[#e9e4e0] shadow-sm flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between w-full">
                    {/* Top Row: Info + Controls */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-3">
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-[#6a5c51] capitalize">{item.category}</p>
                        <p className="text-sm text-[#b59f90] font-semibold mt-1">{formatPrice(item.price)}</p>
                      </div>

                      {/* Quantity & Trash */}
                      <div className="flex items-center gap-3 sm:gap-4 mt-2 ">
                        
                        <button
                          onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                          }
                          disabled={item.quantity <= 1}
                          className="p-2 rounded-full bg-[#e9e4e0] hover:bg-[#ded7d1] transition disabled:opacity-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-base font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                          }
                          className="p-2 rounded-full bg-[#e9e4e0] hover:bg-[#ded7d1] transition"
                        >
                          <Plus size={16} />
                        </button>
                        {/* Trash Icon inline */}
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="ml-2 text-[#b59f90] hover:text-red-500 transition p-2 rounded-full"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Row: Subtotal */}
                    <div className="mt-4 sm:mt-2 text-sm sm:text-base text-[#b59f90] font-semibold">
                      Subtotal: {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Coupon Section */}
            <section aria-label="Coupon code" className="max-w-md mx-auto md:mx-0 mb-10">
              <label
                htmlFor="coupon"
                className="block mb-2 font-semibold text-[#7f6d5f]"
              >
                Apply Coupon{' '}
                <span className="text-sm font-normal text-gray-500">
                  (Try <code>{COUPON_CODE}</code>)
                </span>
              </label>
              <div className="flex gap-3">
                <input
                  id="coupon"
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  className="flex-grow border border-[#e9e4e0] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7f6d5f]"
                  disabled={!!appliedCoupon}
                  aria-describedby="coupon-message"
                />
                {appliedCoupon ? (
                  <button
                    onClick={handleRemoveCoupon}
                    className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={handleApplyCoupon}
                    disabled={!couponInput.trim()}
                    className={`px-5 py-2 bg-[#7f6d5f] hover:bg-[#6e5e52] text-white rounded transition ${
                      !couponInput.trim() ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Apply
                  </button>
                )}
              </div>
              <p
                id="coupon-message"
                className={`mt-2 text-sm font-medium transition-opacity duration-500 ${
                  showCouponMessage ? 'opacity-100' : 'opacity-0'
                } ${appliedCoupon ? 'text-green-600' : 'text-red-600'}`}
                role="alert"
              >
                {couponMessage || '\u00A0'}
              </p>
            </section>

            {/* Cart Summary */}
            <section
              aria-label="Cart summary"
              className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#ded7d1] pt-8"
            >
              <div className="flex flex-col justify-between items-start gap-4 w-full my-auto sm:w-auto">
                <p className="text-base sm:text-lg font-semibold text-[#7f6d5f]">
                  Subtotal: <span>{formatPrice(subtotal)}</span>
                </p>
                {appliedCoupon && (
                  <p className="text-base sm:text-lg text-[#b59f90] font-semibold">
                    Discount ({COUPON_CODE}): -{formatPrice(discountAmount)}
                  </p>
                )}
                <p className="text-lg sm:text-xl font-bold text-[#7f6d5f]">
                  Total ({cartItems.reduce((acc, cur) => acc + cur.quantity, 0)} items):{' '}
                  <span className="text-[#b59f90]">{formatPrice(total)}</span>
                </p>
                <p className="text-xs text-gray-500 italic">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  href="/product"
                  className="w-auto max-w-56 sm:w-auto px-6 py-3 rounded-full border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed] transition text-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout"
                  className="w-auto max-w-56 sm:w-auto px-6 py-3 rounded-full bg-[#7f6d5f] text-white hover:bg-[#6e5e52] transition text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </section>

          </>
        )}
      </div>
    </main>
  );
};

export default CartPage;
