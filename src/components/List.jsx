/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const List = ({ ...props }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getListData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setDataList(response.data);
        console.log(dataList);
      } catch (error) {
        console.log(error);
      }
    };
    getListData();
  }, []);
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
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.username}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.gender}</td>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
