import React from 'react'

const StudentForm = (props) => {

    const {studentName,setStudentName,editMode,setStudents,students,editableStudent,setEditMode,setEditableStudent} = props;

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
  
  return (
    <div className="form-area">
    <form className="form" onSubmit={submitHandler}>
      <h2 className="Title-head">{editMode ? "Edit Student :" : "Add Student :"}</h2>
      <input type="text" name="" value={studentName} onChange={HandleTitleChange} placeholder="Student Name"/>
      <button type="submit"className="submit-btn" >{editMode ? "Update Student" : "Create Student"}</button>
    </form>
    </div>
  )
}

export default StudentForm;
