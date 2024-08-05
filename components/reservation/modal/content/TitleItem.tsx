type TitleItemProps = {
  title: string;
  info: string;
};

const TitleItem = ({ title, info }: TitleItemProps) => {
  return (
    <div className="col-span-2">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >
        {title}
      </label>
      <p
        id="name"
        className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
      >
        {info}
      </p>
    </div>
  );
};

export default TitleItem;
