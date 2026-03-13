"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import CommonModal from "@/components/common/modal/CommonModal";
import LoadingModal from "@/components/common/modal/LoadingModal";
import GoogleAnalytics from "./GoogleAnalytics";

interface Props {
  children?: React.ReactNode;
}

export const NextProviders = ({ children }: Props) => {
  return <>{children}</>;
};

export const NextLayout = ({ children }: Props) => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
			) : null}
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
      <Toaster position={"top-center"} />
      <CommonModal />
      <LoadingModal />
    </>
  );
};
