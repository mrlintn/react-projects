import MyForm from "./components/MyForm";
import "./App.css";
import MyList from "./components/MyList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [newList, setNewList] = useState([]);
  const [edit, setEdit] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Linton's sweet ToDo List</h1>
      </header>
      <MyForm
        input={input}
        setInput={setInput}
        newList={newList}
        setNewList={setNewList}
      />
      <MyList
        newList={newList}
        setNewList={setNewList}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
