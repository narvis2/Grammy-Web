import React from "react";
import { FaTv } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { GiAtSea, GiMountains } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { SiNetflix } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { RiBatteryChargeLine } from "react-icons/ri";
import { LiaSearchPlusSolid } from "react-icons/lia";

const Service = () => {
  return (
    <div className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-10">
          <section className="flex justify-center mb-4">
            <h1 className="text-3xl text-center mb-6">
              <LiaSearchPlusSolid />
            </h1>
          </section>
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <CiParking1 />
                </div>
                <div className="text-lg font-serif">무료 주차</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <FaTv />
                </div>
                <div className="text-lg font-serif">와챠</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <FaTv />
                </div>
                <div className="text-lg font-serif">티빙</div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0  text-3xl">
                  <FaYoutube />
                </div>
                <div className="text-lg font-serif">유튜브</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <TbBrandDisney />
                </div>
                <div className="text-lg font-serif">디즈니 플러스</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <SiNetflix />
                </div>
                <div className="text-lg font-serif">넷플릭스</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <FaGoogle />
                </div>
                <div className="text-lg font-serif">구글TV</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <TbAirConditioning />
                </div>
                <div className="text-lg font-serif">에어컨</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <GiParkBench />
                </div>
                <div className="text-lg font-serif">야외 테라스</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <GiMountains />
                </div>
                <div className="text-lg font-serif">마운틴뷰 객실</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <GiAtSea />
                </div>
                <div className="text-lg font-serif">오션뷰 객실</div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 text-3xl">
                  <RiBatteryChargeLine />
                </div>
                <div className="text-lg font-serif">충전기</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;
