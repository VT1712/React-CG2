/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, useFormik, Form, useField } from "formik";
import * as Yup from "yup";
import Input from "./input/Input";
import Radio from "./radio/Radio";
import DropdownFormik from "./dropdown/DropdownFormik";
import Checkbox from "./checkbox/Checkbox";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];
const FormFormik = () => {
  return (
    <div className="bg-gray-100">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          gender: "male",
          job: "",
          term: false,
        }}
        // obj: gender, job, term
        validationSchema={Yup.object({
          username: Yup.string().required(),
          password: Yup.string()
            .min(8, "Your password must be at least 8 characters or greater")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              {
                message:
                  "Your password must have 8 characters, one uppercase, one lowercase and one number",
              }
            )
            .required(),
          gender: Yup.string()
            .required()
            .oneOf(["male", "female"], "You can only chose male or female"),
          job: Yup.string()
            .required("Please select your")
            .oneOf(["Teacher", "Developer", "Doctor", "Constructor"]),
          term: Yup.boolean().oneOf(
            [true],
            "Please check the term and conditions"
          ),
        }).required()}
        onSubmit={(value, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(value);
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {(formik) => {
          const watchGender = formik.values.gender;
          return (
            <form
              action=""
              className="max-w-[300px] mx-auto my-10"
              onSubmit={formik.handleSubmit}
            >
              <Input
                name="username"
                id="username"
                type="text"
                label="username: "
                placeholder="Enter your username "
              ></Input>
              <Input
                name="password"
                id="password"
                type="password"
                label="Password: "
                placeholder="Enter your password "
              ></Input>
              <Input
                name="email"
                id="email"
                type="email"
                label="Email: "
                placeholder="Enter your Email "
              ></Input>
              <div className="flex flex-col gap-3 mt-5">
                <label className="cursor-pointer">Gender</label>
                <div className="flex items-center gap-5">
                  <Radio
                    name="gender"
                    value="male"
                    checked={watchGender === "male"}
                    gender="Male"
                  ></Radio>
                  <Radio
                    name="gender"
                    value="female"
                    checked={watchGender === "female"}
                    gender="Female"
                  ></Radio>
                </div>
              </div>
              <DropdownFormik
                labelText="Your job"
                data={dropdownData}
                name="job"
                setValue={formik.setFieldValue}
              ></DropdownFormik>
              <Checkbox name="term">I accept the terms and conditions</Checkbox>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold `}
              >
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormFormik;
