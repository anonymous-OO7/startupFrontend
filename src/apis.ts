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

export const CreateUserApi = (
  email: string,
  name: string,
  username: string,
  college: string,
  gender: string,
  company: string,
  phoneNo: string,
  course: string,
) => {
  return onePiece.post(
    "/create-user",
    {
      email,
      name,
      username,
      college,
      gender,
      company,
      phoneNo,
      course,
    },
    {},
  );
};
