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
      className={`mx-1 rounded-full transition-all duration-500 ${
        isActive ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40"
      }`}
      onClick={onClick}
    />
  );
};

export default OffersSliceIndicator;
