import { Component } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute=({component})=>{
    const isAuthenticated=localStorage.getItem('isAuthenticated')
    if(isAuthenticated){
        return component
    }
    return <Navigate to='/login'/>
}
export default ProtectedRoute
