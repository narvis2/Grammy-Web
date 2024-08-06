import { ImageResponse } from "../image/types";

export type NoticeResponse = {
  id: number;
  title: string;
  images: ImageResponse[];
  description: string;
  createdAt: string;
  modifiedAt?: string;
};

export type NoticeModel = {
  title: string;
  description: string;
  createdAt: string;
  imageList: string[];
};
