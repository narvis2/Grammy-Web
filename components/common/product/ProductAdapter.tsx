import { RoomTypeResponse } from "@/data/model/room";
import ChipAdapter from "../ChipAdapter";
import ConvenienceItem from "../ConvenienceItem";
import ProductImageAdapter from "./ProductImageAdapter";
import { getCommaNumber } from "@/data/mapper";
import { staticImageUrl } from "@/data/utils/constants";

type ProductAdapterProps = {
  roomTypeInfo: RoomTypeResponse;
};

const ProductAdapter = ({ roomTypeInfo }: ProductAdapterProps) => {
  const roomType = roomTypeInfo.roomTypeName;
  const mainImageList = roomTypeInfo.rooms[0].images.map(
    (item) => staticImageUrl + item.imageUrl
  );

  const roomNumberList = roomTypeInfo.rooms.map((item) => `${item.number}호`);

  return (
    <div className="flex justify-center items-center">
      <div className="container grid grid-cols-2 gap-6 mt-10">
        <ProductImageAdapter imageList={mainImageList} />

        <section>
          <h2 className="text-3xl font-medium uppercase mb-2">{roomType}</h2>
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
              <ConvenienceItem title={`${item.type} 침대 ${item.count}개`} />
            ))}
          </div>

          <p className="mt-8 text-base text-gray-600 font-serif">
            STANDARD-A는 자연의 아름다움을 만끽할 수 있는 마운틴 뷰를 자랑하는
            최상의 특별한 객실입니다.
            <br />
            저희 객실은 편안함을 최우선으로 고려하여 설계되었으며, 최고급 더블
            베드와 부드러운 오리털 이불로 편안한 휴식을 제공합니다.
            <br />
            산의 경치를 바라보며 하루의 피로를 잊고, 아늑한 분위기 속에서 특별한
            경험을 누려보세요.
            <br />
            STANDAR-A에서 여러분의 소중한 순간을 만들어 드리겠습니다.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProductAdapter;
