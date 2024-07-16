import { stringToDateFormat } from "@/data/mapper";
import { NoticeResponse } from "@/data/model/notice/types";

type NoticeItemProps = {
  notice: NoticeResponse;
};

const NoticeItem = ({ notice }: NoticeItemProps) => {
  return (
    <tr className="text-center border-t border-gray-200">
      <td className="py-3">{notice.noticeId}</td>
      <th className="text-left py-3 pl-7 pr-3">
        <a href="#!" className="text-gray-800 hover:underline">
          {notice.title}
        </a>
      </th>
      <td className="py-3">{stringToDateFormat(notice.createdAt)}</td>
    </tr>
  );
};

export default NoticeItem;
