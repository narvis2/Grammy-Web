import { stringToDateFormat } from "@/data/mapper";
import { NoticeResponse } from "@/data/model/notice/types";

type NoticeItemProps = {
  notice: NoticeResponse;
  onItemClick: (notice: NoticeResponse) => void;
};

const NoticeItem = ({ notice, onItemClick }: NoticeItemProps) => {
  return (
    <tr
      className="text-center border-t border-gray-200"
      onClick={() => onItemClick(notice)}
    >
      <td className="py-3">{notice.id}</td>
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
