import { FaCheck } from "react-icons/fa6";

type ConvenienceItemProps = {
  title: string;
};

const ConvenienceItem = ({ title }: ConvenienceItemProps) => {
  return (
    <p className="flex flex-row items-center justify-start space-x-2.5">
      <FaCheck className="text-stay-400 text-xs flex-shrink-0" />
      <span className="text-stay-600 text-sm font-light">{title}</span>
    </p>
  );
};

export default ConvenienceItem;
