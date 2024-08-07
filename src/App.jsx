import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentList from './studentList'
import './App.css'
import { getAllStus } from './apis'

function App() {
  const [students, setStudents] = useState([])
  const loadData=async ()=>{
    const data=await getAllStus();
    setStudents(data)
  }
  useEffect(()=>{
    loadData();
  },[])

  return (
<>
<StudentList students={students}/>
</>
 
  )
}

export default App
