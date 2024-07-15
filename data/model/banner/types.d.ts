import { ImageResponse } from "../image/types";

export type BannerResponse = {
  bannerId: number;
  title: string;
  images: ImageResponse[];
  description?: string;
  createdAt: string;
  modifiedAt?: string;
};
