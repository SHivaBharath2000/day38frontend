
import { useState } from "react";
import { getAllStus } from "../../apis/students";
import { useEffect } from "react";
import StudentList from "./studentList";
import AppRoutes from "../../routes";
import { Link } from "react-router-dom";


function App() {
  const [students, setStudents] = useState([]);

  const loadData = async () => {
    const data = await getAllStus();

    if (data instanceof Array) {
      setStudents(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      <StudentList students={students} />
    </>
  );
}

export default App;
