import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./routes/Register";
import Home from "./routes/Home";
import { AuthContext } from "./contexts/AuthContext";
import Profile from "./routes/Profile";
import Login from "./routes/Login";

export default function App() {
  const { currentUser, loading, repoName } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={`/${repoName}/`}>
            <Route index element={<Navigate to="home" />} />
            <Route path={`/${repoName}/home`} element={<Home />}></Route>
            <Route
              path={`/${repoName}/profile`}
              element={currentUser ? <Profile /> : <Navigate to={"/login"} />}
            ></Route>
            <Route
              path={`/${repoName}/login`}
              element={
                !loading &&
                (currentUser ? <Navigate to="/profile" /> : <Login />)
              }
            ></Route>
            <Route
              path={`/${repoName}/register`}
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
