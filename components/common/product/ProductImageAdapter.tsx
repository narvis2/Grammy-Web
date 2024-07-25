import { useState } from "react";
import ProductSmallImageAdapter from "./ProductSmallImageAdapter";
import ProductLargeImageAdapter from "./ProductLargeImageAdapter";

type ProductImageAdapterProps = {
  imageList: string[];
};

const ProductImageAdapter = ({ imageList }: ProductImageAdapterProps) => {
  const [currentImgIndex, setCurrentImageIndex] = useState<number>(0);

  function onSlideImage(isNext: boolean) {
    const index = isNext
      ? (currentImgIndex + 1) % imageList.length
      : (currentImgIndex - 1 + imageList.length) % imageList.length;
    setCurrentImageIndex(index);
  }

  return (
    <section>
      <ProductLargeImageAdapter
        imageUrl={imageList[currentImgIndex]}
        onSlideImage={onSlideImage}
      />
      <ProductSmallImageAdapter
        imgList={imageList}
        onClickImage={(index) => setCurrentImageIndex(index)}
      />
    </section>
  );
};

export default ProductImageAdapter;
