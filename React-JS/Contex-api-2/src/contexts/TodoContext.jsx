import React from 'react'
import { createContext, useState } from 'react'


export const TodoContext = createContext();


const TodoProvider = (props) => {

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
    
            };

            const todoValue = 
            {
                HandleSubmit,
                noteTitle,
                HandleTitleChange,
                editMode,
                Notes,
                editHandler,
                RemoveHandler,
            }


  return (
    <TodoContext.Provider value={todoValue}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
