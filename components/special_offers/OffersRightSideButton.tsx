type OffersRightSideButtonProps = {
  onClick: () => void;
};

const OffersRightSideButton = ({ onClick }: OffersRightSideButtonProps) => {
  return (
    <button
      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[3] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
      type="button"
      onClick={onClick}
    >
      <svg width="8" height="14" viewBox="0 0 6 10" fill="none">
        <path
          stroke="#1A1A1A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m1 9 4-4-4-4"
        />
      </svg>
    </button>
  );
};

export default OffersRightSideButton;
