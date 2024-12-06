/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useField } from "formik";
import React from "react";

const Radio = ({ label, gender, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-x-3">
        <label className="w-5 h-5 cursor-pointer custom-radio">
          <input
            type="radio"
            {...field}
            {...props}
            className="hidden"
            checked={props.checked}
          />
          <div className="w-full h-full bg-white rounded-full "></div>
        </label>
        <span>{gender}</span>
      </div>
    </div>
  );
};

export default Radio;
