"use client";
import EmptyAdapter from "@/components/empty/EmptyAdapter";
import NoticeAdapter from "@/components/notice/NoticeAdapter";
import { useNoticeList } from "@/data/hooks";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const Notice = () => {
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

  return (
    <section className="py-20 mt-10">
      <div className={`${noticeList.length > 0 ? `mb-14` : `mb-0`}`}>
        <div className="container mx-auto">
          <h3 className="text-2xl font-normal text-center text-gray-800">
            그라미 호텔 공지사항
          </h3>
        </div>
      </div>

      {noticeList.length > 0 ? (
        <NoticeAdapter noticeList={noticeList} />
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

export default Notice;
