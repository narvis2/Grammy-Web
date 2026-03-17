"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "promotion_modal_hidden_date";
const SHOW_DELAY_MS = 1500;

const getToday = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const PromotionModal = () => {
  const [isCSR, setIsCSR] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsCSR(true);
    const hiddenDate = localStorage.getItem(STORAGE_KEY);
    if (hiddenDate !== getToday()) {
      setShouldShow(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  useEffect(() => {
    if (!visible) return;
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [visible]);

  const handleHideToday = () => {
    localStorage.setItem(STORAGE_KEY, getToday());
    setVisible(false);
  };

  if (!isCSR || typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={overlayRef}
          className="fixed z-40 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (overlayRef.current !== e.target) return;
            setVisible(false);
          }}
        >
          <motion.div
            className="relative max-w-xl w-[90%]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* 닫기(X) 버튼 */}
            <button
              type="button"
              className="absolute -top-3 -right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-md hover:bg-gray-100 transition"
              onClick={() => setVisible(false)}
            >
              ✕
            </button>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* 배너 이미지 */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/banner/eggcode-card.png"
                  alt="프로모션 배너"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* 하단 버튼 영역 */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-700 transition"
                  onClick={handleHideToday}
                >
                  오늘 하루 보지 않기
                </button>
                <button
                  type="button"
                  className="text-sm font-semibold text-[#3f3025] hover:text-[#5a4636] transition"
                  onClick={() => setVisible(false)}
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("common") as HTMLDivElement
  );
};

export default PromotionModal;
