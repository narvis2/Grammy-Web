import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/data/hooks/animation/useIntersectionObserver";

type CarouselHeaderProps = {
  title: string;
  description: string;
};

const CarouselHeader = ({ title, description }: CarouselHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="inner-con flex items-center justify-center"
    >
      <div className="text-center font-semibold font-serif text-4xl">
        <span>{title}</span>
        <h5 className="text-lg">{description}</h5>
      </div>
    </motion.div>
  );
};

export default React.memo(CarouselHeader);
