import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/Product"; // 🔁 Shared reusable type

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8 col-span-full">
        No products available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2}/>
      ))}
    </div>
  );
};

export default ProductGrid;
