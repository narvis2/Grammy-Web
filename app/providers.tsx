"use client";

import { QueryClient, QueryClientProvider, useQueries } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useGetHotel, useRoomTypeList } from "@/data/hooks";
import Script from "next/script";

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient();

export const NextProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export const NextLayout = ({ children }: Props) => {
  useGetHotel();
  useRoomTypeList();

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
      />
    </>
  );
};
