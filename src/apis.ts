"use client";
import { onePiece } from "./utils/AxiosInterceptor";

export const LoginApi = (email: string) => {
  return onePiece.post(
    "/request-otp",
    {
      email,
    },
    {},
  );
};

export const OtpSubmitApi = (email: string, otp: string) => {
  return onePiece.post(
    "/verify-otp",
    {
      email,
      otp,
    },
    {},
  );
};
