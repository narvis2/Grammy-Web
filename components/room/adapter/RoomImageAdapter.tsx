import { RoomTypeImageModel } from "@/data/model/room";
import { useEffect, useState } from "react";

type RoomImageAdapterProps = {
  roomTypeImages: RoomTypeImageModel[];
};

const RoomImageAdapter = ({ roomTypeImages }: RoomImageAdapterProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % roomTypeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="slideshow-container relative">
      <img
        src={roomTypeImages[imageIndex].imageUrl}
        alt="Slideshow"
        className="slideshow-image w-full object-cover"
      />
      <div
        className={`absolute bottom-20 inset-0 flex flex-col items-center justify-center text-center text-white transition-opacity duration-500 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-8xl font-serif">
            {roomTypeImages[imageIndex].roomType}
          </h2>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {roomTypeImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setImageIndex(index);
                }}
                className={`w-4 h-4 rounded-full focus:outline-none ${
                  imageIndex === index ? "bg-blue-800" : "bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomImageAdapter;