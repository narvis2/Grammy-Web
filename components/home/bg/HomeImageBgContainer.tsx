import { CarouselImageModel } from "@/data/model/image/types";

type HomeImageBgContainerProps = {
  showText: boolean;
  currentImageIndex: number;
  images: CarouselImageModel[];
  onIndicatorClick: (index: number) => void;
};

const HomeImageBgContainer = ({
  showText,
  currentImageIndex,
  images,
  onIndicatorClick,
}: HomeImageBgContainerProps) => {
  return (
    <div className="slideshow-container relative">
      <img
        src={images[currentImageIndex].src}
        alt="Slideshow"
        className="slideshow-image w-full object-cover"
      />
      <div
        className={`absolute bottom-20 flex flex-col items-center text-center text-white transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <h2 className="bottom-0 text-3xl sm:text-5xl lg:text-8xl font-serif mb-2">
            {images[currentImageIndex].label}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-serif mb-4">
            포항에서 지친 몸을 쉬어주는 호텔
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-6 ml-5 mr-5 md:ml-0 md:mr-0">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onIndicatorClick(index)}
                className={`px-4 py-2 rounded focus:outline-none border border-white
              md:border-l md:border-r md:border-t-0 md:border-b-0
              ${
                currentImageIndex === index
                  ? "text-black bg-white"
                  : "text-white"
              }
            `}
              >
                {image.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageBgContainer;
