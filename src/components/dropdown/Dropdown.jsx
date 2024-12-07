/* eslint-disable no-unused-vars */
import React from "react";

const Dropdown = () => {
  return (
    <div className="p-5">
      <div className=" w-full max-w-[400px]  relative">
        <div className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer ">
          selected
        </div>
        <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg top-full">
          <div className="p-5 cursor-pointer">JS</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer ">TypeScript</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
