import { IamPortPaymentRequest, PaymentRequest } from "@/data/model/pay/types";
import { useRequestReservation } from "..";
import { BaseResponse } from "@/data/model/base";

declare const window: typeof globalThis & {
  IMP: any;
};

type UsePaymentProps = {
  onSuccess?: (
    data: BaseResponse<any>,
    variables: PaymentRequest,
    context: any
  ) => Promise<unknown> | void;
  onError?: (
    error: BaseResponse<any>,
    variables: PaymentRequest,
    context: any
  ) => Promise<unknown> | void;
};

function usePayment({ onSuccess, onError }: UsePaymentProps) {
  const { mutateAsync: requestReservation, isLoading } = useRequestReservation({
    onSuccess,
    onError,
  });
  const requestPayment = (request: IamPortPaymentRequest) => {
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_IAMPORT_IMP); // 가맹점 식별코드

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사 코드표 참조
      pay_method: "card",
      // 주문번호는 결제창 요청 시 항상 고유 값으로 채번 되어야 합니다.
      // 결제 완료 이후 결제 위변조 대사 작업시 주문번호를 이용하여 검증이 필요하므로 주문번호는 가맹점 서버에서 고유하게(unique)채번하여 DB 상에 저장해주세요
      merchant_uid: request.merchantUid, // 주문번호
      name: request.name,
      amount: request.amount, // 숫자 타입
      buyer_email: request.buyerEmail,
      buyer_name: request.name,
      buyer_tel: request.buyerTel,
      buyer_addr: request.buyerAddr,
      // notice_url: "http//localhost:3002/api/payments/webhook",
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, payCallback);
  };

  const payCallback = async (rsp: any) => {
    const { success, error_msg, merchant_uid, imp_uid } = rsp;

    console.log("🧪 rsp : ", rsp);
    console.log("🧪 merchant_uid : ", merchant_uid); // reservation_id
    console.log("🧪 imp_uid : ", imp_uid);
    await requestReservation({ impUid: imp_uid, reservationId: merchant_uid });
  };

  return { requestPayment, isLoading };
}

export default usePayment;
