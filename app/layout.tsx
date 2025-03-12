import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextLayout, NextProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "그라미 호텔",
  description: "포항 그라미 호텔",
  icons: {
    icon: '/grami_icon.png',
  },
  verification: {
    google: 'xXx3IWwiMA0Fx9tekBLB2C9PNdZTu9f1w1bU_ygV6nU',
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NextProviders>
          <NextLayout>
            {children}
            {modal}
          </NextLayout>
        </NextProviders>
        <div id="common"></div>
        <div id="loading"></div>
      </body>
    </html>
  );
}
