import React from "react";

function ListItem({ todoTitle, setNewList, newList, listItem, edit, setEdit }) {
  const deleteHandler = () => {
    setNewList(newList.filter((el) => el.id !== listItem.id));
  };

  const zaraEditHandler = () => {
    updateInput(newList.filter((el) => el.id === listItem.id));
  };

  const handleSave = (event) => {
    setEdit(event.target.value);
  };

  const saveHandler = () => {
    if (edit) {
      setNewList(
        newList.map((item) => {
          if (item.id === listItem.id) {
            return {
              ...item,
              title: edit,
              edit: !item.edit,
            };
          }
          return item;
        })
      );
      setEdit("");
      console.log("saving");
    } else {
      updateInput();
    }
  };

  const updateInput = () => {
    setNewList(
      newList.map((item) => {
        if (item.id === listItem.id) {
          return {
            ...item,
            edit: !item.edit,
          };
        }
        return item;
      })
    );
    console.log("editing");
  };

  const completeHandler = () => {
    setNewList(
      newList.map((item) => {
        if (item.id === listItem.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={listItem.done ? "todo-item completed" : "todo-item"}>
        <div className={listItem.edit ? "editing" : "saved"}>{todoTitle}</div>
        <input
          className={listItem.edit ? "saved" : "editing"}
          placeholder={listItem.title}
          size={12}
          onChange={handleSave}
        ></input>
      </li>
      <div className={listItem.edit ? "editing" : "visible"}>
        <button
          onClick={completeHandler}
          className={listItem.done ? "completed-btn" : "complete-btn"}
        >
          <i className={listItem.done ? "fas fa-times" : "fas fa-check"}></i>
        </button>
      </div>
      <div className={listItem.done ? "editing" : "visible"}>
        <button
          onClick={zaraEditHandler}
          className={listItem.edit ? "editing" : "edit-btn"}
        >
          <i className="fas fa-pencil"></i>
        </button>
      </div>
      <button
        onClick={saveHandler}
        className={listItem.edit ? "save-btn" : "editing"}
      >
        <i className="fas fa-save"></i>
      </button>
      <button
        onClick={deleteHandler}
        className={listItem.edit ? "editing" : "trash-btn"}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default ListItem;
