import { useIntersectionObserver } from "@/data/hooks/animation/useIntersectionObserver";
import { CarouselImageModel } from "@/data/model/image/types";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselAdapterProps = {
  images: CarouselImageModel[];
};

const CarouselAdapter = ({ images }: CarouselAdapterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

  return (
    <motion.div 
      ref={ref}
      className="swiper-container mt-8 ml-5 mr-5"
      initial={{ x: 100, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          976: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={`carousel${idx}`}>
            <img
              src={item.src}
              alt={item.label}
              className="swiper-image object-cover rounded-[5px]"
              style={{height: 300, width: '100%'}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CarouselAdapter;
