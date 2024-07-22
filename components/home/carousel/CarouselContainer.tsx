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
        title="Offers"
        description="그라미 호텔에서 준비한 특별함을 느껴보세요"
      />
      <CarouselAdapter images={images} />
    </section>
  );
};

export default CarouselContainer;
