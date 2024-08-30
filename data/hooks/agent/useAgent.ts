import { useEffect, useState } from "react";

const useAgent = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileCheck =
      /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setIsMobile(mobileCheck);
  }, []);

  return { isMobile };
};

export default useAgent;
