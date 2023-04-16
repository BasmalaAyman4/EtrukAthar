import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Home from "../Pages/Home";
import Login from "../Components/Login/Login"
import SignUp from './../Components/Sign-up/SignUp'
import Forget from './../Components/Forget/Forget'
import { AuthContext } from "../Components/Context/AuthContext";
import Projects from "../Pages/Projects";
import CardDetails from './../Components/ProjectsDetails/ProjectsDetails'
import AskForVoluntary from "../Components/AskForVoluntary/AskForVoluntary";
import CharitySignUp from "../Components/CharitySignUp/CharitySignUp";
import Events from "../Pages/Events";
import VolunteerForm from "../Components/VolunteerForm/VolunteerForm";
export default function Router() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/charitySign-up" element={<CharitySignUp />} />
        <Route path="/cases" element={<Projects />} />
        <Route path="/card-details" element={<CardDetails />} />
        <Route path="/askForVoluntary" element={<AskForVoluntary />} />
        <Route path="/event" element={<Events />} />
        <Route path="/volunteerForm" element={<VolunteerForm />} />
      </Routes>
    </>
  )
}