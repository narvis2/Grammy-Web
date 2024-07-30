type InfoItemProps = {
  title: string;
  info: string;
};

const InfoItem = ({ title, info }: InfoItemProps) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <label
        htmlFor="price"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >
        {title}
      </label>
      <p
        id="price"
        className="bg-gray-50 text-gray-900 text-sm rounded-lg p-2.5"
      >
        {info}
      </p>
    </div>
  );
};

export default InfoItem;
