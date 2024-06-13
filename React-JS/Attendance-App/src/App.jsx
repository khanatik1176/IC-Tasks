import { useState } from "react";
import "./App.css";

function App() {

  // State Declaration 
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  // Title Change Event Handlers
  const HandleTitleChange = (e) => {
    let value = e.target.value;
    setStudentName(value);
  }

  // Submit Event Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if(studentName.trim() === "") {
      return alert("Please Enter Student Name");
    }
    editMode ? updateHandler(): createHandler();
  };

  // Create Student Handler
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  // Edit Student Handler
  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  }

  // Update Student Handler
  const updateHandler = () => {
    const updatedStudentList = students.map((student) => {
      if(student.id === editableStudent.id) {
        return { ...student, name: studentName};
      }
      return student;
    });
    setStudents(updatedStudentList);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };

  // Remove Student Handler
  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudentList);
  };

  // Send to Present List Handler
  const sendToPresentList = (student) => {
    if(student.isPresent !== undefined) {
      return alert(`Student is already in the ${student.isPresent ? "Present List" : "Absent List"}`);
    };
    const updatedStudentList = students.map((item) => {
      if(item.id === student.id) {
        return {...item, isPresent:true};
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  // Send to Absent List Handler
  const sendToAbsentList = (student) => {
    if(student.isPresent !== undefined) {
      return alert(`Student is already in the ${student.isPresent ? "Present List" : "Absent List"}`);
    };
    const updatedStudentList = students.map((item) => {
      if(item.id === student.id) {
        return {...item, isPresent:false};
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  // Toggle Handler
  const toggleHandler = (student) => {
    const updatedStudentList = students.map((item) => {
      if(item.id === student.id) {
        return {...item, isPresent: !item.isPresent};
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  return (
    <div className="App">
      <div className="heading-area">
      <h1 className="heading">Student Attendance</h1>
      </div>
      <div className="form-area">
      <form className="form" onSubmit={submitHandler}>
        <h2 className="Title-head">{editMode ? "Edit Student :" : "Add Student :"}</h2>
        <input type="text" name="" value={studentName} onChange={HandleTitleChange} placeholder="Student Name"/>
        <button type="submit"className="submit-btn" >{editMode ? "Update Student" : "Create Student"}</button>
      </form>
      </div>
      <div className="student-section">
        <div className="list all-list">
          <h2 className="Title">All Students</h2>
          <ul>
            {students.map((student) => {
              return (
                <li className="list-item" key={student.id}>
                  <span className="input-text" >{student.name}</span>
                  <button onClick={() => editHandler(student)} className="edit-btn">Edit</button>
                  <button onClick={() => removeHandler(student.id)} className="remove-btn">Remove</button>
                  <button onClick={() => sendToPresentList(student)} className="present-btn">Send to Present List</button>
                  <button onClick={() => sendToAbsentList(student)} className="absent-btn">Send to Absent List</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list present-list">
          <h2 className="Title">Present Students</h2>
          {students.filter((student)=> student.isPresent === true).map((student) => {
            return (
              <li className="list-item" key={student.id} >
                <span className="input-text">{student.name}</span>
                <button onClick={() => toggleHandler(student)} className="accident-btn">Accidentally Added</button>
              </li>
            );
          })}
        </div>
        <div className="list absent-list">
          <h2 className="Title">Absent Students</h2>
          {students.filter((student)=> student.isPresent === false).map((student) => {
            return (
              <li className="list-item" key={student.id} >
                <span className="input-text">{student.name}</span>
                <button onClick={() => toggleHandler(student)} className="accident-btn" >Accidentally Added</button>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;