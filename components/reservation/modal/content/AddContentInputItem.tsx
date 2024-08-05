import { ChangeEventHandler } from "react";

type AddContentInputItemProps = {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const AddContentInputItem = ({
  title,
  value,
  onChange,
}: AddContentInputItemProps) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >
        {title}
      </label>
      <textarea
        id="description"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="추가 문의 사항 및 요청 사항을 입력해주세요!"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default AddContentInputItem;
