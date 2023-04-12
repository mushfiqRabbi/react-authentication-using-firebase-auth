import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./routes/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route path="home"></Route>
            <Route path="profile"></Route>
            <Route path="login"></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
