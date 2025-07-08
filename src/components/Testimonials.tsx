// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";
// // import Image from "next/image";

// const testimonials = [
//   {
//     name: "Farhana Islam",
//     role: "Regular Customer",
//     text: "Eternal’s clothes make me feel confident and classy. The fabrics are soft, and every piece feels unique.",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Nusrat Anwar",
//     role: "Fashion Blogger",
//     text: "I love how Eternal blends tradition with minimalism. Their collections are timeless.",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Tanvir Hasan",
//     role: "Frequent Shopper",
//     text: "The kids’ section is a lifesaver — great quality and comfort. Highly recommended!",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="about" className="bg-[#f4f1ed] py-16 px-4">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#7f6d5f] mb-10">
//           What Our Customers Say
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-xl shadow-md p-6 relative"
//             >
//               <Quote className="absolute top-4 right-4 text-[#e9e4e0]" size={32} />
//               <p className="text-[#6a5c51] italic mb-4">“{t.text}”</p>
//               <div className="flex items-center gap-4 mt-6">
//                 {/* <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 /> */}
//                 <div className="relative w-20 h-20 rounded-full">
//                   <img
//                     src="https://randomuser.me/api/portraits/women/65.jpg"
//                     alt="Testimonial"
//                     className="rounded-full w-16 h-16 object-cover"
//                   />
//                 </div>
              
//                 <div className="text-left">
//                   <h4 className="text-[#7f6d5f] font-semibold">{t.name}</h4>
//                   <p className="text-sm text-[#b59f90]">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Farhana Islam",
    role: "Regular Customer",
    rating: 5,
    text: "Eternal’s clothes make me feel confident and classy. The fabrics are soft, and every piece feels unique.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Nusrat Anwar",
    role: "Fashion Blogger",
    rating: 4,
    text: "I love how Eternal blends tradition with minimalism. Their collections are timeless.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Tanvir Hasan",
    role: "Frequent Shopper",
    rating: 5,
    text: "The kids’ section is a lifesaver — great quality and comfort. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="bg-[#f4f1ed] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7f6d5f] mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow duration-300"
              aria-label={`Testimonial from ${t.name}`}
            >
              <Quote
                className="absolute top-4 right-4 text-[#e9e4e0]"
                size={32}
                aria-hidden="true"
              />

              <p className="text-[#6a5c51] italic mb-4">“{t.text}”</p>

              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      fill={idx < t.rating ? "#facc15" : "none"}
                      stroke="#b59f90"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`Photo of ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized 
                    priority={i === 0} // prioritize loading first image
                  />
                </div>

                <div className="text-left">
                  <h4 className="text-[#7f6d5f] font-semibold">{t.name}</h4>
                  <p className="text-sm text-[#b59f90]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
