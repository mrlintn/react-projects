import React from "react";
import _ from "lodash";

function myForm({ setInput, newList, setNewList, input }) {
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input !== "") {
      setNewList([
        ...newList,
        { title: input, done: false, edit: false, id: _.uniqueId() },
      ]);
      setInput("");
    } else {
      return input;
    }
  };
  return (
    <form>
      <input
        value={input}
        onChange={handleChange}
        type="text"
        className="todo-input"
      ></input>
      <button
        onClick={(event) => handleSubmit(event)}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default myForm;
