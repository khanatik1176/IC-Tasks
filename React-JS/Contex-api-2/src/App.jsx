import { useContext } from "react";
import "./App.css";
import { TodoContext } from "./contexts/TodoContext";
 function App()
 {

  const {
    noteTitle,
    Notes,
    editMode,
    HandleSubmit,
    HandleTitleChange,
    editHandler,
    RemoveHandler

  } = useContext(TodoContext);

  return (
    
    <div className="form-area">
      <h2 className="Title">TO DO NOTES </h2>
      <form onSubmit={HandleSubmit}>
        <input type="text" value={noteTitle} onChange={HandleTitleChange} placeholder="Title Name"/>
        <button className="add-btn" onClick={HandleSubmit}>{editMode ? "Update Note" : "Add Note"}</button>
      </form>

      <ul>
        {Notes.map((note)=>(
          <li className="noteItem" key={note.id}>
            <span>{note.title}</span>
            <button className="edit-btn" onClick={ () => editHandler(note)} >Edit</button>
            <button className="remove-btn" onClick={() => RemoveHandler(note.id)}>Delete</button>

          </li>
        )
        )}
      </ul>

    </div>

  );
 }

 export default App;