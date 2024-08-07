import { allowScroll, preventScroll } from "@/data/utils/utils";
import { useEffect } from "react";

// 뒷 배경 스크롤 금지
function usePreventScroll() {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
}

export default usePreventScroll;
