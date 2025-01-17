import { ImageResponse } from "../image/types";

export type RoomResponse = {
  id: number;
  status: string;
  roomType?: string;
  weekdayPrice: number;
  weekendPrice: number;
  images: ImageResponse[];
  beds: RoomBedResponse[];
  number: number;
};

export type RoomBedResponse = {
  type: string;
  count: number;
};

export type RoomTypeResponse = {
  id: number;
  roomTypeName: string;
  weekdayPrice: number;
  fridayPrice: number;
  weekendPrice: number;
  maxCount: number;
  rooms: RoomResponse[];
  specialPrice: SpecialRoomPriceResponse[];
};

export type SpecialRoomPriceResponse = {
  id: number;
  price: number;
  startDate: string;
  endDate: string;
  roomType: string;
};

export type RoomTypeImageModel = {
  roomType: string;
  imageUrl: string;
};

export type RoomAvailableReservationRequest = {
  checkInDateTime: string;
  duration: number;
};

export type RoomAvailableReservationResponse = {
  id: number;
  roomType: string;
  roomNumber: number;
  totalPrice: number;
  imageUrl: string[];
  guestCount: number;
  beds: RoomBedResponse[];
};
