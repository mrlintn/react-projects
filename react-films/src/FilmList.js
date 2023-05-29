import { AllOutTwoTone } from "@mui/icons-material";
import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }
  state = {
    filter: "all",
  };
  handleFilterClick = (filter) => {
    this.setState(() => ({
      filter: filter,
    }));
    console.log(`Setting Filter to ${filter}`);
  };
  render() {
    const isAll = this.state.filter === "all" ? "is-active" : "";
    const isFaves = this.state.filter === "faves" ? "is-active" : "";
    let allFilms = this.state.filter === "faves" ? this.props.faves.map((film, key) => (
      <div key={key}>
        <FilmRow
          films={film}
          isFave={this.props.faves.includes(film)}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          handleDetailsClick={this.props.handleDetailsClick}
        />
      </div>
    )): this.props.films.map((film, key) => (
      <div key={key}>
        <FilmRow
          films={film}
          isFave={this.props.faves.includes(film)}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          handleDetailsClick={this.props.handleDetailsClick}
        />
      </div>
    ));
      
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            onClick={() => this.handleFilterClick("all")}
            className={"film-list-filter " + isAll}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            onClick={() => this.handleFilterClick("faves")}
            className={"film-list-filter " + isFaves}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmList;
