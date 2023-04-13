import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./routes/Register";
import Home from "./routes/Home";
import { AuthContext } from "./contexts/AuthContext";
import Profile from "./routes/Profile";
import Login from "./routes/Login";

export default function App() {
  const { currentUser, loading } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />}></Route>
            <Route
              path="profile"
              element={currentUser ? <Profile /> : <Navigate to={"/login"} />}
            ></Route>
            <Route
              path="login"
              element={
                !loading &&
                (currentUser ? <Navigate to="/profile" /> : <Login />)
              }
            ></Route>
            <Route
              path="register"
              element={
                !loading &&
                (currentUser ? <Navigate to="/profile" /> : <Register />)
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
