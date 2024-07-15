"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useGetHotel } from "@/data/hooks";

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

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </>
  );
};
