import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }
  function handleButton() {
    props.submitNote(note);
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button type="button" onClick={handleButton}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
