"use client";

import React from "react";
import FadeIn from "@/components/common/animation/FadeIn";

type WayToComeHeaderProps = {
  title: string;
  description: string;
};

const WayToComeHeader = ({ title, description }: WayToComeHeaderProps) => {
  return (
    <FadeIn className="text-center mb-12">
      <p className="text-xs tracking-widest-2xl uppercase text-stay-400 mb-4 font-body font-serif italic">
        Location
      </p>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-stay-950 tracking-wide mb-4">
        {title}
      </h2>
      <div className="section-divider mb-4" />
      <p className="text-sm text-stay-600 font-light tracking-wider">
        {description}
      </p>
    </FadeIn>
  );
};

export default React.memo(WayToComeHeader);
