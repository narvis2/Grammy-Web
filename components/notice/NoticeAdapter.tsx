import { NoticeResponse } from "@/data/model/notice/types";
import NoticeItem from "./NoticeItem";

type NoticeAdapterProps = {
  noticeList: NoticeResponse[];
};

const NoticeAdapter = ({ noticeList }: NoticeAdapterProps) => {
  return (
    <div id="board-list">
      <div className="container mx-auto">
        <table className="w-full text-sm border-t border-b border-gray-300">
          <thead>
            <tr className="text-center">
              <th className="w-24 py-3">번호</th>
              <th className="py-3">제목</th>
              <th className="w-48 py-3">등록일</th>
            </tr>
          </thead>
          <tbody>
            {noticeList.map((item) => {
              return (
                <NoticeItem key={item.noticeId.toString()} notice={item} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeAdapter;
