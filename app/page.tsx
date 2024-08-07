import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useCookie from "@/data/hooks/cookie/useCookie";
import HomeScreen from "@/components/home/HomeScreen";

const Home = () => {
  const auth = useCookie();

  return <HomeScreen auth={auth} />;
};

export default Home;
