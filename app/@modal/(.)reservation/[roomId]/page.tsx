"use client";

import ReservationPrepareModal from "@/components/reservation/modal/ReservationPrepareModel";
import React from "react";
const ReservationPrepare = ({ params }: { params: { roomId: string } }) => {
  return <ReservationPrepareModal roomId={params.roomId} />;
};

export default ReservationPrepare;
