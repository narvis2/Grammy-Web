"use client";

import React from "react";
import { CarouselImageModel } from "@/data/model/image/types";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="slideshow-container relative bg-stay-950">
      {/* Background Images — 모든 이미지를 동시에 렌더링, opacity + Ken Burns 효과 */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
            }}
          >
            <Image
              src={image.src}
              alt={`그라미호텔 - ${image.label}`}
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
            Grami Hotel · Pohang Guryongpo
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-light tracking-wide mb-6">
            {images[currentImageIndex].label}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-light tracking-wider font-body opacity-80">
            일상에서 지친 몸과 마음을 달래기 위한 최적의 선택
          </p>

          {/* Mobile Dots */}
          <div className="lg:hidden flex items-center justify-center gap-3 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onIndicatorClick(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentImageIndex === index
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 lg:bottom-auto flex flex-col items-center text-white/60"
          initial={{ opacity: 0 }}
          animate={showText ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-[10px] tracking-widest-2xl uppercase font-body mb-3 lg:hidden">
            Scroll
          </span>
          <div className="scroll-indicator lg:hidden">
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

      {/* Desktop Slider Navigation — 하단 그라데이션 위에 배치 */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] hidden lg:block bg-gradient-to-t from-black/60 to-transparent pt-32 pb-12 xl:pb-16">
        <div className="max-w-[1600px] mx-auto px-4 xl:px-12 flex items-center justify-between">
          {/* Prev Button */}
          <button
            onClick={() =>
              onIndicatorClick(
                (currentImageIndex - 1 + images.length) % images.length
              )
            }
            className="w-10 h-10 xl:w-14 xl:h-14 shrink-0 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-stay-950 transition-all duration-300 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="xl:w-6 xl:h-6 transform group-hover:-translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Labels */}
          <div className="flex items-center justify-center flex-1 px-2 xl:px-12 overflow-hidden">
            {images.map((image, idx) => (
              <React.Fragment key={idx}>
                <button
                  onClick={() => onIndicatorClick(idx)}
                  className={`px-3 xl:px-8 py-3 xl:py-4 text-[10px] xl:text-[13px] tracking-[0.1em] xl:tracking-[0.15em] font-medium transition-all duration-500 text-center leading-relaxed relative shrink-0 ${
                    currentImageIndex === idx
                      ? "bg-white text-stay-950"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {image.label}
                </button>
                {idx < images.length - 1 && (
                  <div className="h-6 xl:h-8 w-[1px] bg-white/40 mx-2 xl:mx-4 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              onIndicatorClick((currentImageIndex + 1) % images.length)
            }
            className="w-10 h-10 xl:w-14 xl:h-14 shrink-0 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-stay-950 transition-all duration-300 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="xl:w-6 xl:h-6 transform group-hover:translate-x-0.5 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeImageBgContainer;
