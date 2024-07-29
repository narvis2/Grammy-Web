import {
  useClearAuthModelState,
  useSetAuthModelState,
} from "@/data/store/useAuthStore";
import { useRequestSignIn } from "..";

function useSignIn() {
  const setAuthModel = useSetAuthModelState();
  const clearAuth = useClearAuthModelState();

  const {
    mutateAsync: requestSignIn,
    isLoading,
    error,
    isSuccess,
  } = useRequestSignIn({
    onSuccess: (data, variables, context) => {
      if (data.success && !!data.data) {
        const response = data.data;

        setAuthModel({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        });
        return;
      }

      clearAuth();
    },
    onError(error, variables, context) {
      console.log(`❌ error 👉`, error);
      clearAuth();
    },
  });

  return {
    requestSignIn,
    isLoading,
    error,
    isSuccess,
  };
}

export default useSignIn;
