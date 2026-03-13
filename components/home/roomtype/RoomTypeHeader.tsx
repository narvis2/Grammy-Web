"use client";

import React from "react";
import FadeIn from "@/components/common/animation/FadeIn";

type RoomTypeHeaderProps = {
  title: string;
  description: string;
};

const RoomTypeHeader = ({ title, description }: RoomTypeHeaderProps) => {
  return (
    <FadeIn className="flex items-center justify-center mb-12">
      <div className="text-center">
        <p className="text-xs tracking-widest-2xl uppercase text-gold mb-4 font-body">
          Rooms
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal tracking-wide mb-4">
          {title}
        </h2>
        <div className="section-divider-gold mb-4" />
        <p className="text-sm text-body-text font-light tracking-wider">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default React.memo(RoomTypeHeader);
