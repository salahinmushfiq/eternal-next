# Eternal Next — React E-Commerce Template

*A modern, futuristic React e-commerce template built with Next.js, Tailwind CSS, and Redux Toolkit.*

---

## 🚀 Overview

Eternal Next is a sleek, responsive e-commerce template designed for clothing and lifestyle brands. It features:

- Product listing with dynamic filtering (by category, brand, gender)
- Product detail pages with add-to-cart functionality
- Fully functional cart and checkout pages
- Mobile-friendly responsive design with hamburger navigation
- Built with Next.js, React 19, Tailwind CSS, and Redux Toolkit
- Clean, modular components suitable for extension or integration with any backend API

---

## 🎯 Features

- **Product Catalog:** Filter by gender, category, and brand  
- **Dynamic Routing:** Product detail pages use dynamic URLs (`/product/[id]`)  
- **Cart System:** Add, remove, and update items with live badge updates  
- **Checkout Form:** Simple checkout flow with form validation placeholders  
- **Mobile Navigation:** Responsive navbar with hamburger menu and cart badge  
- **Tailwind CSS:** Utility-first styling with responsive support and custom animations  
- **Redux Toolkit + Persist:** State management for cart with persistent storage  
- **Performance:** Lightweight, fast-loading SPA  

---

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/salahinmushfiq/eternal-next.git
cd eternal-next
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open your browser at:

arduino
Copy code
http://localhost:3000
🛠️ Customization
Tailwind CSS
Tailwind is pre-configured with JIT mode for optimal build size.

To customize colors, fonts, or breakpoints, edit tailwind.config.js:

js
Copy code
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
Use Tailwind utility classes throughout components to style layouts, typography, and responsiveness.

Product Data
Product information is stored in src/data/ProductData.ts

Modify or extend this file to update products, categories, brands, images, and prices.

Data-driven UI allows easy integration with any backend or CMS in the future.

📁 Project Structure
bash
Copy code
src/
├── app/
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── product/page.tsx
│   └── product/[id]/page.tsx
├── assets/               # Images, icons, logos
├── components/           # Reusable UI components
│   ├── Cart/
│   ├── Checkout/
│   ├── ProductDetail/
│   └── ui/button.tsx
├── data/                 # Static product data
├── features/cart/        # Redux slice and types
├── lib/                  # Hooks, store setup, utils
└── types/                # TypeScript types (e.g., Product)
📦 Build for Production
bash
Copy code
npm run build
# or
yarn build
Generates a .next folder with optimized assets for deployment.

Compatible with Netlify, Vercel, or any Node.js hosting environment.

🤝 Contribution
Contributions and suggestions are welcome! Please open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgments
Next.js

React

Tailwind CSS

Redux Toolkit

Framer Motion

Inspired by futuristic design trends and clean UI principles

📞 Contact
Email: salahinmushfiq@gmail.com
Website: https://ngsoftworks.netlify.app/
GitHub: https://github.com/salahinmushfiq
