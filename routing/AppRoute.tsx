import React from "react";
import { Routes, Route } from "react-router";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/sign-up" element={<SignUpForm />} />
    </Routes>
  );
}

export default AppRoute;
