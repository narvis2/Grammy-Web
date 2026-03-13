"use client";

import { CarouselImageModel } from "@/data/model/image/types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type HomeImageBgContainerProps = {
  showText: boolean;
  currentImageIndex: number;
  images: CarouselImageModel[];
  onIndicatorClick: (index: number) => void;
};

const HomeImageBgContainer = ({
  showText,
  currentImageIndex,
  images,
  onIndicatorClick,
}: HomeImageBgContainerProps) => {
  return (
    <div className="slideshow-container relative">
      {/* Background Image with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={images[currentImageIndex].src}
            alt={`그라미호텔 - ${images[currentImageIndex].label}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="hero-overlay absolute inset-0 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Line */}
          <motion.div
            className="w-px h-16 bg-white/50 mx-auto mb-8"
            initial={{ scaleY: 0 }}
            animate={showText ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="text-xs sm:text-sm tracking-widest-2xl font-light mb-4 uppercase font-body">
            Grami Hotel · Pohang Guryongpo
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-6">
            {images[currentImageIndex].label}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-light tracking-wider font-body opacity-80">
            일상에서 지친 몸과 마음을 달래기 위한 최적의 선택
          </p>

          {/* Indicators */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-12">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onIndicatorClick(index)}
                className={`group relative px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-500 border ${
                  currentImageIndex === index
                    ? "bg-white text-charcoal border-white"
                    : "bg-transparent text-white/80 border-white/30 hover:border-white/60"
                }`}
              >
                {image.label}
              </button>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndicatorClick(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentImageIndex === index
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center text-white/60"
          initial={{ opacity: 0 }}
          animate={showText ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-[10px] tracking-widest-2xl uppercase font-body mb-3">
            Scroll
          </span>
          <div className="scroll-indicator">
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="opacity-60"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="white"
                strokeWidth="1"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="white"
                animate={{ cy: [8, 14, 8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeImageBgContainer;
