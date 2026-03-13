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
      <p className="text-xs tracking-widest-2xl uppercase text-brand mb-4 font-body">
        Location
      </p>
      <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal tracking-wide mb-4">
        {title}
      </h2>
      <div className="section-divider mb-4" />
      <p className="text-sm text-body-text font-light tracking-wider">
        {description}
      </p>
    </FadeIn>
  );
};

export default React.memo(WayToComeHeader);
