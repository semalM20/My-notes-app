import { useState, useContext } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../AlertContext/AlertContext";

const NoteState = (props) => {
  const alertC = useContext(AlertContext);

  const [notes, setNotes] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const fetchNotes = async () => {
    let url = "http://127.0.0.1:5000/notes";
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  const addNote = (title, desc, tag) => {
    let url = "http://127.0.0.1:5000/notes/addnote";
    const addNoteInDB = async () => {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, desc, tag }),
      });
      const data = await response.json();
      setNotes(notes.concat(data));
    };
    addNoteInDB();

    alertC.showAlert("Note added successfully!", "success");
  };

  const deleteNote = (id) => {
    let url = `http://127.0.0.1:5000/notes/deleteNote/${id}`;
    const deleteNoteInDB = async () => {
      const response = await fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      fetchNotes();
    };
    deleteNoteInDB();

    alertC.showAlert("Note deleted successfully!", "success");
  };

  const editNote = (id, title, desc, tag) => {
    let url = `http://127.0.0.1:5000/notes/updateNote/${id}`;
    const updateNoteInDB = async () => {
      const newNote = {
        title,
        desc,
        tag,
      };
      const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(newNote),
      });
      const data = await response.json();
      console.log(data);
      fetchNotes();
      alertC.showAlert("Note updated successfully!", "success");
    };
    updateNoteInDB();
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        fetchNotes,
        searchInput,
        setSearchInput,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
