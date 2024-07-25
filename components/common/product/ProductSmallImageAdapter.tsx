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
          <img
            key={item}
            src={item}
            alt={`product${index}`}
            className={`w-full h-20 lg:h-24 object-cover cursor-pointer border rounded-[5px] ${
              index === 0 ? "border-primary" : ""
            }`}
            onClick={() => onClickImage(index)}
          />
        );
      })}
    </div>
  );
};

export default ProductSmallImageAdapter;
