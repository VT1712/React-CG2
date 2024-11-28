/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import List from "./components/List";
import AddNew from "./components/AddNew";
import Page404 from "./components/Page404";

function App() {
  const [dataList, setDataList] = useState([]);
  const addToList = (data) => {
    setDataList((prev) => [...prev, data]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List dataList={dataList} />} />
          <Route path="/create" element={<AddNew addToList={addToList} />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
