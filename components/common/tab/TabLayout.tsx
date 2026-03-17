"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type TabLayoutProps = {
  title: string;
  tabList: string[];
  currentTab: string;
  href?: string;
  onTabClick: (type: string) => void;
};

const TabLayout = ({
  title,
  href,
  tabList,
  currentTab,
  onTabClick,
}: TabLayoutProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const idx = tabList.indexOf(currentTab);
    if (idx >= 0) setActiveIndex(idx);
  }, [currentTab, tabList]);

  // 활성 탭이 보이도록 스크롤
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.children[activeIndex] as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIndex]);

  return (
    <div className="bg-stay-50 border-b border-stay-300/40 sticky top-20 z-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        {/* Title */}
        <div className="pt-10 pb-6 text-center">
          <a href={href} className="inline-block">
            <h2 className="font-display text-3xl sm:text-4xl tracking-widest-xl text-stay-950 uppercase">
              {title}
            </h2>
          </a>
          <div className="section-divider mt-4" />
        </div>

        {/* Tabs */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-1 sm:gap-2 pb-0 justify-start sm:justify-center scrollbar-hide"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {tabList.map((item) => {
            const isFocused = currentTab === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => onTabClick(item)}
                className={`relative whitespace-nowrap px-4 sm:px-6 py-4 text-xs sm:text-sm tracking-wider font-body transition-colors duration-300 ${
                  isFocused
                    ? "text-stay-900"
                    : "text-stay-600 hover:text-stay-950"
                }`}
              >
                {item}
                {isFocused && (
                  <motion.div
                    layoutId={`tab-underline-${title}`}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-stay-900"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
