/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const List = ({ dataList }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.sdt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {dataList.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Sdt: {item.sdt}</p>
            <hr />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default List;
