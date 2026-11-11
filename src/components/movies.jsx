import React, { Component } from "react";
import Like from "./like";

class Movies extends Component {
  render() {
    const { movies, onDelete, onLike, likeData } = this.props;
    return (
      <main className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.content?.map((movie) => (
              <tr key={movie._id}>
                <th> {movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like movie={movie} likeData={likeData} onLike={onLike} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default Movies;