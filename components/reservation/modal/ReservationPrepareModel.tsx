import usePreventScroll from "@/data/hooks/ui/usePreventScroll";
import { useRouter } from "next/navigation";
import ReservationPrepareHeader from "./header/ReservationPrepareHeader";
import TitleItem from "./content/TitleItem";
import InfoItem from "./content/InfoItem";
import ReservationPrepareSubHeader from "./header/ReservationPrepareSubHeader";
import SingleInputItem from "./content/SingleInputItem";
import { useRoomDetails } from "@/data/hooks";
import { ChangeEventHandler, useMemo, useState } from "react";
import { RoomResponse } from "@/data/model/room";
import ReservationPaymentButton from "./button/ReservationPaymentButton";
import AddContentInputItem from "./content/AddContentInputItem";
import toast from "react-hot-toast";

type ReservationPrepareModalProps = {
  roomId: string;
};

const ReservationPrepareModal = ({ roomId }: ReservationPrepareModalProps) => {
  const router = useRouter();

  const [guestName, setGuestName] = useState<string>("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState<string>("");

  const { data: roomInfo } = useRoomDetails(roomId);

  const isReservationEnable = useMemo(() => {
    const validateGuestName = guestName.length !== 0 && guestName !== "";
    const validateGuestPhoneNumber =
      guestPhoneNumber.length !== 0 && guestPhoneNumber !== "";

    return validateGuestName && validateGuestPhoneNumber;
  }, [guestName, guestPhoneNumber]);

  const prevent = usePreventScroll();

  const onReservationClick = () => {
    window.open(
      "https://booking.naver.com/booking/3/bizes/1227540?area=pll",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const onChangeGuestName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    setGuestName(text);
  };

  const onChangeGuestPhoneNumber: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const text = e.target.value;
    setGuestPhoneNumber(text);
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed z-30 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-[calc(100vh-4rem)] mb-10">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal header */}
          <ReservationPrepareHeader
            title="객실 정보"
            onClose={() => {
              router.back();
            }}
          />
          {/* Modal body */}
          {!!roomInfo && (
            <section className="p-4 md:p-5 max-h-[calc(100vh-8rem)] overflow-y-scroll">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <ReservationPrepareSubHeader title="객실 정보" />
                <TitleItem title="객실 유형" info={roomInfo.roomType ?? ""} />
                <InfoItem title="객실 호수" info={`${roomInfo.number} 호`} />
              </div>
              <ReservationPaymentButton
                isEnable={true}
                title={"네이버 예약하기"}
                onClick={onReservationClick}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationPrepareModal;
