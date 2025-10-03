"use client";

import { useState, useEffect } from 'react';

// Image carousel component
export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Sample images - replace with your actual images
  const images = [
    {
      src: '/formatura.jpg',
      alt: 'Graduation ceremony'
    },
    {
      src: '/me.jpg',
      alt: 'Casual portrait'
    },
    {
      src: '/ey.jpg',
      alt: 'Team collaboration'
    },
    {
      src: '/coding.jpg',
      alt: 'Coding session'
    }
  ];

  // Auto rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
      {/* Image area */}
      <div className="relative w-full h-full">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage 
                ? 'bg-purple-400 w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded text-xs text-white">
        {currentImage + 1} / {images.length}
      </div>
    </div>
  );
}