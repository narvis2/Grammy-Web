import { NoticeResponse } from "@/data/model/notice/types";

export const noticeData: NoticeResponse[] = [
  {
    id: 1,
    title: "그라미 호텔 이용 안내",
    images: [],
    description:
      "안녕하세요, 포항 그라미 호텔입니다.\n\n체크인: 15:00 / 체크아웃: 11:00\n\n쾌적한 숙박을 위해 객실 내 금연을 부탁드립니다.\n감사합니다.",
    createdAt: "2024-01-15",
  },
];

export const getNoticeById = (
  noticeId: string
): NoticeResponse | undefined => {
  return noticeData.find((n) => n.id === parseInt(noticeId));
};
