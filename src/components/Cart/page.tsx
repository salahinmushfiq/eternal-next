// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useAppSelector, useAppDispatch } from '@/lib/hooks';


// const VALID_COUPONS: Record<string, number> ={
//   ETERNAL10: 10, // 10% off
//   SUMMER15: 15, // 15% off
// };

// const CartPage: React.FC = () => {
//   const cartItems = useAppSelector((state) => state.cart.items);
//   // const dispatch = useAppDispatch();

//   const [couponCode, setCouponCode] = useState('');
//   const [discountPercent, setDiscountPercent] = useState(0);
//   const [couponError, setCouponError] = useState('');

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const discountAmount = (subtotal * discountPercent) / 100;
//   const total = subtotal - discountAmount;

//   const applyCoupon = () => {
//     const code = couponCode.trim().toUpperCase();
//     if (VALID_COUPONS[code]) {
//       setDiscountPercent(VALID_COUPONS[code]);
//       setCouponError('');
//     } else {
//       setDiscountPercent(0);
//       setCouponError('Invalid coupon code');
//     }
//   };

//   const removeCoupon = () => {
//     setCouponCode('');
//     setDiscountPercent(0);
//     setCouponError('');
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-16 bg-[#f4f1ed] min-h-screen text-[#7f6d5f]">
//       <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>
//           <Link href="/" className="inline-block bg-[#7f6d5f] hover:bg-[#6a5c51] text-white px-6 py-2 rounded-full transition">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <>
//           {/* Cart Items ... same as before */}

//           {/* Coupon Section */}
//           <div className="mt-8 max-w-md mx-auto bg-white rounded-lg p-4 shadow">
//             <label htmlFor="coupon" className="block mb-2 font-semibold text-[#7f6d5f]">
//               Have a coupon?
//             </label>
//             <div className="flex gap-2">
//               <input
//                 id="coupon"
//                 type="text"
//                 value={couponCode}
//                 onChange={(e) => setCouponCode(e.target.value)}
//                 placeholder="Enter coupon code"
//                 className="flex-1 border border-[#b59f90] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7f6d5f]"
//               />
//               <button
//                 onClick={applyCoupon}
//                 className="bg-[#7f6d5f] text-white px-4 rounded hover:bg-[#6a5c51] transition"
//               >
//                 Apply
//               </button>
//             </div>
//             {couponError && <p className="mt-2 text-red-600 text-sm">{couponError}</p>}
//             {discountPercent > 0 && (
//               <p className="mt-2 text-green-700 text-sm">
//                 Coupon applied! You saved {discountPercent}%.
//                 <button
//                   onClick={removeCoupon}
//                   className="ml-3 text-[#b59f90] underline hover:text-[#7f6d5f]"
//                 >
//                   Remove
//                 </button>
//               </p>
//             )}
//           </div>

//           {/* Cart Summary */}
//           <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="text-lg font-semibold text-[#7f6d5f]">
//               <p>Subtotal: ৳{subtotal}</p>
//               {discountPercent > 0 && <p>Discount: -৳{discountAmount.toFixed(2)}</p>}
//               <p className="mt-1 text-xl font-bold text-[#b59f90]">Total: ৳{total.toFixed(2)}</p>
//             </div>

//             <div className="flex gap-4 w-full sm:w-auto">
//               <Link
//                 href="/"
//                 className="flex-1 sm:flex-none px-6 py-2 rounded-full border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed] transition text-center"
//               >
//                 Continue Shopping
//               </Link>
//               <Link
//                 href="/checkout"
//                 className="flex-1 sm:flex-none px-6 py-2 rounded-full border border-[#7f6d5f] text-[#7f6d5f] hover:bg-[#f4f1ed] transition text-center"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
