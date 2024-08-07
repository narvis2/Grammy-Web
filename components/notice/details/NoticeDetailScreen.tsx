"use client";

import { useNoticeDetails } from "@/data/hooks";
import { NoticeModel } from "@/data/model/notice/types";
import { staticImageUrl } from "@/data/utils/constants";
import { useCallback, useMemo } from "react";
import { RoutePath } from "@/data/model/menu/enum";
import { useRouter } from "next/navigation";
import NoticeDetailHeader from "./header/NoticeDetailHeader";
import NoticeFooterAdapter from "./adapter/NoticeFooterAdapter";
import NoticeInfoAdapter from "./adapter/NoticeInfoAdapter";

type NoticeDetailScreenProps = {
  noticeId: string;
};

const NoticeDetailScreen = ({ noticeId }: NoticeDetailScreenProps) => {
  const router = useRouter();
  const { data, isFetching } = useNoticeDetails(noticeId);

  const noticeInfo = useMemo<NoticeModel | undefined>(() => {
    if (data && data.data && data.success) {
      const notice = data.data;
      const noticeImage = notice.images;
      const imageList =
        noticeImage.length === 0
          ? []
          : noticeImage.map((item) => staticImageUrl + item.imageUrl);

      return {
        ...notice,
        imageList: imageList,
      } as NoticeModel;
    }

    return undefined;
  }, [data]);

  const onNavigateNotice = useCallback(() => {
    router.replace(RoutePath.NOTICE);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="relative pt-24 sm:pt-32 lg:pt-40 w-full max-w-[764px] mx-auto text-center bg-white px-4 sm:px-6 lg:px-8">
        <NoticeDetailHeader />
        {noticeInfo && <NoticeInfoAdapter model={noticeInfo} />}
        <NoticeFooterAdapter
          onHomeClick={onNavigateNotice}
          onNextClick={() => {}}
          onPrevClick={() => {}}
        />
      </div>
    </div>
  );
};

export default NoticeDetailScreen;
