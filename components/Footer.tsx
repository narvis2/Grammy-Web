"use client";

import useHotelInfo from "@/data/hooks/hotel/useHotelInfo";
import { AiFillInstagram } from "react-icons/ai";
import FadeIn from "./common/animation/FadeIn";

export default function Footer() {
  const { hotelInfo } = useHotelInfo();

  return (
    <footer className="bg-charcoal text-white/80 pt-20 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-8">
        <FadeIn>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
            {/* Brand */}
            <div className="md:w-1/3">
              <h3 className="font-display text-3xl lg:text-4xl text-white tracking-wide mb-4">
                GRAMI HOTEL
              </h3>
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                포항 구룡포에서 만나는
                <br />
                특별한 휴식의 시작
              </p>
              <div className="section-divider !mx-0 !bg-white/20 !w-10" />
            </div>

            {/* Navigation */}
            <div className="md:w-1/5">
              <h4 className="text-xs tracking-widest-xl uppercase text-white/40 mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "소개", href: "/prologue" },
                  { label: "객실", href: "/rooms" },
                  { label: "부대시설", href: "/special_offers" },
                  { label: "공지사항", href: "/notice" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://booking.naver.com/booking/3/bizes/1227540?area=pll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-light hover:text-brand transition-colors duration-300"
                  >
                    예약하기
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:w-1/3">
              <h4 className="text-xs tracking-widest-xl uppercase text-white/40 mb-6">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/60">
                  {(hotelInfo?.address ?? "") +
                    " " +
                    (hotelInfo?.addressDetail ?? "")}
                </p>
                <p>
                  <span className="text-white/40 mr-2">T.</span>
                  <a
                    href="tel:054-727-0600"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    054-727-0600
                  </a>
                </p>
                <p>
                  <span className="text-white/40 mr-2">E.</span>
                  <a
                    href="mailto:az49890@naver.com"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    az49890@naver.com
                  </a>
                </p>
              </div>

              {/* Social */}
              <div className="mt-6">
                <a
                  href="https://www.instagram.com/grami_hotel_offical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
                >
                  <AiFillInstagram className="text-xl" />
                  <span className="text-xs tracking-wider">
                    @grami_hotel_offical
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/30 space-y-1">
            <p>
              대표: 최수영 | 사업자등록번호:{" "}
              {hotelInfo?.hotelDetail?.businessNumber ?? "-"}
            </p>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} GRAMI HOTEL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
