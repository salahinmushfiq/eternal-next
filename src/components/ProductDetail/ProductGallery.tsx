'use client';

import React, { useState } from 'react';
// import ImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Lightbox from 'yet-another-react-lightbox';
// import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import Image from "next/image";

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

  return (
    <div className="w-full space-y-4 animate-fadeIn">
      {/* Main Image */}
      <div
        className="relative w-full border border-[#e9e4e0] rounded-2xl overflow-hidden shadow-md cursor-zoom-in hover:shadow-lg transition-all"
        onClick={() => setOpen(true)}
      >
        {/* <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-[480px] object-cover transition-transform duration-300 hover:scale-105"
        /> */}
        <div className='relative w-full h-[480px] object-cover transition-transform duration-300 hover:scale-105'>
            <Image
            src={selectedImage}
            alt="Selected Product"
            fill
            className="object-cover"
          />
        </div>
        

        {/* Zoom Icon Overlay */}
        <div className="absolute top-3 right-3 bg-[#7f6d5f]/80 text-white p-2 rounded-full shadow-md backdrop-blur-sm">
          <ZoomIn size={18} />
        </div>
      </div>

      {/* Hint for mobile */}
      <div className="text-xs text-center text-gray-500 mt-1 md:hidden">
        Tap image to zoom
      </div>

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
              {/* <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              /> */}
              <div className='relative w-full h-full object-cover rounded-xl'>
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

      {/* Lightbox Viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Thumbnails]}
        animation={{ zoom: 0.5 }}
        styles={{
          container: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          },
        }}
      />
    </div>
  );
};

export default ProductGallery;