import "./App.css";
import WeatherForm from "./WeatherForm";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [newList, setNewList] = useState("");
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  let widget;
  if (!newList.error && newList) {
    widget = (
      <WeatherWidget
        weatherObj={weather}
        newList={newList}
        setWeather={setWeather}
      />
    );
  } else {
    widget = "";
  }
  return (
    <div className="App">
      <p>Check out your local weather by entering your post code below:</p>
      <WeatherForm
        input={input}
        setInput={setInput}
        newList={newList}
        setNewList={setNewList}
        icon={icon}
        setIcon={setIcon}
      />
      {widget}
    </div>
  );
}

export default App;
