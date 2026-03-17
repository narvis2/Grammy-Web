"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type HeroImage = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  images: HeroImage[];
  subtitle: string;
  title: string;
  description?: string;
};

const PageHero = ({ images, subtitle, title, description }: PageHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slideshow-container relative bg-stay-950">
      {/* Background Images — Ken Burns 효과 */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              scale: currentIndex === index ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

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
            {subtitle}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base lg:text-lg font-light tracking-wider font-body opacity-80">
              {description}
            </p>
          )}

          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-500 ${
                    currentIndex === index
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
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
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHero;
