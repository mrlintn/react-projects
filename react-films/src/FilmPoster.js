import React from 'react'

const FilmPoster = (props) => (
      <img
        src={"https://image.tmdb.org/t/p/w780/" + props.posterPath}
        alt=""
      />
    );

export default FilmPoster;
