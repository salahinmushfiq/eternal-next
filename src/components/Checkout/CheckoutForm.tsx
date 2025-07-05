// src/components/Checkout/CheckoutForm.tsx
'use client';

import React, { useState } from 'react';

const CheckoutForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Mock checkout submitted!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-[#e9e4e0] space-y-5 animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-[#7f6d5f] mb-2">Billing & Shipping</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
        />
      </div>

      <input
        type="text"
        name="address"
        placeholder="Street Address"
        value={form.address}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
      />

      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={form.postalCode}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-[#b59f90]"
      />

      <button
        type="submit"
        className="w-full bg-[#7f6d5f] text-white py-2 px-4 rounded-md hover:bg-[#6a5c51] transition"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
