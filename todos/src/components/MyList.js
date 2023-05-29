import React from "react";
import ListItem from "./ListItem";

function myList({ newList, setNewList, edit, setEdit }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {newList.map((listItem) => (
          <ListItem
            key={listItem.id}
            todoTitle={listItem.title}
            setNewList={setNewList}
            newList={newList}
            listItem={listItem}
            edit={edit}
            setEdit={setEdit}
          />
        ))}
      </ul>
    </div>
  );
}
export default myList;
