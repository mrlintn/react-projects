import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  render() {
    let allMovies = this.props.movies.map((movie, index) => (
      <Movie
        title={movie.title}
        hours={movie.hours}
        minutes={movie.minutes}
        image={movie.image}
        link={movie.link}
        key={index}
      />
    ));
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/40/Video_Ezy_logo.jpg"
            alt="video ezy"
          />
          <h2>Welcome to Video Ezy</h2>
          <h3>We only have LOTR trilogy lol sry...</h3>
        </div>

        <p>{allMovies}</p>
      </div>
    );
  }
}

export default App;
