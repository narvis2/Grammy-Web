"use client";

import ReactDOM from "react-dom";
import Lottie from "react-lottie-player";
import LoadingJson from "../../../public/lotties/loading_animation.json";
import { useEffect, useState } from "react";

const LoadingModal = () => {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  // No longer needed since there are no API calls
  return null;
};

export default LoadingModal;
