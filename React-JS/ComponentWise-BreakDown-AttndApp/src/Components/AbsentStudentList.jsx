import React from 'react'

const AbsentStudentList = (props) => {
  return (
      <div className="list absent-list">
          <h2 className="Title">Absent Students</h2>
          {props.students.filter((student)=> student.isPresent === false).map((student) => {
            return (
              <li className="list-item" key={student.id} >
                <span className="input-text">{student.name}</span>
                <button onClick={() => props.toggleHandler(student)} className="accident-btn" >Accidentally Added</button>
              </li>
            );
          })}
        </div>
  )
}

export default AbsentStudentList
