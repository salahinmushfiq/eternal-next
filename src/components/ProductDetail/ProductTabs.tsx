'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Description', 'Features', 'Shipping'];
const tabContent: Record<string, string> = {
  Description: 'This product is crafted with care using premium materials. Designed for comfort and durability, perfect for daily wear.',
  Features: '✓ 100% Cotton\n✓ Breathable Fabric\n✓ Machine Washable\n✓ Available in Multiple Sizes',
  Shipping: 'Free shipping on orders over ৳2000. Standard delivery in 3–5 business days. Express options available at checkout.',
};

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="mt-12">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-[#e9e4e0] pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm font-medium pb-1 ${
              activeTab === tab
                ? 'text-[#7f6d5f] border-b-2 border-[#7f6d5f]'
                : 'text-[#b59f90] hover:text-[#7f6d5f]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-[#6a5c51] whitespace-pre-line"
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductTabs;
