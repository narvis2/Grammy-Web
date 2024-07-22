import { CarouselImageModel } from "@/data/model/image/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselAdapterProps = {
  images: CarouselImageModel[];
};

const CarouselAdapter = ({ images }: CarouselAdapterProps) => {
  return (
    <div className="swiper-container mt-8 ml-10 mr-10">
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
              className="swiper-image object-cover h-30 w-30 rounded-[5px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselAdapter;
