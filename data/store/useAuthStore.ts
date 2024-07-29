import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthModel } from "../model/auth/types";

const StorageKey = "auth-store";

interface AuthState {
  auth: AuthModel | null;
  setAuth: (auth: AuthModel) => void;
  clearAuth: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      auth: null,
      setAuth: (auth: AuthModel) => {
        set({ auth });
      },
      clearAuth: () => {
        set({ auth: null });
      },
    }),
    {
      name: StorageKey,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthModelState = () => useAuthStore((state) => state.auth);

export const useSetAuthModelState = () =>
  useAuthStore((state) => state.setAuth);

export const useClearAuthModelState = () =>
  useAuthStore((state) => state.clearAuth);
