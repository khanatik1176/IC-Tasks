import React from 'react'

const AllStudentList = (props) => {

    const {setStudentName, students, setStudents,setEditMode,setEditableStudent} = props;

    // Edit Student Handler
  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  }


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
  return (
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
  )
}

export default AllStudentList
