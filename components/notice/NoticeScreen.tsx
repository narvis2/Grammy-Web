"use client";

import { useNoticeList } from "@/data/hooks";
import { RoutePath } from "@/data/model/menu/enum";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import NoticeAdapter from "./NoticeAdapter";
import EmptyAdapter from "../empty/EmptyAdapter";
import useGetAnalyticsTag from "@/data/hooks/analytics/useGetAnalyticsTag";
import PageHero from "@/components/common/hero/PageHero";

const noticeHeroImages = [
  { src: "/images/lobby_a.jpg", alt: "그라미호텔 로비" },
];

const NoticeScreen = () => {
  const router = useRouter();
  const { data: noticeList } = useNoticeList();

  useGetAnalyticsTag();

  const list = noticeList ?? [];

  const onNavigateNoticeDetails = (noticeId: number) => {
    router.push(`${RoutePath.NOTICE}/${noticeId}`);
  };

  return (
    <div className="relative">
      <PageHero
        images={noticeHeroImages}
        subtitle="Grami Hotel · Notice"
        title="NOTICE"
        description="포항 그라미 호텔 공지사항"
      />

      <section className="py-20">

      {list.length > 0 ? (
        <NoticeAdapter
          noticeList={list}
          onItemClick={(notice) => onNavigateNoticeDetails(notice.id)}
        />
      ) : (
        <EmptyAdapter
          message="등록된 공지사항이 없습니다."
          onClick={() => {
            router.replace("/");
          }}
        />
      )}
      </section>
    </div>
  );
};

export default NoticeScreen;
