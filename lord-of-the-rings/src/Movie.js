import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link}>
          <img height={200} width={135} src={this.props.image} alt="cover" />
        </a>
        <h1>The Lord of the Rings: {this.props.title}</h1>
        <p>
          {this.props.hours}h {this.props.minutes}min
        </p>
      </div>
    );
  }
}

export default Movie;
