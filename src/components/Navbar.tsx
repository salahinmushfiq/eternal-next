// 'use client';

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ShoppingBag } from "lucide-react";
// import CartDrawer from "@/components/Cart/CartDrawer";
// import { useAppSelector } from "@/lib/hooks";
// import { RootState } from "@/lib/store";
// import { Home, Tag, Phone } from 'lucide-react'; // ⬅️ Add at top

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showCart, setShowCart] = useState(false);

//   const cartItems = useAppSelector((state: RootState) => state.cart.items);
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <nav className="bg-[#f4f1ed] shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
//         <div className="flex justify-between items-center max-w-screen-xl mx-auto">
//           {/* Left: Desktop Links */}
//           <div className="space-x-6 hidden md:flex">
//             <a href="#hero" className="text-[#7f6d5f] hover:text-[#b59f90] transition">Home</a>
//             <a href="#products" className="text-[#7f6d5f] hover:text-[#b59f90] transition">Products</a>
//             <a href="#contact" className="text-[#7f6d5f] hover:text-[#b59f90] transition">Contact</a>
//           </div>

//           {/* Right (Desktop): Cart + Menu */}
//           <div className="hidden md:flex items-center gap-4">
//             {/* Cart */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowCart(true)}
//                 className="text-[#7f6d5f] hover:text-[#b59f90] transition"
//                 aria-label="View cart"
//               >
//                 <ShoppingBag size={22} />
//               </button>
//               {cartCount > 0 && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   exit={{ scale: 0 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="absolute -top-1 -right-1 bg-[#b59f90] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow"
//                 >
//                   {cartCount}
//                 </motion.span>
//               )}
//             </div>
//           </div>

//           {/* Mobile: Cart on Left, Menu on Right */}
//           <div className="flex justify-between items-center w-full md:hidden">
//             {/* Cart */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowCart(true)}
//                 className="text-[#7f6d5f] hover:text-[#b59f90] transition"
//                 aria-label="View cart"
//               >
//                 <ShoppingBag size={22} />
//               </button>
//               {cartCount > 0 && (
//                 <motion.span
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   exit={{ scale: 0 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className="absolute -top-1 -right-1 bg-[#b59f90] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow"
//                 >
//                   {cartCount}
//                 </motion.span>
//               )}
//             </div>

//             {/* Hamburger */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//               className="focus:outline-none"
//             >
//               <motion.div
//                 animate={{ rotate: isOpen ? 90 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {isOpen ? <X className="text-[#7f6d5f]" /> : <Menu className="text-[#7f6d5f]" />}
//               </motion.div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               key="mobile-menu"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="md:hidden bg-[#f4f1ed]/90 backdrop-blur-md px-6 pb-4 overflow-hidden  rounded-b-lg"
//             >
//             <motion.div
//               key="mobile-menu"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="md:hidden bg-[#f4f1ed]/90 backdrop-blur-md px-6 pb-4 pt-2 overflow-hidden rounded-b-lg"
//             >
//               {[
//                 { label: "Home", href: "#hero", icon: <Home size={18} /> },
//                 { label: "Products", href: "#products", icon: <Tag size={18} /> },
//                 { label: "Contact", href: "#contact", icon: <Phone size={18} /> },
//               ].map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center gap-3 py-3 text-[#7f6d5f] hover:text-[#b59f90] border-b last:border-none border-[#e9e4e0] text-base font-medium transition-all"
//                 >
//                   {link.icon}
//                   {link.label}
//                 </a>
//               ))}
//             </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Slide-in Cart Drawer */}
//       <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
//     </>
//   );
// };

// export default Navbar;



'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Home, Tag, Phone } from "lucide-react";
import CartDrawer from "@/components/Cart/CartDrawer";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#f4f1ed] shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo or empty div for spacing */}
          <div className="flex items-center space-x-4">
            {/* Mobile: Cart icon on left */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShowCart(true)}
                className="relative text-[#7f6d5f] hover:text-[#b59f90] transition"
                aria-label="View cart"
              >
                <ShoppingBag size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b59f90] text-white text-xs px-1.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-[#7f6d5f] font-medium text-sm">
            {/* <Link href="/" className="hover:text-[#b59f90] transition">Home</Link>
            <Link href="/#products" className="hover:text-[#b59f90] transition">Products</Link>
            <Link href="/#contact" className="hover:text-[#b59f90] transition">Contact</Link> */}
                <ul className="hidden md:flex gap-6 font-medium text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#b59f90] transition focus:outline-none focus-visible:ring-2 ring-[#b59f90] rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#b59f90] transition focus:outline-none focus-visible:ring-2 ring-[#b59f90] rounded"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#b59f90] transition focus:outline-none focus-visible:ring-2 ring-[#b59f90] rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#b59f90] transition focus:outline-none focus-visible:ring-2 ring-[#b59f90] rounded"
                >
                  Contact
                </Link>
              </li>
                </ul>
          </div>

          {/* Right Side: Cart (Desktop) + Hamburger */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Cart Icon (Desktop) */}
            <button
              onClick={() => setShowCart(true)}
              className="hidden md:block relative text-[#7f6d5f] hover:text-[#b59f90] transition"
              aria-label="View cart"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#b59f90] text-white text-xs px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden focus:outline-none"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="text-[#7f6d5f]" /> : <Menu className="text-[#7f6d5f]" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-[#f4f1ed]/90 backdrop-blur-md px-6 pb-4 overflow-hidden rounded-b-lg"
            >
               {[
                { label: "Home", href: "#hero", icon: <Home size={18} /> },
                { label: "Products", href: "#products", icon: <Tag size={18} /> },
                { label: "Contact", href: "#contact", icon: <Phone size={18} /> },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  area-
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-3 text-[#7f6d5f] hover:text-[#b59f90]
                   border-b last:border-none border-[#e9e4e0] text-base font-medium transition-all
                   focus:outline-none focus-visible:ring-2"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              {/* <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#7f6d5f] hover:text-[#b59f90] transition"
              >
                Home
              </Link>
              <Link
                href="/#products"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#7f6d5f] hover:text-[#b59f90] transition"
              >
                Products
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#7f6d5f] hover:text-[#b59f90] transition"
              >
                Contact
              </Link> */}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Slide-in Cart Drawer */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Navbar;
