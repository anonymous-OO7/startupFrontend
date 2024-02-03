"use client";

import React, { useState } from "react";
import { Form, Formik } from "formik";
import Input from "@/components/common/Input";
import Spacer from "@/components/common/Spacer";
import Row from "@/components/common/Row";
import * as Yup from "yup";
import { Logo } from "@/assets/images/Logo";
import { LoadingIcon } from "@/assets/images/Loading";
import OtpInput from "react-otp-input";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const INTIAL_VALUES = {
  email: "",
};
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [showOtp, setSetShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Email:", email);
    setSetShowOtp(true);
  };

  const navigateToSignup = React.useCallback(() => {
    router.push(`/signup`);
  }, [router]);

  const otpSubmit = async () => {
    setOtpLoading(true); // Set otpLoading to true

    // Use a promise with setTimeout to delay the execution for 3 seconds
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // 3000 milliseconds (3 seconds)
    });

    setOtpLoading(false); // Set otpLoading to false after 3 seconds
    navigateToSignup();
  };

  const onOtpChange = (text: string) => {
    console.log(text, "OTPPP");
    setOtp(text);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <Logo />
        </a>
        <div className="  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          {showOtp ? (
            <div className="flex justify-center items-center text-black">
              <div className="flex flex-col items-center justify-center p-8  text-black">
                <OtpInput
                  value={otp}
                  onChange={(text) => onOtpChange(text)}
                  numInputs={4}
                  renderSeparator={
                    <span style={{ margin: "0 0.5rem" }}>-</span>
                  }
                  renderInput={(props, index) => <input {...props} />}
                  // inputStyle="  border border-gray-300 rounded-md  py-4 px-1  mx-4 text-black"
                  inputStyle={{
                    border: "1px solid #666476",
                    height: "50px",
                    width: "50px",
                    borderRadius: "15px",
                  }}
                />
                <Spacer size="md" />

                <Button
                  color="primary"
                  isLoading={otpLoading}
                  disabled={otp.length >= 4 ? false : true}
                  onClick={otpSubmit}
                >
                  Loading
                </Button>
              </div>
            </div>
          ) : (
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <Formik
                initialValues={INTIAL_VALUES}
                onSubmit={handleSubmit}
                validateOnBlur
                validateOnChange
                validationSchema={validationSchema}
                enableReinitialize
              >
                <Form>
                  <Input
                    label="Your email"
                    placeholder="Enter email"
                    name="email"
                    type="email"
                  />
                  <Spacer size="xs" />
                  {loading ? (
                    <button
                      disabled
                      type="button"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <LoadingIcon />
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send otp
                    </button>
                  )}
                </Form>
              </Formik>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
