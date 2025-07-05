// src/app/checkout/page.tsx
'use client';

import React from 'react';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import OrderSummary from '@/components/Checkout/OrderSummary';

const CheckoutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 text-[#7f6d5f]">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
