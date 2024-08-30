export type HotelResponse = {
  hotelId: number;
  name: string;
  phoneNumber: string;
  address: string;
  longitude: string;
  latitude: string;
  addressDetail?: string;
  hotelDetail?: HotelDetailResponse;
};

export type HotelDetailResponse = {
  businessNumber?: string;
  mailOrderReportNumber?: string;
  accountNumber?: string;
  depositor?: string;
};
