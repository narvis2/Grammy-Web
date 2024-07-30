declare const window: typeof globalThis & {
  IMP: any;
};

function usePayment() {
  const requestPayment = () => {
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
      merchant_uid: "1", // 주문번호
      name: "노르웨이",
      amount: 1, // 숫자 타입
      buyer_email: "narvis2@naver.com",
      buyer_name: "최영준",
      buyer_tel: "010-4242-4242",
      buyer_addr: "",
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
  };

  return { requestPayment };
}

export default usePayment;
