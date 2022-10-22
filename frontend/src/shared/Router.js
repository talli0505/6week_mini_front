import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Modify from "../pages/Modify";
import SignUp from "../pages/SignUp";
import Form from "../pages/Form";

function Router() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
