import React, { Component } from "react";

class Like extends Component {
  render() {
    const { onLike, likeData, movie } = this.props;
    const liked = likeData.find((l) => l == movie._id);
    const likeClass = !liked ? "-o" : "";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={() => onLike(movie._id)}
        className={`fa fa-heart${likeClass}`}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;