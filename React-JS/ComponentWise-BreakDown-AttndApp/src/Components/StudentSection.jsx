import React from 'react'
import AllStudentList from './AllStudentList';
import PresentStudentList from './PresentStudentList';
import AbsentStudentList from './AbsentStudentList';

const StudentSection = (props) => {
    
    const {setStudentName, students, setStudents, setEditMode, setEditableStudent} = props;
    
    
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
    <div className="student-section">
       <AllStudentList 
       
       setStudentName={setStudentName}
       students={students}
       setStudents={setStudents}
       setEditMode={setEditMode}
       setEditableStudent={setEditableStudent}
       />

        <PresentStudentList students={students} toggleHandler={toggleHandler} />
        <AbsentStudentList  students = {students} toggleHandler={toggleHandler} />
         
    </div>
  )
}

export default StudentSection
