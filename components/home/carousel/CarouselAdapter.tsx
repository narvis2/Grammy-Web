import { CarouselImageModel } from "@/data/model/image/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselAdapterProps = {
  images: CarouselImageModel[];
};

const CarouselAdapter = ({ images }: CarouselAdapterProps) => {
  return (
    <div className="swiper-container mt-8 ml-5 mr-5">
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
    </div>
  );
};

export default CarouselAdapter;
