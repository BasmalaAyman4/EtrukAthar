import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Components/Login/Login"
export default function Router(){
    
    return(
        <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
        </>
    )
}