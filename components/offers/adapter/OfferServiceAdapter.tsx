import { OfferServiceModel } from "@/data/model/offer/types";
import { FaCheck } from "react-icons/fa6";

type OfferServiceAdapterProps = {
  serviceList: OfferServiceModel[];
};

const OfferServiceAdapter = ({ serviceList }: OfferServiceAdapterProps) => {
  return (
    <section
      className={`flex items-start justify-center min-h-screen p-8 mt-4`}
    >
      <div className="mx-auto grid gap-4 lg:gap-10 grid-cols-2">
        {serviceList.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-row items-center justify-start p-4"
          >
            <FaCheck />
            <span className="ml-2 block antialiased tracking-normal font-sans text-xl font-medium text-gray-500 leading-snug normal-case transition-colors hover:text-gray-700">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferServiceAdapter;
