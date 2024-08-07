import { RoomTypeResponse } from "@/data/model/room";
import ChipAdapter from "../ChipAdapter";
import ConvenienceItem from "../ConvenienceItem";
import ProductImageAdapter from "./ProductImageAdapter";
import { getCommaNumber } from "@/data/mapper";
import { roomTypeDescriptions, staticImageUrl } from "@/data/utils/constants";

type ProductAdapterProps = {
  roomTypeInfo: RoomTypeResponse;
};

const ProductAdapter = ({ roomTypeInfo }: ProductAdapterProps) => {
  const roomType = roomTypeInfo.roomTypeName;
  const mainImageList = roomTypeInfo.rooms[0].images.map(
    (item) => staticImageUrl + item.imageUrl
  );

  const roomNumberList = roomTypeInfo.rooms.map((item) => `${item.number}호`);

  const description = roomTypeDescriptions.get(roomType);

  return (
    <div className="flex justify-center items-center py-10 px-5">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProductImageAdapter imageList={mainImageList} />

        <section>
          <h2 className="text-3xl font-serif uppercase mb-2">{roomType}</h2>
          <div className="flex items-center">
            <ChipAdapter chipList={roomNumberList} />
          </div>
          <div className="space-y-2 mt-8">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>최대 인원: </span>
              <span className="text-gray-600">{`${roomTypeInfo.maxCount} 명`}</span>
            </p>
          </div>
          <div className="flex items-baseline space-x-2 font-roboto mt-2">
            <p className="text-base text-primary font-semibold">{`주중 가격 : ${getCommaNumber(
              roomTypeInfo.weekdayPrice
            )} ￦`}</p>
            {/* text-base text-gray-400 line-through */}
            <p className="text-base text-primary font-semibold">{`주말 가격 : ${getCommaNumber(
              roomTypeInfo.weekendPrice
            )} ￦`}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-8 justify-items-start">
            <ConvenienceItem
              title={`${roomType === "STANDARD-A" ? "마운틴 뷰" : "오션뷰"}`}
            />
            <ConvenienceItem title="욕조" />
            <ConvenienceItem title="와이파이" />
            <ConvenienceItem title="OTT(넷플릭스)" />
            <ConvenienceItem title="구글 스마트 티비" />
            <ConvenienceItem title="스타일러" />
            <ConvenienceItem title="에어컨" />
            {roomType === "STANDARD-B" ||
              (roomType === "ROYAL SUITE-A" && (
                <ConvenienceItem title="테라스" />
              ))}
            {roomTypeInfo.rooms[0].beds.map((item) => (
              <ConvenienceItem
                key={item.type}
                title={`${item.type} 침대 ${item.count}개`}
              />
            ))}
          </div>

          {!!description && (
            <p
              className="mt-8 text-base text-gray-600 font-serif"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductAdapter;
