import { getFullAddress, phoneFormatter } from "@/data/mapper";
import { HotelResponse } from "@/data/model/hotel";
import WayToComeHeader from "./WayToComeHeader";
import useMap from "@/data/hooks/map/useMap";

type WayToComeContainerProps = {
  hotelInfo?: HotelResponse;
};

const WayToComeContainer = ({ hotelInfo }: WayToComeContainerProps) => {
  const naverMap = useMap(hotelInfo);

  return (
    <section
      className={`pt-12 pb-20 px-10 bg-[#FcFcFc] flex flex-col justify-center items-center`}
    >
      <WayToComeHeader
        title="오시는 길"
        description="그라미 호텔에 오시는 길을 안내해드립니다."
      />

      <div
        id="map"
        style={{ minHeight: "300px", maxHeight: "400px", borderRadius: 10 }}
        className="w-full lg:w-1/2 mb-4 lg:mb-4"
      ></div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
        <p className="text-lg">{`• 주소 : ${getFullAddress(hotelInfo)}`}</p>
        <p className="text-lg">{`• 연락처 : ${phoneFormatter(
          hotelInfo?.phoneNumber
        )}`}</p>
        {/* <div className="mt-2">
            <p className="text-lg text-gray-400">• 구룡포 시장 도보 1분 이내</p>
            <p className="text-lg text-gray-400">• 구룡포항 도보 2분 이내</p>
            <p className="text-lg text-gray-400">
              • 주소 : 구룡포항공영주차장 도보 5분 이내
            </p>
            <p className="text-lg text-gray-400">
              • 구룡포 해수욕장 자차 5분 이내
            </p>
            <p className="text-lg text-gray-400">• 호미곶 자차 15분 이내</p>
          </div> */}
      </div>
    </section>
  );
};

export default WayToComeContainer;
