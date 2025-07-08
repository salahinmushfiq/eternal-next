'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductGalleryProps {
  image: string;
  additionalImages?: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  image,
  additionalImages = [],
}) => {
  const images = [image, ...additionalImages];
  const [selectedImage, setSelectedImage] = useState(image);
  const [open, setOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="w-full space-y-4 animate-fadeIn">
      {/* Main Image */}
      <div
        className="relative w-full border border-[#e9e4e0] rounded-2xl overflow-hidden shadow-md cursor-zoom-in hover:shadow-lg transition-all"
        onClick={() => setOpen(true)}
      >
        <motion.div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          animate={{ scale: isZoomed ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden"
        >
          <Image
            src={selectedImage}
            alt="Product preview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Zoom Icon */}
        <div className="absolute top-3 right-3 bg-[#7f6d5f]/80 text-white p-2 rounded-full shadow-md backdrop-blur-sm">
          <ZoomIn size={18} />
        </div>
      </div>

      {/* Hint */}
      <p className="text-xs text-center text-gray-500 md:hidden">
        Tap image to zoom
      </p>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`h-20 w-20 rounded-xl overflow-hidden border transition-all duration-200 ${
                selectedImage === img
                  ? 'border-[#7f6d5f] ring-2 ring-[#b59f90]'
                  : 'border-gray-200'
              }`}
            >
              <div className="relative w-full h-full object-cover rounded-xl">
                <Image
                  src={img}
                  alt={`Product image ${idx + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Thumbnails]}
        animation={{ zoom: 0.5 }}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
      />
    </div>
  );
};

export default ProductGallery;
