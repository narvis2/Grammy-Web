import { FaCheck } from "react-icons/fa6";

type ConvenienceItemProps = {
  title: string;
};

const ConvenienceItem = ({ title }: ConvenienceItemProps) => {
  return (
    <p className="flex flex-row items-center justify-start space-x-2">
      <FaCheck />
      <span className="text-gray-500">{title}</span>
    </p>
  );
};

export default ConvenienceItem;
