import { useState } from "react";
import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentSection from "./Components/StudentSection";

function App() {

  // State Declaration 
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <div className="heading-area">
      <h1 className="heading">Student Attendance</h1>
      </div>
      <StudentForm 

      studentName={studentName}
      setStudentName={setStudentName}
      students={students}
      setStudents={setStudents}
      editMode={editMode}
      setEditMode={setEditMode}
      editableStudent={editableStudent}
      setEditableStudent={setEditableStudent}
      />
      
      <StudentSection
      
      setStudentName={setStudentName}
      students={students}
      setStudents={setStudents}
      setEditMode={setEditMode}
      editableStudent={editableStudent}
      setEditableStudent={setEditableStudent}
      />
      
      </div>
  );
}

export default App;