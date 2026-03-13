import { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항",
  description:
    "그라미호텔 공지사항. 호텔 이용 안내, 이벤트, 공지 등 최신 소식을 확인하세요.",
  openGraph: {
    title: "공지사항 | 그라미호텔",
    description: "그라미호텔의 최신 공지사항과 이벤트 소식을 확인하세요.",
    url: "https://www.gramihotel.co.kr/notice",
  },
  alternates: {
    canonical: "https://www.gramihotel.co.kr/notice",
  },
};

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
