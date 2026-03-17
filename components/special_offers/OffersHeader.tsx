"use client";

import FadeIn from "@/components/common/animation/FadeIn";

type OffersHeaderProps = {
  title: string;
};

const OffersHeader = ({ title }: OffersHeaderProps) => {
  return (
    <FadeIn className="text-center mb-10 sm:mb-16">
      <p className="text-xs tracking-widest-2xl text-stay-400 uppercase font-body font-serif italic mb-3">
        Grami Hotel
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-stay-950 tracking-wide">
        {title}
      </h2>
      <div className="section-divider mt-5" />
    </FadeIn>
  );
};

export default OffersHeader;
