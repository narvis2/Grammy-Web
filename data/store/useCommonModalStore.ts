import { create } from "zustand";

interface CommonModalState {
  title: string;
  contents: string;
  enableBackgroundCancel?: boolean;
  confirmTitle?: string;
  cancelTitle?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface CommonModalStoreState {
  modal: CommonModalState | null;
}

interface CommonModalStoreAction {
  setCommonModal: (modalState: CommonModalState) => void;
  setClearCommonModal: () => void;
}

const useCommonModalStore = create<
  CommonModalStoreState & CommonModalStoreAction
>((set) => ({
  modal: null,
  setCommonModal: (modalState) => {
    set({ modal: modalState });
  },
  setClearCommonModal: () => {
    set({ modal: null });
  },
}));

export const useGetCommonModal = () =>
  useCommonModalStore((state) => state.modal);

export const useShowCommonModal = () =>
  useCommonModalStore((state) => state.setCommonModal);

export const useHideCommonModal = () =>
  useCommonModalStore((state) => state.setClearCommonModal);
