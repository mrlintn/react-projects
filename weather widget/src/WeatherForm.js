import _ from "lodash";
import Alert from "@mui/material/Alert";

function WeatherForm({ setInput, newList, setNewList, input }) {
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(input) && input.length == 4) {
      setNewList({ postcode: input, id: _.uniqueId(), error: false });
      setInput("");
    } else {
      setNewList({ error: true });
      setInput("");
    }
  };

  return (
    <div className="form">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          value={input}
          onChange={handleChange}
          type="text"
          className="weather-input"
        ></input>
        <button className="weather-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div style={newList.error ? { display: "block" } : { display: "none" }}>
        <Alert severity="error">That's not a postcode you dummy!</Alert>
      </div>
    </div>
  );
}

export default WeatherForm;
