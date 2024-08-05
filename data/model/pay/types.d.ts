export type IamPortPaymentRequest = {
  name: string;
  /**
   * 주문번호는 결제창 요청 시 항상 고유 값으로 채번 되어야 합니다.
   * 결제 완료 이후 결제 위변조 대사 작업시 주문번호를 이용하여 검증이 필요하므로 주문번호는 가맹점 서버에서 고유하게(unique)채번하여 DB 상에 저장해주세요.
   */
  merchantUid: string;
  amount: number; // 숫자 타입
  buyerEmail?: string;
  buyerName?: string;
  buyerTel?: string;
  buyerAddr?: string;
};

export type PaymentRequest = {
  reservationId: number;
  impUid: string;
};
