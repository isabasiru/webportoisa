import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "/gallery/31F54226-9BBF-4975-BC6C-40C29444AEDC.jpg",
    "/gallery/DSC00700.jpeg",
    "/gallery/DSC01838.jpeg",
    "/gallery/DSC03086.jpeg",
    "/gallery/IMG_5894.jpg",
    "/gallery/IMG_6830.PNG"
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Photo <span className="text-neon-blue">Gallery</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group`}
            >
              <img 
                src={src} 
                alt={`Gallery photo ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold tracking-widest uppercase border-b-2 border-neon-blue pb-1">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
