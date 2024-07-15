import { ImageResponse } from "../image/types";

export type NoticeResponse = {
  noticeId: number;
  title: string;
  images: ImageResponse[];
  description: string;
  createdAt: string;
  modifiedAt?: string;
};
