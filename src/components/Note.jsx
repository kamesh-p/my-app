import React from "react";

function Note(props) {
  function buttonClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={buttonClick}>DELETE</button>
    </div>
  );
}

export default Note;
