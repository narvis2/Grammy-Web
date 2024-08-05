import Image from "next/image";

type ProductSmallImageAdapterProps = {
  imgList: string[];
  onClickImage: (index: number) => void;
};

const ProductSmallImageAdapter = ({
  imgList,
  onClickImage,
}: ProductSmallImageAdapterProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {imgList.map((item, index) => {
        return (
          <div
            key={item}
            className={`relative w-full h-20 lg:h-24 cursor-pointer border rounded-[5px] ${
              index === 0 ? "border-primary" : ""
            }`}
            onClick={() => onClickImage(index)}
          >
            <Image
              src={item}
              alt={`product${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-[5px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductSmallImageAdapter;
