import React from "react";
import Image from "next/image";
import { GiBathtub } from "react-icons/gi";

const Bath = () => {
  return (
    <div className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="p-10">
          <section className="mb-">
            <div className="flex justify-center mb-6 text-3xl">
              <GiBathtub />
            </div>
            <p className="text-lg text-center font-serif leading-relaxed mb-12">
              편안하게 몸을 담글 수 있는 넓은 욕조가 설치되어 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <Image
                  src="/images/bath1.jpeg"
                  alt="욕조 이미지 1"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bath2.jpeg"
                  alt="욕조 이미지 2"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bath3.jpeg"
                  alt="욕조 이미지 3"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/bath4.jpeg"
                  alt="욕조 이미지 4"
                  width={400}
                  height={300}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bath;
