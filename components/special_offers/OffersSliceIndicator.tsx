type OffersSliceIndicatorProps = {
  label: number;
  isActive: boolean;
  onClick: () => void;
};

const OffersSliceIndicator = ({
  label,
  isActive,
  onClick,
}: OffersSliceIndicatorProps) => {
  return (
    <button
      type="button"
      aria-label={`Slice ${label}`}
      className={`mx-[3px] box-content h-[5px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
        isActive ? "bg-blue-600 opacity-100" : "bg-white opacity-50"
      }`}
      onClick={onClick}
    ></button>
  );
};

export default OffersSliceIndicator;
