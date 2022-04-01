import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getstarted from "./Components/Getstarted";
import Landing from "./Components/Landing";
import Last from "./Components/Last";
import Products from "./Components/Products";
import "./styles.css";

function App() {
  const [list, setList] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/get-started" element={<Getstarted />}></Route>
        <Route
          path="/products"
          element={<Products setList={setList} />}
        ></Route>
        <Route path="/last" element={<Last list={list} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
