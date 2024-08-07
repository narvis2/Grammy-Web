"use client";

import React, { useEffect, useState } from "react";
import {
  useGetCommonModal,
  useHideCommonModal,
} from "@/data/store/useCommonModalStore";
import ReactDOM from "react-dom";

export interface ModalProps {}

const CommonModal = ({}: ModalProps) => {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const modal = useGetCommonModal();
  const clearModal = useHideCommonModal();
  const overlayRef = React.useRef(null);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    clearModal();
  };

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (modal === null || typeof window === "undefined" || !isCSR) return null;

  const confirmBtnColor = !modal.onCancel ? "#c78390" : "#152348";

  return ReactDOM.createPortal(
    <>
      <div
        ref={overlayRef}
        className="fixed z-30 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex justify-center items-center"
        onClick={(e) => {
          if (overlayRef.current !== e.target) return;
          clearModal();
        }}
      >
        <div className="w-64 bg-white shadow-lg rounded-2xl p-4">
          <div className="w-full h-full text-center">
            <div className="flex flex-col justify-center h-full">
              <div className="border-b border-b-[#E6E6E6] py-2">
                <p className="text-xl font-bold text-gray-800">{modal.title}</p>
              </div>
              <div className="flex items-center justify-center py-4">
                <p className="px-3 py-2 text-sm text-gray-600">
                  {modal.contents}
                </p>
              </div>
              <div className="flex items-center justify-between w-full gap-4  bg-red-200">
                <button
                  type="button"
                  className={`py-2 px-4  bg-[${confirmBtnColor}] hover:bg-[${confirmBtnColor}] focus:ring-[${confirmBtnColor}] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
                  onClick={() => {
                    const action = modal.onConfirm;
                    if (action) {
                      action();
                    }

                    clearModal();
                  }}
                >
                  {modal.confirmTitle ?? "확인"}
                </button>
                {!!modal.onCancel && (
                  <button
                    type="button"
                    className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-[#c78390] text-[#c78390] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                    onClick={() => {
                      modal.onCancel!();
                      clearModal();
                    }}
                  >
                    {modal.cancelTitle ?? "취소"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("common") as HTMLDivElement
  );
};

export default CommonModal;
