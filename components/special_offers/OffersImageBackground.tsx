"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type OffersImageBackgroundProps = {
  name: string;
  image: string;
  description?: string;
};

const OffersImageBackground = ({
  image,
  description,
  name,
}: OffersImageBackgroundProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3] md:aspect-auto md:h-[600px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={image}
            fill
            className="object-cover"
            alt={name}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      </AnimatePresence>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-center text-white">
        <h3 className="font-display text-2xl sm:text-3xl tracking-wide mb-2">
          {name}
        </h3>
        {!!description && (
          <p className="text-sm sm:text-base font-light opacity-90 max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default OffersImageBackground;
