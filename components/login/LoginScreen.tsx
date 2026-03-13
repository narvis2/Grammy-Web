"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginScreen = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default LoginScreen;
