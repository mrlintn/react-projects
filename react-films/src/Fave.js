import React, { Component } from "react";
//import { HomeIcon } from "@mui/material";
//import DeleteIcon from "@mui/icons-material/Delete";

class Fave extends Component {
  render() {
    const handleClick = (e) => {
      e.stopPropagation();
      console.log(`Handling Fave Click`);
      this.props.onFaveToggle();
    };
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div onClick={handleClick} className={"film-row-fave " + isFave}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}

export default Fave;
