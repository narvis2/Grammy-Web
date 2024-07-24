import { OFFER_TYPE } from "./enum";

export type OfferModel = {
  type: OFFER_TYPE;
  image: string;
  description: string;
};

export type OfferServiceModel = {
  title: string;
  description?: string;
};
