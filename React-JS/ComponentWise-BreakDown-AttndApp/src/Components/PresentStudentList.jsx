import React from 'react'

const PresentStudentList = (props) => {
  return (
    <div className="list present-list">
    <h2 className="Title">Present Students</h2>
    {props.students.filter((student)=> student.isPresent === true).map((student) => {
      return (
        <li className="list-item" key={student.id} >
          <span className="input-text">{student.name}</span>
          <button onClick={() => props.toggleHandler(student)} className="accident-btn">Accidentally Added</button>
        </li>
      );
    })}
  </div>
  )
}

export default PresentStudentList
