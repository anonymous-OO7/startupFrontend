"use client";

import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/common/Input";
import Spacer from "@/components/common/Spacer";
import { LoadingIcon } from "@/assets/images/Loading";
import { useRouter } from "next/navigation";
import Select from "@/components/common/Select";
import { SelectType } from "@/types";
import useApi from "@/hooks/useApi";
import { nextLocalStorage } from "@/utils/nextLocalStorage";
import { CreateUserApi } from "@/apis";
import useToast from "@/hooks/useToast";

const Gender: SelectType[] = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const INTIAL_VALUES = {
  name: "",
  email:
    nextLocalStorage()?.getItem("email") ??
    nextLocalStorage()?.getItem("email"),
  gender: "",
  phone: "",
  institution_name: "",
  course_field: "",
  country: "",
  username: "",
};

export default function SignUp() {
  const [loading, setLoading] = React.useState(false); // eslint-disable-line
  const router = useRouter();
  const emailocal = nextLocalStorage()?.getItem("email");
  const { makeApiCall } = useApi();
  const { showToast } = useToast();

  React.useEffect(() => {
    if (emailocal && emailocal == "") {
      localStorage.clear();
      router.replace("/login");
    }
  }, [emailocal, router]);

  const navigateToHomePage = React.useCallback(() => {
    router.replace("/");
  }, [router]);

  const handleSubmit = React.useCallback(
    ({
      name,
      email,
      gender,
      phone,
      institution_name,
      course_field,
      country,
      username,
    }: typeof INTIAL_VALUES) => {
      console.log(
        "DATA Sending for user creation",
        name,
        "--",
        email,
        "---",
        gender,
        "---",
        phone,
        "---",
        institution_name,
        "--",
        course_field,
        "--",
        country,
        "--",
        username,
      );

      setLoading(true);

      // Handle null or undefined values by providing default values or skipping if they are not available.
      const sanitizedEmail = email || ""; // Provide default value if email is undefined or null
      const sanitizedName = name || ""; // Provide default value if name is undefined or null
      const sanitizedUsername = username || ""; // Provide default value if username is undefined or null
      const sanitizedInstitutionName = institution_name || ""; // Provide default value if institution_name is undefined or null
      const sanitizedGender = gender || ""; // Provide default value if gender is undefined or null
      const sanitizedPhone = phone || ""; // Provide default value if phone is undefined or null
      const sanitizedCourseField = course_field || ""; // Provide default value if course_field is undefined or null

      localStorage.setItem("user_id", `01`);
      localStorage.setItem("name", sanitizedName);
      localStorage.setItem("institution_name", sanitizedInstitutionName);
      localStorage.setItem("phone", sanitizedPhone);
      localStorage.setItem("gender", sanitizedGender);

      return makeApiCall(
        CreateUserApi(
          sanitizedEmail,
          sanitizedName,
          sanitizedUsername,
          sanitizedInstitutionName,
          sanitizedGender,
          sanitizedInstitutionName,
          sanitizedPhone,
          sanitizedCourseField,
        ),
      )
        .then((response) => {
          console.log(response, "RESPONSE OF USER CREATION");
          localStorage.setItem("authToken", response?.token);
          setLoading(false);
          showToast("User created successfully!!", { type: "success" });
          navigateToHomePage();
        })
        .catch((error) => {
          console.error("SIGNup Error:- ", error);
          setLoading(false);
          showToast("Some error occurred!!", { type: "error" });
        });
    },
    [navigateToHomePage, makeApiCall, showToast],
  );

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string()
      .email("Invalid  email format")
      .required(" Email is required"),
    gender: Yup.string().required("Gender is required"),
    institution_name: Yup.string().required("Company/School name is required"),
    course_field: Yup.mixed().required("Course is required"),
    country: Yup.mixed().required("Country is required"),
  });

  const handleGenderType = React.useCallback(() => {}, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Sign Up
        </h2>
        <Formik
          initialValues={INTIAL_VALUES}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <Input label="Name" placeholder="Name" name="name" />
            <Spacer size="xs" />
            <Input
              label="User name"
              placeholder="Enter Username"
              name="username"
            />
            <Spacer size="xs" />
            <Input label="Phone Number" placeholder="Phone" name="phone" />
            <Spacer size="xs" />
            <Input label="Email" placeholder="Email" name="email" />
            <Spacer size="xs" />
            <Select
              name="gender"
              item={Gender}
              label="Gender"
              placeholder="Gender"
              onSelect={handleGenderType}
              className="text-black font-poppins font-normal"
            />
            <Spacer size="xs" />

            <Input
              label="Company/School"
              placeholder="Company/School"
              name="institution_name"
            />
            <Spacer size="xs" />
            <Input
              label="Title/Field"
              placeholder="Title/Field"
              name="course_field"
            />
            <Spacer size="xs" />
            <Input label="Country" placeholder="Country" name="country" />
            <Spacer size="xs" />
            <div className="flex justify-center items-center">
              {loading ? (
                <button
                  disabled
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <LoadingIcon />
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
