import { CarouselImageModel } from "@/data/model/image/types";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type CarouselAdapterProps = {
  images: CarouselImageModel[];
};

const CarouselAdapter = ({ images }: CarouselAdapterProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={ref}
      className="swiper-container mt-8 ml-5 mr-5"
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
            slidesPerView: 3,
          },
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={`carousel${idx}`}>
            <div className="relative w-full" style={{ height: 300 }}>
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-[5px]"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselAdapter;
