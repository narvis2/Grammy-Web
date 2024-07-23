import { BedType } from "./enum";

export type BedModel = {
  img: string;
  description?: string;
  bedType: BedType;
};
