import React, { useEffect } from "react";

const useGetAnalyticsTag = () => {
  useEffect(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
          page_path: window.location.pathname,
        });
      }
    }, []);
}

export default useGetAnalyticsTag;