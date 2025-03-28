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
    type: OFFER_TYPE.BATH,
    image: "/images/offers_bath.jpg",
    description: "욕조가 설치되어 있습니다.",
  },
  {
    type: OFFER_TYPE.ROYAL_B_SUNRISE,
    image: "/images/royal_b_sunrise.jpg",
    description: "",
  },
  {
    type: OFFER_TYPE.TERRACE_A,
    image: "/images/terrace_night.jpg",
    description: "",
  },
  {
    type: OFFER_TYPE.ROYAL_A_CONCEPT,
    image: "/images/royal_a_concept.jpg",
    description: "",
  },
  {
    type: OFFER_TYPE.ROYAL_B_CONCEPT,
    image: "/images/royal_b_concept.jpg",
    description: "",
  },
  {
    type: OFFER_TYPE.TERRACE_B,
    image: "/images/common_terace_view.jpg",
    description: "",
  },
  {
    type: OFFER_TYPE.STANDARD_A_CONCEPT,
    image: "/images/standard_a_view.jpg",
    description: '',
  },
  {
    type: OFFER_TYPE.BED,
    image: "/images/offers_bed.jpg",
    description: "총 4가지 유형의 침대를 제공해드리고 있습니다.",
  },
  {
    type: OFFER_TYPE.ESPRESSO_CAFE,
    image: "/images/offers_cafe.jpg",
    description: "카페를 즐기실 수 있습니다.",
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
