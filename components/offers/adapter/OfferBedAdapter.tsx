import { BedModel } from "@/data/model/bed/types";
import Image from "next/image";

type OfferBedAdapterProps = {
  showText: boolean;
  bedModelList: BedModel[];
};

const OfferBedAdapter = ({ showText, bedModelList }: OfferBedAdapterProps) => {
  return (
    <section className={`flex items-center justify-center min-h-screen p-8`}>
      <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
        {bedModelList.map((item, index) => (
          <div key={index} className="relative flex justify-center">
            <Image
              src={item.img}
              alt={item.bedType}
              width={400}
              height={400}
              className={`object-cover border rounded-[10px] ${
                showText ? "fade-in" : "fade-out"
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-bold">
                {item.bedType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferBedAdapter;
