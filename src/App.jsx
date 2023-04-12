import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./routes/Register";
import Home from "./routes/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />}></Route>
            <Route path="profile"></Route>
            <Route path="login"></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
