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
import EventDetails from "../Components/EventDetails/EventDetails";
import CharitiesView from "../Components/Charities/CharitiesView";
import CharityDetails from "../Components/CharityDetails/CharityDetails";
import EditProfile from "../Components/EditProfile/EditProfile";
import CaseDetailsUser from "../Components/CaseDetailsUser/CaseDetailsUser";
import Zakat from "../Components/Zakat/Zakat";
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
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route path="/askForVoluntary" element={<AskForVoluntary />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/volunteerForm" element={<VolunteerForm />} />
        <Route path="/charities" element={<CharitiesView />} />
        <Route path="/charity-details/:id" element={<CharityDetails />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/Zakat" element={<Zakat />} />
        <Route path="/case-user-details/:id" element={<CaseDetailsUser />} />
      </Routes>
    </>
  )
}
