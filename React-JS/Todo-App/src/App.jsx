import { useState } from "react";
 import "./App.css";

 function App()
 {

  const [noteTitle, setNoteTitle] = useState("");
  const [Notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const HandleTitleChange = (e) =>
    {
      let value = e.target.value;

      setNoteTitle(value);
    }

    const createHandler = () => 
      {
        const newNote = 
        {
          id:Date.now() + "",
          title:noteTitle
        };

        setNotes([...Notes, newNote]);

        setNoteTitle("");

      };

      const editHandler = (note) =>
        {
          setEditMode(true);
          setNoteTitle(note.title);
          setEditableNote(note);
        };

      const updateHandler = () =>
        {
          const updatedNoteList = Notes.map((note) =>
            {
              if(note.id === editableNote.id)
                {
                  return {...note, title:noteTitle};
                }

                return note;
            });

            setNotes(updatedNoteList);
            setEditMode(false);
            setEditableNote(null);
            setNoteTitle("");
        };

    const HandleSubmit = (e) =>
      {
        e.preventDefault();

        if(noteTitle.trim() === "")
        {
          return alert ("Please enter a valid note title");
        }

        editMode? updateHandler() : createHandler();

      };

      const RemoveHandler = (noteId) =>
        {
          const updatedNotes = Notes.filter((note) => note.id !== noteId);

          setNotes(updatedNotes);

        }

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