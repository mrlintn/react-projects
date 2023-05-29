import Fave from "./Fave";
import FilmPoster from "./FilmPoster";
import React from 'react'

export default function FilmRow(props) {
  return (
    <div
    key={props.key}
    onClick={() => props.handleDetailsClick(props.films)}
    className="film-row"
  >
    <FilmPoster posterPath={props.films.poster_path} />
    <div className="film-summary">
      <h1>{props.films.title}</h1>
      <p>{new Date(props.films.release_date).getFullYear()}</p>
    </div>
    <Fave
      onFaveToggle={props.onFaveToggle}
      isFave={props.isFave}
    />
  </div>
  )
};