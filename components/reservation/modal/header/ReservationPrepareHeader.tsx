import React from "react";

type ReservationPrepareHeaderProps = {
  title: string;
  onClose: () => void;
};

const ReservationPrepareHeader = ({
  title,
  onClose,
}: ReservationPrepareHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-[#E6E6E6]">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">
        {title}
      </h3>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-[#d76076] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-[#d76076] dark:hover:text-white"
        onClick={() => onClose()}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};

export default React.memo(ReservationPrepareHeader);
