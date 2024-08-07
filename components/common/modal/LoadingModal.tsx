"use client";

import ReactDOM from "react-dom";
import Lottie from "react-lottie-player";
import LoadingJson from "../../../public/lotties/loading_animation.json";
import { useEffect, useMemo, useState } from "react";
import { useIsFetching, useIsMutating } from "react-query";

const LoadingModal = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const [isCSR, setIsCSR] = useState<boolean>(false);

  const isLoading = useMemo(
    () => isFetching || isMutating,
    [isFetching, isMutating]
  );

  useEffect(() => {
    setIsCSR(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (typeof window === "undefined" || !isCSR || !isLoading) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex justify-center items-center">
        <Lottie
          loop
          animationData={LoadingJson}
          play
          style={{ width: "120px", height: "120px" }}
        />
      </div>
    </>,
    document.getElementById("loading") as HTMLDivElement
  );
};

export default LoadingModal;
