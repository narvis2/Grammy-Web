import { ChangeEventHandler } from "react";

type SingleInputItemProps = {
  title: string;
  placeholder: string;
  value: string;
  type: "text" | "tel";
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const SingleInputItem = ({
  title,
  value,
  placeholder,
  type,
  onChange,
}: SingleInputItemProps) => {
  return (
    <div className="col-span-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
        {title}
      </label>
      <input
        id={type}
        value={value}
        onChange={onChange}
        autoComplete="off"
        type={type}
        className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SingleInputItem;
