import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let movies = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    minutes: 58,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0120737/",
  },
  {
    title: "The Two Towers",
    hours: 2,
    minutes: 59,
    image:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0167261/",
  },
  {
    title: "The Return of the King",
    hours: 3,
    minutes: 21,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0167260/",
  },
];

ReactDOM.render(<App movies={movies} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
