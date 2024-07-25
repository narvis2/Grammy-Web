type ChipAdapterProps = {
  chipList: string[];
};

const ChipAdapter = ({ chipList }: ChipAdapterProps) => {
  return (
    <div className="flex flex-wrap gap-1 text-sm text-gray-500">
      {chipList.map((item) => {
        return (
          <span key={item} className="px-3 py-1 rounded-full border">
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default ChipAdapter;
