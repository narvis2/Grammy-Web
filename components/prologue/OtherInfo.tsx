"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/common/animation/FadeIn";

const Market = [
  { name: "참맛 대게 전문점", image: "/images/food1.jpg" },
  { name: "다마 수산", image: "/images/food2.jpg" },
  { name: "태흥 수산", image: "/images/food3.jpg" },
  { name: "정여사 밥이랑 회랑", image: "/images/food4.jpg" },
  { name: "텃밥 보리밥", image: "/images/food5.jpg" },
];

const JapaneseStreet = {
  restaurants: [
    { name: "할머니 본가", image: "/images/food6.jpg" },
    { name: "구룡포 구판장", image: "/images/food7.jpg" },
    { name: "김가네 솥떡", image: "/images/food8.jpg" },
    { name: "이까대또", image: "/images/food9.jpg" },
  ],
  cafes: [
    { name: "구룡포애 오소", image: "/images/cafe1.jpg" },
    { name: "동백을 지나서", image: "/images/cafe2.jpg" },
    { name: "까멜리아", image: "/images/cafe3.jpg" },
    { name: "여든 여덟밤", image: "/images/cafe4.jpg" },
    { name: "구룡포 호랑이 바나나 글라세", image: "/images/cafe5.jpg" },
  ],
  experiences: [{ name: "후루사또야", image: "/images/experience.jpg" }],
};

type PlaceCardProps = {
  name: string;
  image: string;
};

const PlaceCard = ({ name, image }: PlaceCardProps) => (
  <div className="group overflow-hidden rounded-sm bg-white">
    <div className="relative aspect-[4/3] overflow-hidden img-zoom">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="p-4 text-center">
      <p className="text-sm text-charcoal font-light tracking-wide">{name}</p>
    </div>
  </div>
);

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

const Dialog = ({ isOpen, onClose, children, title }: DialogProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative bg-cream rounded-sm p-8 sm:p-12 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-body-text hover:text-charcoal transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="font-display text-2xl sm:text-3xl text-charcoal tracking-wide text-center mb-2">
            {title}
          </h3>
          <div className="section-divider mt-3 mb-10" />
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const OtherInfo = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-widest-2xl text-brand uppercase font-body mb-3">
          Nearby Attractions
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-charcoal tracking-wide">
          주변 관광지
        </h2>
        <div className="section-divider mt-5" />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* 구룡포 시장 */}
        <FadeIn direction="left">
          <div className="group relative overflow-hidden rounded-sm cursor-pointer" onClick={() => setActiveDialog("구룡포시장")}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/guryongpo.jpeg"
                alt="구룡포 시장"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-2">
                구룡포 시장
              </h3>
              <p className="text-white/80 text-sm font-light leading-relaxed mb-4 max-w-md">
                다양한 해산물을 활용한 요리를 즉석에서 즐길 수 있는 전통 시장
              </p>
              <span className="inline-block text-xs tracking-widest-xl text-white/90 uppercase border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-300">
                자세히 보기
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 일본인 가옥 거리 */}
        <FadeIn direction="right" delay={0.1}>
          <div className="group relative overflow-hidden rounded-sm cursor-pointer" onClick={() => setActiveDialog("일본인 가옥 거리")}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/japanstreet.jpeg"
                alt="일본인 가옥 거리"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mb-2">
                일본인 가옥 거리
              </h3>
              <p className="text-white/80 text-sm font-light leading-relaxed mb-4 max-w-md">
                일본 식민지 시대의 건축물이 보존된 거리, 맛집과 카페, 문화 체험
              </p>
              <span className="inline-block text-xs tracking-widest-xl text-white/90 uppercase border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-300">
                자세히 보기
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 구룡포 시장 Dialog */}
      <Dialog
        isOpen={activeDialog === "구룡포시장"}
        onClose={() => setActiveDialog(null)}
        title="추천 맛집"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Market.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>
      </Dialog>

      {/* 일본인 가옥 거리 Dialog */}
      <Dialog
        isOpen={activeDialog === "일본인 가옥 거리"}
        onClose={() => setActiveDialog(null)}
        title="일본인 가옥 거리"
      >
        <div className="space-y-12">
          <div>
            <h4 className="text-center text-xs tracking-widest-xl uppercase text-brand font-body mb-6">
              추천 맛집
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {JapaneseStreet.restaurants.map((item, index) => (
                <PlaceCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="section-divider-gold" />

          <div>
            <h4 className="text-center text-xs tracking-widest-xl uppercase text-brand font-body mb-6">
              카페
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {JapaneseStreet.cafes.map((item, index) => (
                <PlaceCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="section-divider-gold" />

          <div>
            <h4 className="text-center text-xs tracking-widest-xl uppercase text-brand font-body mb-6">
              일본 전통 의상 체험
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {JapaneseStreet.experiences.map((item, index) => (
                <PlaceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default OtherInfo;
