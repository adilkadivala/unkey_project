import React from "react";
import { Routes, Route } from "react-router-dom";
import Public from "../pages/Public";
import Admin from "../pages/Admin";
import Pages from "../pages";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/public" element={<Public />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Pathes;
