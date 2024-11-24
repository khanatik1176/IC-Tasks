import { useState, useEffect } from "react";
 import "./App.css";

 function App()
 {

  const [noteTitle, setNoteTitle] = useState("");
  const [Notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);


  const getAllNotes = () =>
  {
    fetch("http://localhost:3000/notes")
          .then((res) =>res.json())
          .then((data) => 
            {
              setNotes(data)
            });
  }

  //Data Fetching from the server
    useEffect(()=>
      {
          getAllNotes();
            
      }, []);

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

        fetch(`http://localhost:3000/notes`,{
          method: "POST",
          body: JSON.stringify(newNote),
          headers:
          {
            "Content-type":"application/json",
          },
        }).then(() =>
        {
          getAllNotes();

        });
 

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
          fetch(`http://localhost:3000/notes/${editableNote.id}`,
            {
              method: "PUT",
              body: JSON.stringify({title:noteTitle}),
              headers: {
                "Content-type": "application/json",
              }
            }
          ).then(() => 
          {
            getAllNotes();
          })
          
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
         fetch(`http://localhost:3000/notes/${noteId}`,
          {
            method:"DELETE",

          }
         ).then(() =>
        {
          getAllNotes();
        })


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