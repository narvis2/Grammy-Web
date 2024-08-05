import usePreventScroll from "@/data/hooks/ui/usePreventScroll";
import { useRouter } from "next/navigation";
import ReservationPrepareHeader from "./header/ReservationPrepareHeader";
import TitleItem from "./content/TitleItem";
import InfoItem from "./content/InfoItem";
import ReservationPrepareSubHeader from "./header/ReservationPrepareSubHeader";
import SingleInputItem from "./content/SingleInputItem";
import { useRequestReservationPrepare, useRoomDetails } from "@/data/hooks";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
import { RoomResponse } from "@/data/model/room";
import ReservationPaymentButton from "./button/ReservationPaymentButton";
import AddContentInputItem from "./content/AddContentInputItem";
import { ReservationCreateRequest } from "@/data/model/reservation/types";
import {
  useClearReservationPrepare,
  useReservationPrepareInfo,
} from "@/data/store/useReservationStore";
import {
  calculateDateDifference,
  formatCheckInCheckOut,
} from "@/data/mapper/room";
import dayjs from "dayjs";
import usePayment from "@/data/hooks/pay/usePayment";
import toast from "react-hot-toast";

type ReservationPrepareModalProps = {
  roomId: string;
};

const ReservationPrepareModal = ({ roomId }: ReservationPrepareModalProps) => {
  const router = useRouter();

  const prepareInfo = useReservationPrepareInfo();
  const clearPrepareInfo = useClearReservationPrepare();

  const [guestName, setGuestName] = useState<string>("");
  const [guestPhoneNumber, setGuestPhoneNumber] = useState<string>("");

  const { requestPayment, isLoading: isPaymentLoading } = usePayment({
    onSuccess: (data, variables, context) => {
      if (data.success) {
        console.log(`👠 결제 성공 onSuccess 👉`, data);
      } else {
        console.log(`👠 결제 실패 onSuccess 👉`, data);
        toast.error("결제가 취소되었습니다.");
      }
    },
    onError: (error, variables, context) => {
      console.log(`👠 Exception 으로 인한 결제 실패 onError 👉`, error);
    },
  });

  const { mutateAsync: requestReservationPrepare, isLoading } =
    useRequestReservationPrepare({});

  const { data, isFetching } = useRoomDetails(roomId);

  const roomInfo = useMemo<RoomResponse | undefined>(() => {
    if (data && data.data && data.success) {
      const room = data.data;
      return room;
    }

    return undefined;
  }, [data]);

  const checkDate = useMemo(() => {
    if (!prepareInfo) return null;
    return formatCheckInCheckOut(
      prepareInfo.checkInDate,
      prepareInfo.checkOutDate
    );
  }, [prepareInfo]);

  const isReservationEnable = useMemo(() => {
    const validateGuestName = guestName.length !== 0 && guestName !== "";
    const validateGuestPhoneNumber =
      guestPhoneNumber.length !== 0 && guestPhoneNumber !== "";

    return validateGuestName && validateGuestPhoneNumber;
  }, [guestName, guestPhoneNumber]);

  const prevent = usePreventScroll();

  const onReservationWithPaymentClick = async () => {
    const prepare = prepareInfo;
    const room = roomInfo;
    const name = guestName;
    const phoneNumber = guestPhoneNumber;
    if (!prepare || !room) {
      return;
    }
    if (name.length === 0 || name === "") {
      return;
    }
    if (phoneNumber.length === 0 || phoneNumber === "") {
      return;
    }
    const request: ReservationCreateRequest = {
      // amount: prepare.totalPrice,
      amount: 1,
      checkDate: {
        checkInDateTime: dayjs(prepareInfo.checkInDate).format("YYYY-MM-DD"),
        duration: calculateDateDifference(
          prepareInfo.checkInDate,
          prepareInfo.checkOutDate
        ),
      },
      guestName: guestName,
      guestPhone: guestPhoneNumber,
      hotelId: 1,
      roomId: parseInt(roomId),
      numberOfGuests: prepareInfo.guestNumber,
    };

    console.log(`🦋 request 👉`, request);

    await requestReservationPrepare(request, {
      onSuccess: (data, variables, context) => {
        const result = data.data;
        if (data.success && result) {
          requestPayment({
            amount: 1,
            merchantUid: String(result),
            name: `${room.roomType ?? ""}(${room.number})`,
            buyerName: name,
            buyerTel: phoneNumber,
          });
        }
      },
    });
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
            title="예약 및 결제 정보 확인"
            onClose={() => {
              clearPrepareInfo();
              router.back();
            }}
          />
          {/* Modal body */}
          {!!roomInfo && !!prepareInfo && (
            <section className="p-4 md:p-5 max-h-[calc(100vh-8rem)] overflow-y-scroll">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <ReservationPrepareSubHeader title="객실 예약 정보" />
                <TitleItem title="객실 유형" info={roomInfo.roomType ?? ""} />
                <InfoItem title="총 가격" info="1" />
                <InfoItem title="객실 호수" info={`${roomInfo.number} 호`} />
                {checkDate && (
                  <>
                    <InfoItem title="체크 인" info={checkDate.checkIn} />
                    <InfoItem title="체크 아웃" info={checkDate.checkOut} />
                  </>
                )}
                <InfoItem
                  title="인원수"
                  info={`기준 ${prepareInfo.guestNumber}명 / 최대 ${
                    prepareInfo.guestNumber + 1
                  }명`}
                />

                <ReservationPrepareSubHeader title="이용자 정보" />
                <SingleInputItem
                  title="성명"
                  placeholder="성명을 입력해주세요."
                  type="text"
                  value={guestName}
                  onChange={onChangeGuestName}
                />
                <SingleInputItem
                  title="휴대폰 번호"
                  placeholder="휴대폰 번호를 입력해주세요."
                  type="tel"
                  value={guestPhoneNumber}
                  onChange={onChangeGuestPhoneNumber}
                />
                <AddContentInputItem
                  title="추가 요청 사항"
                  value=""
                  onChange={(event) => {}}
                />
              </div>
              <ReservationPaymentButton
                isEnable={isReservationEnable}
                title={"예약 및 결제"}
                onClick={onReservationWithPaymentClick}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationPrepareModal;
