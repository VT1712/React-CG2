/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";
const menu = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "List",
    to: "/list",
  },
  {
    id: 3,
    name: "Add new",
    to: "/create",
  },
  {
    id: 4,
    name: "Photos",
    to: "/photos",
  },
  {
    id: 5,
    name: "Form",
    to: "/form",
  },
  {
    id: 6,
    name: "UseRef",
    to: "/useref",
  },
];

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", gap: "30px", listStyleType: "none" }}>
          {menu.map((item) => (
            <li key={item.id}>
              {" "}
              <Link to={item.to} style={{ textDecoration: "none" }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
