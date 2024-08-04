"use client";

import useSignIn from "@/data/hooks/sign";
import { isEmailValid } from "@/data/mapper";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import LoginHeader from "./header/LoginHeader";
import { useAuthModelState } from "@/data/store/useAuthStore";
import toast from "react-hot-toast";
import SocialLoginButton from "./button/SocialLoginButton";

const LoginScreen = () => {
  const router = useRouter();

  const auth = useAuthModelState();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorEmailMessage, setErrorEmailMessage] = useState<
    string | undefined
  >(undefined);
  const [serverError, setServerError] = useState<string | undefined>(undefined);

  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPw, setIsValidPw] = useState<boolean>(false);

  const { requestSignIn, isLoading, error, isSuccess } = useSignIn();

  const onClose = useCallback(() => {
    router.back();
  }, []);

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    setId(text);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const onLoginClick = async () => {
    const email = id;
    const pw = password;

    if (!isValidEmail) {
      toast.error("이메일을 입력해주세요!");
      return;
    }

    if (!isValidPw) {
      toast.error("비밀번호를 입력해주세요!");
      return;
    }

    if (!!errorEmailMessage) {
      setErrorEmailMessage(undefined);
    }

    if (!!serverError) {
      setServerError(undefined);
    }

    await requestSignIn({ email: email, password: pw });
  };

  const onGoogleLogin = () => {
    window.location.href =
      "http://localhost:8080/oauth2/authorization/google?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };

  const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  const isValidate = useMemo(() => {
    return isValidEmail && isValidPw;
  }, [isValidEmail, isValidPw]);

  const onNavigateHome = useCallback(() => {
    router.replace("/");
  }, []);

  useEffect(() => {
    if (id.length > 3 && !isEmailValid(id)) {
      setErrorEmailMessage("이메일 형식에 맞게 입력해주세요.");
    } else {
      if (!!errorEmailMessage) {
        setErrorEmailMessage(undefined);
      }
    }

    setIsValidEmail(id.length > 0 && id !== "" && isEmailValid(id));
  }, [id]);

  useEffect(() => {
    setIsValidPw(password.length > 0 && password !== "");
  }, [password]);

  useEffect(() => {
    if (error) {
      const errMsg = error.resultMsg;
      setServerError(errMsg);

      errMsg && toast.success(errMsg);
    }
  }, [error]);

  useEffect(() => {
    const accessToken = auth.accessToken;
    const refreshToken = auth.refreshToken;
    if (!!accessToken && !!refreshToken) {
      toast.success("로그인에 성공하였습니다!");
      onClose();
    }
  }, [auth]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e73e5c] to-[#d76076] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <LoginHeader
              title="그라미 호텔"
              subTitle="로그인"
              onTitleClick={onNavigateHome}
            />
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    onChange={onChangeId}
                    value={id}
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    이메일 입력
                  </label>
                  {!!errorEmailMessage && (
                    <span className="absolute left-0 -bottom-5 text-red-500 text-xs">
                      {errorEmailMessage}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    onChange={onChangePassword}
                    value={password}
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    비밀번호
                  </label>
                  {!!serverError && (
                    <span className="absolute left-0 -bottom-5 text-red-500 text-xs">
                      {serverError}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <button
                    className={`${
                      isValidate ? "bg-[#c78390]" : "bg-[#b7abab]"
                    } text-white rounded-md px-2 py-1`}
                    onClick={() => onLoginClick()}
                  >
                    로그인
                  </button>
                </div>
              </div>
            </div>
          </div>

          <SocialLoginButton
            type="GOOGLE"
            onLoginClick={() => onGoogleLogin()}
          />
          <SocialLoginButton type="NAVER" onLoginClick={() => onNaverLogin()} />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
