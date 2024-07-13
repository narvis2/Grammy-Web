export type RoomResponse = {
  id: number
  status: string
  roomType?: string
  weakdayPrice: number
  weekendPrice: number
  images: RoomImageResponse[]
  beds: RoomBedResponse[]
}

export type RoomImageResponse = {
  id: number
  imageUrl: string
}

export type RoomBedResponse = {
  type: string
  count: number
}

export type RoomTypeResponse = {
  id: number
  roomTypeName: string
  weekdayPrice: number
  weekendPrice: number
  maxCount: number
  rooms: RoomResponse[]
  specialPrice: SpecialRoomPriceResponse[]
}

export type SpecialRoomPriceResponse = {
  id: number
  price: number
  startDate: string
  endDate: string
  roomType: string
}
