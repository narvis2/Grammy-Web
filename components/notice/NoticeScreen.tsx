"use client";

import { useNoticeList } from "@/data/hooks";
import { RoutePath } from "@/data/model/menu/enum";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import NoticeAdapter from "./NoticeAdapter";
import EmptyAdapter from "../empty/EmptyAdapter";

const NoticeScreen = () => {
  const router = useRouter();
  const { data: notice } = useNoticeList();

  const noticeList = useMemo(() => {
    if (!notice) return [];

    const list = notice.data ?? [];
    if (notice.success && list.length > 0) {
      return list;
    }

    return [];
  }, [notice]);

  const onNavigateNoticeDetails = (noticeId: number) => {
    router.push(`${RoutePath.NOTICE}/${noticeId}`);
  };

  return (
    <section className="py-20 mt-10">
      <div className={`${noticeList.length > 0 ? `mb-14` : `mb-0`}`}>
        <div className="container mx-auto">
          <h3 className="text-2xl font-normal text-center text-gray-800">
            포항 그라미 호텔 공지사항
          </h3>
        </div>
      </div>

      {noticeList.length > 0 ? (
        <NoticeAdapter
          noticeList={noticeList}
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
  );
};

export default NoticeScreen;
