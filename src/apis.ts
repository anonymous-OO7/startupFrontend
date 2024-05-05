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

export const UserPostApi = (
  title: string,
  text: string,
  tags: string,
  mediaFile: File,
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("text", text);
  formData.append("mediaType", "image/jpeg");
  formData.append("tags", tags);
  formData.append("mediaFile", mediaFile);

  return onePiece.post("/api/posts/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const GetAllUserData = () => {
  return onePiece.post("/user", {}, {});
};
