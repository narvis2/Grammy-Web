import { create } from "zustand";
import { OFFER_TYPE } from "../model/offer/enum";
import { OfferModel, OfferServiceModel } from "../model/offer/types";

interface OfferState {
  offers: OfferModel[];
  offerService: OfferServiceModel[];
}

interface OfferInfoActions {}

const defaultOfferState: OfferModel[] = [
  {
    type: OFFER_TYPE.ESPRESSO_CAFE,
    image: "/images/offers_cafe.jpg",
    description: "카페를 즐기실 수 있습니다.",
  },
  {
    type: OFFER_TYPE.BED,
    image: "/images/offers_bed.jpg",
    description: "총 4가지 유형의 침대를 제공해드리고 있습니다.",
  },
  {
    type: OFFER_TYPE.AMENITIES,
    image: "/images/offers_shampoo.jpg",
    description: "일회용 욕실 어메니티를 제공해드리고 있습니다.",
  },
  {
    type: OFFER_TYPE.BATH,
    image: "/images/offers_bath.jpg",
    description: "욕조가 설치되어 있습니다.",
  },
  {
    type: OFFER_TYPE.SERVICE,
    image: "/images/tv.jpg",
    description: "그라미 호텔에서는 아래와 같은 시설 및 서비스를 제공합니다.",
  },
];

const defaultOfferServiceState: OfferServiceModel[] = [
  { title: "주차가능" },
  { title: "야외테라스 객실" },
  { title: "스타일러" },
  { title: "객실금연" },
  { title: "객실금연" },
  { title: "오션뷰 객실" },
  { title: "마운틴뷰 객실" },
  { title: "구글 스마트 TV" },
  { title: "OTT(넷플릭스)" },
  { title: "와이파이" },
  { title: "에어컨" },
];

export const useOfferStore = create<OfferState & OfferInfoActions>((set) => ({
  offers: defaultOfferState,
  offerService: defaultOfferServiceState,
}));
