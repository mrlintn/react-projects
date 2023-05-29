import React, { useEffect } from "react";

function WeatherWidget({ newList, weatherObj, setWeather, icon, setIcon }) {
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${newList.postcode},AU&appid=f7a97ba6a27d3f67ffe4c0c54dc54148&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [newList]);

  if (weatherObj) {
    return (
      <div className="app-container">
        <h1>{weatherObj.name}</h1>
        <div className="stylez">
          <p>Forecast: {weatherObj.weather[0].main}</p>
          <p>
            Current temp {weatherObj.main.temp}
            {`\xB0`}C
          </p>
          <p>
            Feels like {weatherObj.main.feels_like}
            {`\xB0`}C
          </p>
        </div>
        <div className="stylez right">
          <img
            src={`http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>...</h1>
      </div>
    );
  }
}

export default WeatherWidget;
