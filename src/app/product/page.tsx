// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import ProductData from "@/data/ProductData";
// import ProductCard from "@/components/ProductCard";
// import { Product } from "@/types/Product";
// import { Search, X } from "lucide-react";

// const genders = ["men", "women", "kids"];
// const categories = ["shirts", "pants", "shoes", "others"];

// const sortOptions = [
//   { label: "Newest", value: "newest" },
//   { label: "Price: Low to High", value: "asc" },
//   { label: "Price: High to Low", value: "desc" },
// ];

// const Products: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [sort, setSort] = useState("newest");

//   const toggleItem = (
//     item: string,
//     list: string[],
//     setList: React.Dispatch<React.SetStateAction<string[]>>
//   ) => {
//     setList(
//       list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
//     );
//   };

//   const clearFilters = () => {
//     setSelectedGenders([]);
//     setSelectedCategories([]);
//     setSearchQuery("");
//   };

//   const filteredProducts = useMemo(() => {
//     let result = ProductData;

//     // Filter by gender
//     if (selectedGenders.length) {
//       result = result.filter((p) =>
//         selectedGenders.includes(p.gender.toLowerCase())
//       );
//     }

//     // Filter by category
//     if (selectedCategories.length) {
//       result = result.filter((p) =>
//         selectedCategories.includes(p.category.toLowerCase())
//       );
//     }

//     // Search
//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase();
//       result = result.filter(
//         (p) =>
//           p.name.toLowerCase().includes(q) ||
//           p.category.toLowerCase().includes(q)
//       );
//     }

//     // Sort
//     if (sort === "asc") result.sort((a, b) => a.price - b.price);
//     else if (sort === "desc") result.sort((a, b) => b.price - a.price);

//     return result;
//   }, [selectedGenders, selectedCategories, searchQuery, sort]);

//   return (
//     <section className="bg-[#f4f1ed] px-4 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-[#7f6d5f] text-center mb-10">Explore Our Collection</h1>

//         {/* Search & Sort Row */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           {/* Search */}
//           <div className="relative w-full md:w-1/2">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search products..."
//               className="w-full py-2 px-10 rounded-md border border-[#b59f90] bg-white focus:outline-none focus:ring-2 focus:ring-[#7f6d5f] text-[#3d3a36]"
//             />
//             {searchQuery && (
//               <X
//                 size={20}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#7f6d5f]"
//                 onClick={() => setSearchQuery("")}
//               />
//             )}
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7f6d5f]" size={18} />
//           </div>

//           {/* Sort */}
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="py-2 px-4 border border-[#b59f90] rounded-md bg-white text-[#7f6d5f]"
//           >
//             {sortOptions.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-4 justify-center md:justify-between mb-6">
//           <div className="flex flex-wrap gap-3">
//             {genders.map((gender) => (
//               <button
//                 key={gender}
//                 onClick={() => toggleItem(gender, selectedGenders, setSelectedGenders)}
//                 className={`px-4 py-2 rounded-full text-sm border ${
//                   selectedGenders.includes(gender)
//                     ? "bg-[#7f6d5f] text-white border-[#7f6d5f]"
//                     : "bg-white text-[#7f6d5f] border-[#b59f90]"
//                 }`}
//               >
//                 {gender}
//               </button>
//             ))}
//           </div>

//           <div className="flex flex-wrap gap-3">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
//                 className={`px-4 py-2 rounded-full text-sm border ${
//                   selectedCategories.includes(cat)
//                     ? "bg-[#b59f90] text-white border-[#b59f90]"
//                     : "bg-white text-[#7f6d5f] border-[#b59f90]"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Clear Filters */}
//         {(selectedCategories.length > 0 || selectedGenders.length > 0 || searchQuery) && (
//           <div className="text-center mb-6">
//             <button
//               onClick={clearFilters}
//               className="text-sm text-[#7f6d5f] underline hover:text-[#6a5c51] transition"
//             >
//               Clear all filters
//             </button>
//           </div>
//         )}

//         {/* Result Count */}
//         <p className="text-center text-[#7f6d5f] mb-6">
//           Showing {filteredProducts.length} product{filteredProducts.length !== 1 && "s"}
//         </p>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500">
//               No products found. Try changing filters or searching again.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


// 'use client'

// import React, { useState, useEffect } from "react";
// import ProductData from "@/data/ProductData";
// import ProductCard from "@/components/ProductCard";
// import { Product } from "@/types/Product";
// import { Search, X } from "lucide-react";

// const genders = ["all", "men", "women", "kids"];
// const categories = ["all", "shirts", "pants", "shoes", "others"];

// const sortOptions = [
//   { label: "Newest", value: "newest" },
//   { label: "Price: Low to High", value: "asc" },
//   { label: "Price: High to Low", value: "desc" },
// ];

// const ProductCardSkeleton = () => (
//   <div className="p-4 border border-[#e9e4e0] rounded-xl shadow-sm bg-white animate-pulse">
//     <div className="h-40 mb-4 bg-gray-300 rounded skeleton" />
//     <div className="h-5 w-3/4 mb-2 bg-gray-300 rounded skeleton" />
//     <div className="h-4 w-1/2 mb-1 bg-gray-300 rounded skeleton" />
//     <div className="h-6 w-1/3 bg-gray-300 rounded skeleton" />
//   </div>
// );

// const FilterBadge: React.FC<{ onRemove: () => void; children: React.ReactNode; bgColor: string }> = ({
//   onRemove,
//   children,
//   bgColor,
// }) => {
//   const [visible, setVisible] = React.useState(false);
//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <span
//       onClick={onRemove}
//       className={`${bgColor} text-white text-sm px-3 py-1 rounded-full cursor-pointer select-none
//         inline-flex items-center gap-1
//         transition-transform duration-250 ease-in-out
//         ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
//     >
//       {children} <span className="font-bold select-none">×</span>
//     </span>
//   );
// };

// const Products: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedGenders, setSelectedGenders] = useState<string[]>(["all"]);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
//   const [sort, setSort] = useState("newest");

//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   const toggleItem = (
//     item: string,
//     list: string[],
//     setList: React.Dispatch<React.SetStateAction<string[]>>
//   ) => {
//     if (item === "all") {
//       setList(["all"]);
//       return;
//     }

//     if (list.includes("all")) {
//       setList([item]);
//       return;
//     }

//     if (list.includes(item)) {
//       const filtered = list.filter((i) => i !== item);
//       setList(filtered.length > 0 ? filtered : ["all"]);
//     } else {
//       setList([...list, item]);
//     }
//   };

//   const clearFilters = () => {
//     setSelectedGenders(["all"]);
//     setSelectedCategories(["all"]);
//     setSearchQuery("");
//   };

//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       let result = ProductData;

//       if (!selectedGenders.includes("all")) {
//         result = result.filter((p) =>
//           selectedGenders.includes(p.gender.toLowerCase())
//         );
//       }

//       if (!selectedCategories.includes("all")) {
//         result = result.filter((p) =>
//           selectedCategories.includes(p.category.toLowerCase())
//         );
//       }

//       if (searchQuery.trim()) {
//         const q = searchQuery.toLowerCase();
//         result = result.filter(
//           (p) =>
//             p.name.toLowerCase().includes(q) ||
//             p.category.toLowerCase().includes(q)
//         );
//       }

//       if (sort === "asc") {
//         result = [...result].sort((a, b) => a.price - b.price);
//       } else if (sort === "desc") {
//         result = [...result].sort((a, b) => b.price - a.price);
//       }

//       setFilteredProducts(result);
//       setLoading(false);
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [selectedGenders, selectedCategories, searchQuery, sort]);

//   return (
//     <section className="bg-[#f4f1ed] px-4 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-[#7f6d5f] text-center mb-10">
//           Explore Our Collection
//         </h1>

//         {/* Search & Sort Row */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           {/* Search */}
//           <div className="relative w-full md:w-1/2">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search products..."
//               className="w-full py-2 px-10 rounded-md border border-[#b59f90] bg-white focus:outline-none focus:ring-2 focus:ring-[#7f6d5f] text-[#3d3a36]"
//             />
//             {searchQuery && (
//               <X
//                 size={20}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#7f6d5f]"
//                 onClick={() => setSearchQuery("")}
//               />
//             )}
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7f6d5f]"
//               size={18}
//             />
//           </div>

//           {/* Sort */}
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="py-2 px-4 border border-[#b59f90] rounded-md bg-white text-[#7f6d5f]"
//           >
//             {sortOptions.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-4 justify-center md:justify-between mb-6">
//           <div className="flex flex-wrap gap-3">
//             {genders
//               .filter((g) => g !== "all")
//               .map((gender) => (
//                 <button
//                   key={gender}
//                   onClick={() => toggleItem(gender, selectedGenders, setSelectedGenders)}
//                   className={`px-4 py-2 rounded-full text-sm border ${
//                     selectedGenders.includes(gender)
//                       ? "bg-[#7f6d5f] text-white border-[#7f6d5f]"
//                       : "bg-white text-[#7f6d5f] border-[#b59f90]"
//                   }`}
//                 >
//                   {gender}
//                 </button>
//               ))}
//           </div>

//           <div className="flex flex-wrap gap-3">
//             {categories
//               .filter((c) => c !== "all")
//               .map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() =>
//                     toggleItem(cat, selectedCategories, setSelectedCategories)
//                   }
//                   className={`px-4 py-2 rounded-full text-sm border ${
//                     selectedCategories.includes(cat)
//                       ? "bg-[#b59f90] text-white border-[#b59f90]"
//                       : "bg-white text-[#7f6d5f] border-[#b59f90]"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//           </div>
//         </div>

//         {/* Clear Filters as Badges */}
//         {(selectedCategories.length > 0 && !selectedCategories.includes("all")) ||
//         (selectedGenders.length > 0 && !selectedGenders.includes("all")) ||
//         searchQuery ? (
//           <div className="text-center mb-6">
//             <button
//               onClick={clearFilters}
//               className="inline-block px-4 py-1 rounded-full bg-[#7f6d5f] text-white text-sm font-semibold hover:bg-[#6a5c51] transition"
//             >
//               Clear All Filters ×
//             </button>
//           </div>
//         ) : null}

//         {/* Active Filter Badges */}
//         {(selectedGenders.length > 0 && !selectedGenders.includes("all")) ||
//         (selectedCategories.length > 0 && !selectedCategories.includes("all")) ? (
//           <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-6xl mx-auto">
//             {selectedGenders
//               .filter((g) => g !== "all")
//               .map((gender) => (
//                 <FilterBadge
//                   key={`active-gender-${gender}`}
//                   bgColor="bg-[#7f6d5f]"
//                   onRemove={() =>
//                     setSelectedGenders((prev) => prev.filter((g) => g !== gender))
//                   }
//                 >
//                   {gender}
//                 </FilterBadge>
//               ))}

//             {selectedCategories
//               .filter((c) => c !== "all")
//               .map((cat) => (
//                 <FilterBadge
//                   key={`active-cat-${cat}`}
//                   bgColor="bg-[#b59f90]"
//                   onRemove={() =>
//                     setSelectedCategories((prev) => prev.filter((c) => c !== cat))
//                   }
//                 >
//                   {cat}
//                 </FilterBadge>
//               ))}
//           </div>
//         ) : null}

//         {/* Result Count */}
//         <p className="text-center text-[#7f6d5f] mb-6">
//           Showing {filteredProducts.length} product
//           {filteredProducts.length !== 1 && "s"}
//         </p>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {loading
//             ? Array(8)
//                 .fill(0)
//                 .map((_, i) => <ProductCardSkeleton key={i} />)
//             : filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))
//               ) : (
//                 <p className="col-span-full text-center text-gray-500">
//                   No products found. Try changing filters or searching again.
//                 </p>
//               )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import ProductData from '@/data/ProductData';
// import ProductCard from '@/components/ProductCard';
// import { Product } from '@/types/Product';
// import { Search, X } from 'lucide-react';

// const genders = ['all', 'men', 'women', 'kids'];
// const categories = ['all', 'shirts', 'pants', 'shoes', 'others'];

// const sortOptions = [
//   { label: 'Newest', value: 'newest' },
//   { label: 'Price: Low to High', value: 'asc' },
//   { label: 'Price: High to Low', value: 'desc' },
// ];

// const ProductCardSkeleton = () => (
//   <div
//     role="status"
//     className="p-4 border border-[#e9e4e0] rounded-xl shadow-sm bg-white animate-pulse"
//   >
//     <div className="h-40 mb-4 bg-gray-300 rounded" />
//     <div className="h-5 w-3/4 mb-2 bg-gray-300 rounded" />
//     <div className="h-4 w-1/2 mb-1 bg-gray-300 rounded" />
//     <div className="h-6 w-1/3 bg-gray-300 rounded" />
//   </div>
// );

// const FilterBadge: React.FC<{
//   onRemove: () => void;
//   children: React.ReactNode;
//   bgColor: string;
// }> = ({ onRemove, children, bgColor }) => {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     setVisible(true);
//   }, []);
//   return (
//     <button
//       onClick={onRemove}
//       className={`${bgColor} text-white text-sm px-3 py-1 rounded-full cursor-pointer select-none inline-flex items-center gap-1 transition-transform duration-250 ease-in-out ${
//         visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
//       }`}
//     >
//       {children} <span className="font-bold select-none">×</span>
//     </button>
//   );
// };

// const Products: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [debouncedSearch, setDebouncedSearch] = useState('');
//   const [selectedGenders, setSelectedGenders] = useState<string[]>(['all']);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
//   const [sort, setSort] = useState('newest');
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [filtersOpen, setFiltersOpen] = useState(false);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedSearch(searchQuery.trim());
//     }, 300);
//     return () => clearTimeout(handler);
//   }, [searchQuery]);

//   const toggleItem = (
//     item: string,
//     list: string[],
//     setList: React.Dispatch<React.SetStateAction<string[]>>
//   ) => {
//     if (item === 'all') return setList(['all']);
//     if (list.includes('all')) return setList([item]);
//     if (list.includes(item)) {
//       const filtered = list.filter((i) => i !== item);
//       return setList(filtered.length > 0 ? filtered : ['all']);
//     }
//     setList([...list, item]);
//   };

//   const clearFilters = () => {
//     setSelectedGenders(['all']);
//     setSelectedCategories(['all']);
//     setSearchQuery('');
//   };

//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       let result = ProductData;

//       if (!selectedGenders.includes('all')) {
//         result = result.filter((p) => selectedGenders.includes(p.gender.toLowerCase()));
//       }
//       if (!selectedCategories.includes('all')) {
//         result = result.filter((p) => selectedCategories.includes(p.category.toLowerCase()));
//       }
//       if (debouncedSearch) {
//         const q = debouncedSearch.toLowerCase();
//         result = result.filter(
//           (p) =>
//             p.name.toLowerCase().includes(q) ||
//             p.category.toLowerCase().includes(q)
//         );
//       }

//       if (sort === 'asc') result = [...result].sort((a, b) => a.price - b.price);
//       else if (sort === 'desc') result = [...result].sort((a, b) => b.price - a.price);

//       setFilteredProducts(result);
//       setLoading(false);
//     }, 200);

//     return () => clearTimeout(timeout);
//   }, [selectedGenders, selectedCategories, debouncedSearch, sort]);

//   return (
//     <section className="bg-[#f4f1ed] px-4 py-12">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-[#7f6d5f] text-center mb-10">
//           Explore Our Collection
//         </h1>

//         {/* Search & Sort */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           <div className="relative w-full md:w-1/2">
//             <input
//               type="search"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search products..."
//               className="w-full py-2 px-10 rounded-md border border-[#b59f90] bg-white focus:outline-none focus:ring-2 focus:ring-[#7f6d5f] text-[#3d3a36]"
//             />
//             {searchQuery && (
//               <X
//                 size={20}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#7f6d5f]"
//                 onClick={() => setSearchQuery('')}
//               />
//             )}
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7f6d5f]"
//               size={18}
//               aria-hidden="true"
//             />
//           </div>
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="py-2 px-4 border border-[#b59f90] rounded-md bg-white text-[#7f6d5f]"
//           >
//             {sortOptions.map((opt) => (
//               <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Mobile Filter Toggle */}
//         <div className="md:hidden mb-6 text-center">
//           <button
//             onClick={() => setFiltersOpen(!filtersOpen)}
//             className="px-4 py-2 rounded-md bg-[#7f6d5f] text-white font-semibold"
//           >
//             {filtersOpen ? 'Hide Filters' : 'Show Filters'}
//           </button>
//         </div>

//         {/* Filter Buttons */}
//         <div
//           className={`flex flex-wrap gap-4 justify-center md:justify-between mb-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//             filtersOpen ? 'max-h-96' : 'max-h-0 md:max-h-full'
//           }`}
//         >
//           <div className="flex flex-wrap gap-3">
//             {genders
//               .filter((g) => g !== 'all')
//               .map((gender) => (
//                 <button
//                   key={gender}
//                   onClick={() => toggleItem(gender, selectedGenders, setSelectedGenders)}
//                   className={`px-4 py-2 rounded-full text-sm border ${
//                     selectedGenders.includes(gender)
//                       ? 'bg-[#7f6d5f] text-white border-[#7f6d5f]'
//                       : 'bg-white text-[#7f6d5f] border-[#b59f90]'
//                   }`}
//                 >
//                   {gender}
//                 </button>
//               ))}
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {categories
//               .filter((c) => c !== 'all')
//               .map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
//                   className={`px-4 py-2 rounded-full text-sm border ${
//                     selectedCategories.includes(cat)
//                       ? 'bg-[#b59f90] text-white border-[#b59f90]'
//                       : 'bg-white text-[#7f6d5f] border-[#b59f90]'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//           </div>
//         </div>

//         {/* Filter Badges */}
//         {(selectedGenders.some((g) => g !== 'all') ||
//           selectedCategories.some((c) => c !== 'all')) && (
//           <div className="flex flex-wrap gap-2 justify-center mb-6">
//             {selectedGenders
//               .filter((g) => g !== 'all')
//               .map((gender) => (
//                 <FilterBadge
//                   key={`gender-${gender}`}
//                   bgColor="bg-[#7f6d5f]"
//                   onRemove={() =>
//                     setSelectedGenders((prev) => prev.filter((g) => g !== gender))
//                   }
//                 >
//                   {gender}
//                 </FilterBadge>
//               ))}
//             {selectedCategories
//               .filter((c) => c !== 'all')
//               .map((cat) => (
//                 <FilterBadge
//                   key={`category-${cat}`}
//                   bgColor="bg-[#b59f90]"
//                   onRemove={() =>
//                     setSelectedCategories((prev) => prev.filter((c) => c !== cat))
//                   }
//                 >
//                   {cat}
//                 </FilterBadge>
//               ))}
//           </div>
//         )}

//         {/* Clear Filters */}
//         {(selectedCategories.length > 0 && !selectedCategories.includes('all')) ||
//         (selectedGenders.length > 0 && !selectedGenders.includes('all')) ||
//         searchQuery ? (
//           <div className="text-center mb-6">
//             <button
//               onClick={clearFilters}
//               className="inline-block px-4 py-1 rounded-full bg-[#7f6d5f] text-white text-sm font-semibold hover:bg-[#6a5c51] transition"
//             >
//               Clear All Filters ×
//             </button>
//           </div>
//         ) : null}

//         {/* Result Count */}
//         <p className="text-center text-[#7f6d5f] mb-6">
//           Showing {filteredProducts.length} product
//           {filteredProducts.length !== 1 && 's'}
//         </p>

//         {/* Product Grid */}
//         <div
//           className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out ${
//             loading ? 'opacity-50 pointer-events-none' : 'opacity-100'
//           }`}
//         >
//           {loading
//             ? Array(8)
//                 .fill(0)
//                 .map((_, i) => <ProductCardSkeleton key={i} />)
//             : filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))
//               ) : (
//                 <p className="col-span-full text-center text-gray-500">
//                   No products found. Try changing filters or searching again.
//                 </p>
//               )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

'use client';

import React, { useState, useEffect } from 'react';
import ProductData from '@/data/ProductData';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/Product';
import { Search, X, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const genders = ['all', 'men', 'women', 'kids'];
const categories = ['all', 'shirts', 'pants', 'shoes', 'others'];

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'asc' },
  { label: 'Price: High to Low', value: 'desc' },
];

const PAGE_SIZE = 8;

const ProductCardSkeleton = () => (
  <div className="p-4 border border-[#e9e4e0] rounded-xl shadow-sm bg-white animate-pulse">
    <div className="h-40 mb-4 bg-gray-300 rounded" />
    <div className="h-5 w-3/4 mb-2 bg-gray-300 rounded" />
    <div className="h-4 w-1/2 mb-1 bg-gray-300 rounded" />
    <div className="h-6 w-1/3 bg-gray-300 rounded" />
  </div>
);

const FilterBadge: React.FC<{
  onRemove: () => void;
  children: React.ReactNode;
  bgColor: string;
}> = ({ onRemove, children, bgColor }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);
  return (
    <button
      onClick={onRemove}
      className={`${bgColor} text-white text-sm px-3 py-1 rounded-full cursor-pointer select-none inline-flex items-center gap-1 transition-transform duration-250 ease-in-out ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
    >
      {children} <span className="font-bold select-none">×</span>
    </button>
  );
};

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedGenders, setSelectedGenders] = useState<string[]>(['all']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [sort, setSort] = useState('newest');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchQuery.trim()), 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const toggleItem = (
    item: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (item === 'all') return setList(['all']);
    if (list.includes('all')) return setList([item]);
    if (list.includes(item)) {
      const filtered = list.filter((i) => i !== item);
      return setList(filtered.length > 0 ? filtered : ['all']);
    }
    setList([...list, item]);
  };

  const clearFilters = () => {
    setSelectedGenders(['all']);
    setSelectedCategories(['all']);
    setSearchQuery('');
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      let result = ProductData;

      if (!selectedGenders.includes('all')) {
        result = result.filter((p) => selectedGenders.includes(p.gender.toLowerCase()));
      }

      if (!selectedCategories.includes('all')) {
        result = result.filter((p) => selectedCategories.includes(p.category.toLowerCase()));
      }

      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
      }

      if (sort === 'asc') result = [...result].sort((a, b) => a.price - b.price);
      else if (sort === 'desc') result = [...result].sort((a, b) => b.price - a.price);

      setFilteredProducts(result);
      setVisibleCount(PAGE_SIZE); // reset pagination
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [selectedGenders, selectedCategories, debouncedSearch, sort]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const hasMore = visibleCount < filteredProducts.length;

  return (

    <section className="bg-[#f4f1ed] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        {/* <nav className="text-sm text-[#7f6d5f] mb-4 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <ChevronRight size={16} />
          <span className="text-[#3d3a36] font-medium">Products</span>
        </nav> */}
        <Breadcrumbs
        items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/product" },
        ]}
        />

        <h1 className="text-4xl font-bold text-[#7f6d5f] text-center mb-10">
          Explore Our Collection
        </h1>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-1/2">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full py-2 px-10 rounded-md border border-[#b59f90] bg-white focus:outline-none focus:ring-2 focus:ring-[#7f6d5f] text-[#3d3a36]"
            />
            {searchQuery && (
              <X
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#7f6d5f]"
                onClick={() => setSearchQuery('')}
              />
            )}
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7f6d5f]"
              size={18}
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="py-2 px-4 border border-[#b59f90] rounded-md bg-white text-[#7f6d5f]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filters Toggle (Mobile) */}
        <div className="md:hidden mb-6 text-center">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="px-4 py-2 rounded-md bg-[#7f6d5f] text-white font-semibold"
          >
            {filtersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap gap-4 justify-center md:justify-between mb-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            filtersOpen ? 'max-h-96' : 'max-h-0 md:max-h-full'
          }`}
        >
          <div className="flex flex-wrap gap-3">
            {genders
              .filter((g) => g !== 'all')
              .map((gender) => (
                <button
                  key={gender}
                  onClick={() => toggleItem(gender, selectedGenders, setSelectedGenders)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedGenders.includes(gender)
                      ? 'bg-[#7f6d5f] text-white border-[#7f6d5f]'
                      : 'bg-white text-[#7f6d5f] border-[#b59f90]'
                  }`}
                >
                  {gender}
                </button>
              ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c !== 'all')
              .map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedCategories.includes(cat)
                      ? 'bg-[#b59f90] text-white border-[#b59f90]'
                      : 'bg-white text-[#7f6d5f] border-[#b59f90]'
                  }`}
                >
                  {cat}
                </button>
              ))}
          </div>
        </div>

        {/* Filter Badges */}
        {(selectedGenders.some((g) => g !== 'all') ||
          selectedCategories.some((c) => c !== 'all')) && (
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {selectedGenders
              .filter((g) => g !== 'all')
              .map((gender) => (
                <FilterBadge
                  key={`gender-${gender}`}
                  bgColor="bg-[#7f6d5f]"
                  onRemove={() =>
                    setSelectedGenders((prev) => prev.filter((g) => g !== gender))
                  }
                >
                  {gender}
                </FilterBadge>
              ))}
            {selectedCategories
              .filter((c) => c !== 'all')
              .map((cat) => (
                <FilterBadge
                  key={`category-${cat}`}
                  bgColor="bg-[#b59f90]"
                  onRemove={() =>
                    setSelectedCategories((prev) => prev.filter((c) => c !== cat))
                  }
                >
                  {cat}
                </FilterBadge>
              ))}
          </div>
        )}

        {/* Clear Filters */}
        {(selectedGenders.length > 0 && !selectedGenders.includes('all')) ||
        (selectedCategories.length > 0 && !selectedCategories.includes('all')) ||
        searchQuery ? (
          <div className="text-center mb-6">
            <button
              onClick={clearFilters}
              className="inline-block px-4 py-1 rounded-full bg-[#7f6d5f] text-white text-sm font-semibold hover:bg-[#6a5c51] transition"
            >
              Clear All Filters ×
            </button>
          </div>
        ) : null}

        {/* Result Count */}
        <p className="text-center text-[#7f6d5f] mb-6">
          Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length}{' '}
          product{filteredProducts.length !== 1 && 's'}
        </p>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out ${
            loading ? 'opacity-50 pointer-events-none' : 'opacity-100'
          }`}
        >
          {loading
            ? Array(PAGE_SIZE)
                .fill(0)
                .map((_, i) => <ProductCardSkeleton key={i} />)
            : filteredProducts.length > 0 ? (
                filteredProducts
                  .slice(0, visibleCount)
                  .map((product) => <ProductCard key={product.id} product={product} />)
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No products found. Try changing filters or searching again.
                </p>
              )}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-[#7f6d5f] text-white rounded-md hover:bg-[#6a5c51] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

