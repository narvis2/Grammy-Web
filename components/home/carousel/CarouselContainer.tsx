import { CarouselImageModel } from "@/data/model/image/types";
import CarouselAdapter from "./CarouselAdapter";
import CarouselHeader from "./CarouselHeader";

type CarouselContainerProps = {
  images: CarouselImageModel[];
};

const CarouselContainer = ({ images }: CarouselContainerProps) => {
  return (
    <section className="pt-20 pb-20 text-4xl">
      <CarouselHeader
        title="Gallery"
        description="포항 그라미 호텔에서만 느낄 수 있는 특별한 감성"
      />
      <CarouselAdapter images={images} />
    </section>
  );
};

export default CarouselContainer;
