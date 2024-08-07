type CountItemProps = {
  title: string;
  count: string;
};

const CountItem = ({ title, count }: CountItemProps) => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <label
        htmlFor="price"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >
        {title}
      </label>
      <input
        type="number"
        name="price"
        id="price"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="인원수를 입력해주세요!"
      />
    </div>
  );
};

export default CountItem;
