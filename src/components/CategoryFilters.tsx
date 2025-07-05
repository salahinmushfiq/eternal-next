'use client';

import React from 'react';

type ProductItem = {
  id: string | number;
  gender: string;
  category: string;
};

type CategoryFiltersProps = {
  mainFilter: string;
  subFilter: string;
  setMainFilter: (value: string) => void;
  setSubFilter: (value: string) => void;
  productData: ProductItem[];
};

const mainCategories = ['all', 'men', 'women', 'kids'];
const subCategories = ['all', 'shirts', 'pants', 'shoes', 'others'];

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  mainFilter,
  subFilter,
  setMainFilter,
  setSubFilter,
  productData,
}) => {
  const getCount = (
    type: 'gender' | 'category',
    value: string
  ): number => {
    if (value === 'all') return productData.length;
    return productData.filter((item) => item[type] === value).length;
  };

  const renderPills = (
    list: string[],
    selected: string,
    setter: (value: string) => void,
    type: 'gender' | 'category'
  ) =>
    list.map((cat) => (
      <li
        key={cat}
        onClick={() => setter(cat)}
        className={`px-4 py-1 rounded-full border font-medium cursor-pointer uppercase text-sm transition 
        ${
          selected === cat
            ? 'bg-[#7f6d5f] text-white border-[#7f6d5f]'
            : 'bg-[#e9e4e0] text-[#7f6d5f] hover:bg-[#d8d1cb] border-[#d8d1cb]'
        }`}
      >
        {capitalize(cat)} ({getCount(type, cat)})
      </li>
    ));

  return (
    <>
      {/* Mobile Dropdowns */}
      <div className="md:hidden space-y-4 mb-6 text-center">
        <select
          value={mainFilter}
          onChange={(e) => setMainFilter(e.target.value)}
          className="w-60 p-2 border rounded text-[#7f6d5f] bg-[#f4f1ed]"
        >
          {mainCategories.map((cat) => (
            <option key={cat} value={cat}>
              {capitalize(cat)} ({getCount('gender', cat)})
            </option>
          ))}
        </select>

        <select
          value={subFilter}
          onChange={(e) => setSubFilter(e.target.value)}
          className="w-60 p-2 border rounded text-[#7f6d5f] bg-[#f4f1ed]"
        >
          {subCategories.map((cat) => (
            <option key={cat} value={cat}>
              {capitalize(cat)} ({getCount('category', cat)})
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Pills */}
      <ul className="hidden md:flex justify-center flex-wrap gap-3 mb-4">
        {renderPills(mainCategories, mainFilter, setMainFilter, 'gender')}
      </ul>
      <ul className="hidden md:flex justify-center flex-wrap gap-3 mb-6">
        {renderPills(subCategories, subFilter, setSubFilter, 'category')}
      </ul>
    </>
  );
};

export default CategoryFilters;
