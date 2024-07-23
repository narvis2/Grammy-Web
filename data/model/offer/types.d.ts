import { OFFER_TYPE } from "./enum";

export type OfferModel = {
  type: OFFER_TYPE;
  image: string;
  description: string;
};
