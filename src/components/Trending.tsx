"use client";

import React, { useState, useEffect } from "react";
import ProductData from "../data/ProductData";
import ProductCard from "./ProductCard";
import { Product } from "../types/Product"; // ✅ Shared type

const genders = ["men", "women", "kids"];
const categories = ["shirts", "pants", "shoes", "others"];

const Trending: React.FC = () => {
  const [selectedGenders, setSelectedGenders] = useState<string[]>(["all"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  const toggleSelection = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ): void => {
    if (list.includes("all")) {
      setList([item]);
    } else if (list.includes(item)) {
      const updated = list.filter((i) => i !== item);
      setList(updated.length ? updated : ["all"]);
    } else {
      setList([...list, item]);
    }
  };

  useEffect(() => {
    const filtered = ProductData.filter((product: Product) => {
      const matchGender =
        selectedGenders.includes("all") ||
        selectedGenders.includes(product.gender.toLowerCase());

      const matchCategory =
        selectedCategories.includes("all") ||
        selectedCategories.includes(product.category.toLowerCase());

      return matchGender && matchCategory;
    });

    setVisibleProducts([]);
    const timeout = setTimeout(() => {
      setVisibleProducts(filtered);
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedGenders, selectedCategories]);

  return (
    <section id="products" className="py-12 px-4 bg-[#f4f1ed]">
      <h1 className="text-3xl font-semibold text-center text-[#7f6d5f] mb-6">
        Trending
      </h1>

      {/* Gender Filter */}
      <ul className="flex justify-center gap-4 flex-wrap mb-4">
        {["all", ...genders].map((gender) => (
          <li
            key={gender}
            onClick={() => toggleSelection(gender, selectedGenders, setSelectedGenders)}
            className={`cursor-pointer px-4 py-2 border rounded-md transition duration-300 transform hover:scale-105 ${
              selectedGenders.includes(gender)
                ? "bg-[#7f6d5f] text-white"
                : "bg-white text-[#7f6d5f] border-[#7f6d5f]"
            }`}
          >
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </li>
        ))}
      </ul>

      {/* Category Filter */}
      <ul className="flex justify-center gap-4 flex-wrap mb-8">
        {["all", ...categories].map((cat) => (
          <li
            key={cat}
            onClick={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
            className={`cursor-pointer px-4 py-2 border rounded-md transition duration-300 transform hover:scale-105 ${
              selectedCategories.includes(cat)
                ? "bg-[#b59f90] text-white"
                : "bg-white text-[#7f6d5f] border-[#b59f90]"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto transition-opacity duration-500 ease-in-out">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div key={product.id} className="opacity-0 animate-fadeIn">
            
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Trending;
