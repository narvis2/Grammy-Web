import NoticeDetailScreen from "@/components/notice/details/NoticeDetailScreen";

const NoticeDetails = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailScreen noticeId={params.noticeId} />;
};

export default NoticeDetails;
