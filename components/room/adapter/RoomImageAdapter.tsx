"use client";

import { RoomTypeImageModel } from "@/data/model/room";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type RoomImageAdapterProps = {
  roomTypeImages: RoomTypeImageModel[];
};

const RoomImageAdapter = ({ roomTypeImages }: RoomImageAdapterProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % roomTypeImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [roomTypeImages.length]);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 800);
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="slideshow-container relative">
      {/* Background Image with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={imageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={roomTypeImages[imageIndex].imageUrl}
            alt={`${roomTypeImages[imageIndex].roomType} 객실 이미지`}
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
          <motion.div
            className="w-px h-16 bg-white/50 mx-auto mb-8"
            initial={{ scaleY: 0 }}
            animate={showText ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xs sm:text-sm tracking-widest-2xl font-light mb-4 uppercase font-body">
            Grami Hotel · Rooms
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-6">
            {roomTypeImages[imageIndex].roomType}
          </h1>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {roomTypeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className={`rounded-full transition-all duration-500 ${
                  imageIndex === index
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
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="opacity-60">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1" />
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

export default RoomImageAdapter;
