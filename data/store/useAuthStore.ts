import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthModel } from "../model/auth/types";

const StorageKey = "auth-store";

interface AuthState {
  auth: AuthModel;
  setAuth: (auth: AuthModel) => void;
  getAccessToken: () => string | undefined; // Axios Instance 에서 사용
  getRefreshToken: () => string | undefined; // Axios Instance 에서 사용
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
  clearAuth: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      auth: {
        accessToken: undefined,
        refreshToken: undefined,
      },
      setAuth: (auth: AuthModel) => {
        set({ auth });
      },
      getAccessToken: () => get().auth.accessToken,
      getRefreshToken: () => get().auth.refreshToken,
      setAccessToken: (accessToken: string) => {
        set((state) => ({
          auth: {
            ...state.auth,
            accessToken,
          },
        }));
      },
      clearAccessToken: () => {
        set((state) => ({
          auth: {
            ...state.auth,
            accessToken: undefined,
          },
        }));
      },
      clearAuth: () => {
        set({
          auth: {
            accessToken: undefined,
            refreshToken: undefined,
          },
        });
      },
    }),
    {
      name: StorageKey,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthModelState = () => useAuthStore((state) => state.auth);

export const useGetAccessToken = () =>
  useAuthStore((state) => state.getAccessToken);

export const useAccessToken = () =>
  useAuthStore((state) => state.auth.accessToken);

export const useRefreshToken = () =>
  useAuthStore((state) => state.auth.refreshToken);

export const useSetAuthModelState = () =>
  useAuthStore((state) => state.setAuth);

export const useSetAccessTokenState = () =>
  useAuthStore((state) => state.setAccessToken);

export const useClearAccessTokenState = () =>
  useAuthStore((state) => state.clearAccessToken);

export const useClearAuthModelState = () =>
  useAuthStore((state) => state.clearAuth);
