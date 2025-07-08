// src/app/checkout/page.tsx
'use client';

import React from 'react';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import OrderSummary from '@/components/Checkout/OrderSummary';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BaggageClaimIcon } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <main className="bg-[#f4f1ed] min-h-screen pt-12 pb-24 px-6 text-[#7f6d5f]">
      <div className="max-w-6xl mx-auto">
    
       <Breadcrumbs
        items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/product" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout"},
        ]}
        />

        {/* <h1 className="text-4xl font-bold text-[#7f6d5f] text-center mb-10">
          Explore Our Collection
        </h1> */}
        <header className="mb-8 flex items-center gap-3 text-[#7f6d5f]">
          <BaggageClaimIcon size={32} />
          <h1 className="text-4xl font-bold select-none">Checkout</h1>
        </header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <OrderSummary />
        <CheckoutForm />
        
      </div>
    
    </div>
    </main>
  );
};

export default CheckoutPage;
