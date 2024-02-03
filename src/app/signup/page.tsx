"use client";

import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/common/Input";
import Spacer from "@/components/common/Spacer";
import Label from "@/components/common/Label";
import { LoadingIcon } from "@/assets/images/Loading";
import { useRouter } from "next/navigation";

const INTIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  institution_name: "",
  course: "",
};

export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const navigateToDashboard = React.useCallback(() => {
    router.push(`/dashboard`);
  }, [router]);

  const handleSubmit = React.useCallback(
    ({
      name,
      email,
      phone,
      institution_name,
      course,
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
    institution_name: Yup.string().required("Institution name is required"),
    course: Yup.mixed().required("Course is required"),
  });

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
            <Input
              label="Institution Name"
              placeholder="Institution Name"
              name="institution_name"
            />
            <Spacer size="xs" />
            <Input label="Course" placeholder="Course" name="course" />
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
