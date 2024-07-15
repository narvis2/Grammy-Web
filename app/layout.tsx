import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextLayout, NextProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "그라미 호텔",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <NextProviders>
        <body className={inter.className}>
          <NextLayout>{children}</NextLayout>
        </body>
      </NextProviders>
    </html>
  );
}
