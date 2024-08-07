type ReservationPaymentButtonProps = {
  isEnable: boolean;
  title: string;
  onClick: () => void;
};

const ReservationPaymentButton = ({
  isEnable,
  title,
  onClick,
}: ReservationPaymentButtonProps) => {
  return (
    <button
      type="submit"
      className={`text-white inline-flex items-center ${
        isEnable ? "bg-[#c78390]" : "bg-[#b7abab]"
      } focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      onClick={onClick}
    >
      <svg
        className="me-1 -ms-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      </svg>
      {title}
    </button>
  );
};

export default ReservationPaymentButton;
