import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Home from "../Pages/Home";
import Login from "../Components/Login/Login"
import SignUp from './../Components/Sign-up/SignUp'
import CharitySignup from './../Components/CharitySignUp/CahritySignUp'
import Forget from './../Components/Forget/Forget'
import { AuthContext } from "../Components/AuthContext";
export default function Router() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={authContext.auth.email ? <Home /> : <Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/charitySign-up" element={<CharitySignup />} />
      </Routes>
    </>
  )
}