import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmList from "./FilmList";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  state = {
    films: TMDB.films,
    faves: [],
    current: {},
  };

  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    fetch(url)
  .then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data); // Take a look at what you get back.
    this.setState({current: data});
  });
 
  };

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex < 0) {
      faves.push(film);
      console.log(`Adding ${film.title} to faves...`);
    } else {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves...`);
    }
    this.setState({ faves });
  };

  render() {
    
    return (
      <div className="film-library">
        <FilmList
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails films={this.state.current} />
      </div>
    );
  }
}

export default App;
