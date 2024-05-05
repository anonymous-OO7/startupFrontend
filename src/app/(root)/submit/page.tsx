"use client";

import * as React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input";
import Spacer from "@/components/Spacer";
import Label from "@/components/Label";
import FileInput from "@/components/FileInput";
import { LoadingIcon } from "@/assets/Loading";
import useApi from "@/hooks/useApi";
import { UserPostApi } from "@/apis";
import useToast from "@/hooks/useToast";
const INTIAL_VALUES = {
  title: "",
  description: "",
  tags: "",
  file: null as File | null,
};
export default function SubmitPost() {
  const [loading, setLoading] = React.useState(false); // eslint-disable-line
  const { makeApiCall } = useApi();

  const { showToast } = useToast();

  const handleSubmit = React.useCallback(
    ({ title, description, tags, file }: typeof INTIAL_VALUES) => {
      console.log(
        "seding the post data",
        title,
        "---",
        description,
        "---",
        tags,
        "---",
        file,
      );

      setLoading(true);
      return makeApiCall(UserPostApi(title, description, tags, file!))
        .then((response) => {
          console.log(response, "RESPONSE OF Post user");
          showToast("Posted successfully!!", { type: "success" });
        })
        .catch((error) => {
          console.error("Post Error:- ", error);
          showToast("Some error occurred!!", { type: "error" });
        })
        .finally(() => setLoading(false));
    },
    [showToast, makeApiCall],
  );

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Give some description!"),
    tags: Yup.string().required("Give some tags"),
    file: Yup.mixed().required("Give some document is required"),
  });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create a post
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
            <Spacer size="xs" />

            <Input label="Title" placeholder="Enter Title" name="title" />
            <Spacer size="xs" />
            <Input label="Text" placeholder="Enter Text" name="description" />
            <Spacer size="xs" />
            <Input label="Tags" placeholder="Enter tags" name="tags" />
            <Spacer size="xs" />
            <Label>Upload Image & Video</Label>
            <FileInput name="file" type="dropzone" />
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
