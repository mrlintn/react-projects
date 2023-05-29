import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const toDos = ["Buy ice cream.", "Eat ice cream.", "Go to the gym."];

const toDoObj = [
  {
    id: 1,
    title: "turn on my computer",
    done: false,
  },
  {
    id: 2,
    title: "learn react",
    done: false,
  },
  {
    id: 3,
    title: "get a job",
    done: false,
  },
  {
    id: 4,
    title: "watch the money pile up",
    done: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <MyList theList={toDos} theList2={toDoObj} /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
