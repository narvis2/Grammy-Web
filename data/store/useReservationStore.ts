import { ReservationPrepareInfo } from "../model/reservation/types";
import { create } from "zustand";

interface ReservationState {
  prepare: ReservationPrepareInfo | null;
}

interface ReservationAction {
  setPrepare: (info: ReservationPrepareInfo) => void;
  clearPrepare: () => void;
}

const useReservationStore = create<ReservationState & ReservationAction>(
  (set) => ({
    prepare: null,
    setPrepare: (info) => {
      set({ prepare: info });
    },
    clearPrepare: () => {
      set({ prepare: null });
    },
  })
);

export const useReservationPrepareInfo = () =>
  useReservationStore((state) => state.prepare);

export const useSetReservationPrepare = () =>
  useReservationStore((state) => state.setPrepare);

export const useClearReservationPrepare = () =>
  useReservationStore((state) => state.clearPrepare);
