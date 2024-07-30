import React from "react";

type ReservationPrepareSubHeaderProps = {
  title: string;
};

const ReservationPrepareSubHeader = ({
  title,
}: ReservationPrepareSubHeaderProps) => {
  return (
    <div className="col-span-2 border-b border-[#E6E6E6]">
      <label
        htmlFor="price"
        className="block mb-2 mt-2 text-base font-medium text-gray-900 dark:text-gray-900"
      >
        {title}
      </label>
    </div>
  );
};

export default React.memo(ReservationPrepareSubHeader);
