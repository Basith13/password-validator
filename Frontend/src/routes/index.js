import React from "react";
import { Route, Routes } from "react-router-dom";
import RenderInput from "../pages/Password";
import App from "../App";

function Main() {
  return (
    <Routes>
      <Route element={<RenderInput />} path="/password" />
      <Route element={<App />} path="/" />

    </Routes>
  );
}

export default Main;
