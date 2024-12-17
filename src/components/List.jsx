/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./input/Input";

const List = ({ ...props }) => {
  const [dataList, setDataList] = useState([]);
  const [user, setUser] = useState({})
  const [openEdit, setOpenEdit] = useState(false);
  const [userUpdate, setUserUpdate] = useState({})

  useEffect(() => {

    getListData();

  }, []);
  const getListData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setDataList(response.data);
      console.log(dataList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = (userInfo) => {
    setUser(userInfo);
    setOpenEdit(true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedUser = {
      ...user,
      username: e.target.username.value,
      email: e.target.email.value,
    };

    try {
      const res = await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
      console.log(res);

      setOpenEdit(false);
      getListData();
      console.log("updatedUser", updatedUser);
    } catch (error) {
      console.log(error);
    }

  };

  const handleDeleteUser = async (user) => {

    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      alert("bạn đã xóa user này!")
    } catch (error) {
      console.log(error);
    }
    getListData();
  }


  return (
    <div>
      <h2>Submitted Data:</h2>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>gender</th>
            <th>Job</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.gender}</td>
              <td>{item.job}</td>
              <td><button className="px-4 py-2" onClick={() => handleEditUser(item)}>Edit</button></td>
              <td><button onClick={() => handleDeleteUser(item)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {openEdit && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">username</label>
            <input type="text" defaultValue={user?.username} name="username" />
            <label htmlFor="">email</label>
            <input type="text" defaultValue={user?.email} name="email" />
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default List;
