export type ReservationCreateRequest = {
  hotelId: number;
  roomId: number;
  guestName: string;
  guestPhone: string;
  numberOfGuests: number;
  checkDate: CheckDateRequest;
  amount: number;
};

export type CheckDateRequest = {
  checkInDateTime: string;
  duration: number;
};

export type ReservationPrepareInfo = {
  checkInDate: Date;
  checkOutDate: Date;
  totalPrice: number;
  guestNumber: number;
};

export type CheckDateInfoModel = {
  checkIn: string;
  checkOut: string;
};
