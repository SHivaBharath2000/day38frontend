import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import TeacherList from "./TeacherList";
 import { Link } from "react-router-dom";
 import { getAllTeachers } from "../../apis/teacher";

function App() {
  const [teachers, setTeachers] = useState([]);
  const token = localStorage.getItem("token");
  const userDetails = jwtDecode(token);
  console.log(userDetails)
  const isAuthorized=userDetails.role==="Teacher"
  const loadData = async() => {
    console.log("loadData function called");
    // Uncomment the line below if you want to fetch data from an API
    setTeachers(await getAllTeachers());
    // setTeachers(initialTeachers);
    console.log("Initial teachers set:", initialTeachers);
  };

  useEffect(() => {
    if(isAuthorized){
    loadData();
    }
  }, []);

const renderCheck=()=>{
  if(isAuthorized){
    return<TeacherList teachers={teachers} />
  }else{
    return <h1>Your Not Authorised</h1>
  }
}


  return (
    <>
      <Link to="/">Home</Link>
      {renderCheck()}
    </>
  );
}

export default App;
