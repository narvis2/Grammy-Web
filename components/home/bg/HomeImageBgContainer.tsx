import { CarouselImageModel } from "@/data/model/image/types";
import { PiMouseSimpleDuotone } from "react-icons/pi";

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
            일상에서 지친 몸과 마음을 달래기 위한 최적의 선택
          </p>
          <div className="relative">
            <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-2 mt-6 ml-5 mr-5 md:ml-0 md:mr-0">
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

            <div className="md:hidden grid grid-cols-2 gap-2 mt-6 ml-5 mr-5 md:ml-0 md:mr-0">
              {images.slice(0, -1).map((image, index) => (
                <button
                  key={index}
                  onClick={() => onIndicatorClick(index)}
                  className={`px-4 py-2 rounded focus:outline-none border border-white
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
              <div className="flex justify-center col-span-2">
                {images.length > 0 && (
                  <button
                    onClick={() => onIndicatorClick(images.length - 1)}
                    className={`w-[174.5px] px-4 py-2 rounded focus:outline-none border border-white
                      ${
                        currentImageIndex === images.length - 1
                          ? "text-black bg-white"
                          : "text-white"
                      }
                    `}
                  >
                    {images[images.length - 1].label}
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center mt-10">
              <PiMouseSimpleDuotone className="text-4xl" />
              <span className="text-xl font-sans text-white mt-2">
                Scroll Down
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageBgContainer;
