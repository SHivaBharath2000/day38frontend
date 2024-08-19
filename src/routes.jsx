import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentList from "./pages/students/studentList.jsx";
import App from "./pages/teachers/App.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/login/login.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import TeacherList from "./pages/teachers/TeacherList.jsx";
import Home from "./pages/Home/Home.jsx";
import React,{useState} from "react";
import VerifyAccount from "./pages/verify account/VerifyAccount.jsx";
const AppRoutes=()=>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<ProtectedRoute component={<Home/>}/>}/>
            <Route path="/students" element={<ProtectedRoute component={<StudentList/>}/>}/>

            <Route path="/teachers" element={<ProtectedRoute component={<App/>}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/verify-account" element={<VerifyAccount/>}/>
            <Route path="/login" element={<Login/>}/>
         </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes