import { useQuery } from "react-query"
import { T_Query } from "../model/base"
import { HotelResponse } from "../model/hotel"
import { getHotel } from "../api/service/hotel"

export const useGetHotel = (customOptions?: T_Query<HotelResponse>) =>
  useQuery(["useGetHotel"], () => getHotel(), customOptions)
