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
  email: "",
  gender: "",
  phone: "",
  institution_name: "",
  course_field: "",
  country: "",
};

export default function SignUp() {
  const [loading, setLoading] = React.useState(false); // eslint-disable-line
  const router = useRouter();

  const navigateToDashboard = React.useCallback(() => {
    router.push(`/dashboard`);
  }, [router]);

  const handleSubmit = React.useCallback(
    ({
      name, // eslint-disable-line
      email, // eslint-disable-line
      gender, // eslint-disable-line
      phone, // eslint-disable-line
      institution_name, // eslint-disable-line
      course_field, // eslint-disable-line
      country, // eslint-disable-line
    }: typeof INTIAL_VALUES) => {
      navigateToDashboard();
    },
    [navigateToDashboard],
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
