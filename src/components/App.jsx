import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, addNote] = useState([]);
  function submitNote(newNote) {
    addNote((prevList) => {
      return [...prevList, newNote];
    });
  }
  function deleteNote(noteID) {
    addNote(noteList.filter((note, index) => index !== noteID));
  }
  return (
    <div>
      <Header />
      <CreateArea submitNote={submitNote} />
      {noteList.map((currentNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currentNote.title}
            content={currentNote.content}
            handleDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
