/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const AddNew = ({ addToList }) => {
  // có thể viết props ở trên rồi destrucuring ở dưới const {addToList} = props
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(formData); // addToList là function props
    setFormData({ name: "", email: "", sdt: "" }); // clear form di
  };
  useEffect(() => {
    console.log("Current formData:", formData);
  }, [formData]);

  return (
    <div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="">Email: </label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="">Sdt: </label>
          <input type="number" name="sdt" onChange={handleChange} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddNew;
