import React, { Component } from "react";
import Movies from "./components/movies";
import ListGroup from "./components/listGroup";
import Pagination from "./components/pagination";
import movies from "./data/data";
import genres from "./data/genres";

class App extends Component {
  state = {
    isFiltered: false,
    currentGenre: null,
    movies,
    genres,
    moviesPerPage: 4,
    likeData: [],
    pages: 0,
    currentPage: 1,
    pagination: [],
  };

  constructor() {
    super();
    const { moviesPerPage } = this.state;
    const pages = Math.floor(movies.length / moviesPerPage);
    let pagination = [];
    let startIndex = 0;
    let endIndex = moviesPerPage;
    for (let i = 1; i <= pages; i++) {
      pagination = [
        ...pagination,
        { pageNumber: i, content: movies.slice(startIndex, endIndex) },
      ];
      startIndex += moviesPerPage;
      endIndex += moviesPerPage;
    }
    this.state.pagination = pagination;
    this.state.pages = pages;
  }

  handleDelete = (movieId) => {
    let { pagination, currentPage, movies } = this.state;
    let currentMovies = pagination.find((p) => p.pageNumber === currentPage);
    currentMovies.content = currentMovies.content.filter(
      (m) => m._id != movieId,
    );
    pagination = pagination.map((p) =>
      p.pageNumber === currentPage ? currentMovies : p,
    );
    movies = movies.filter(m => m._id != movieId);
    this.setState({ pagination, movies });
  };

  handleLike = (movieId) => {
    let { likeData } = this.state;
    const isLiked = likeData.find((l) => l == movieId);
    if (isLiked) {
      likeData = likeData.filter((l) => l != movieId);
    } else {
      likeData = [...likeData, movieId];
    }
    this.setState({ likeData });
  };

  handlePageSelect = (currentPage) => {
    this.setState({ currentPage });
  };

  handleFilter = (genre) => {
    if (genre?.name.toLowerCase() === "all genres") {
      this.setState({ currentGenre: null, isFiltered: false });
    } else {
      this.setState({ currentGenre: genre._id, isFiltered: true });
    }
    console.log(genre);
  };

  render() {
    let { pagination, currentPage, movies, isFiltered, currentGenre, genres } =
      this.state;
    let currentMovies = pagination.find((p) => p.pageNumber == currentPage);
    if (isFiltered) {
      const filteredMovies = movies.filter((m) => m.genre._id == currentGenre);
      currentMovies = {
        content: filteredMovies,
      }
    }
    const title =
      movies.length === 0
        ? "There is no movie in database."
        : `There are ${movies.length} movies in database`;

    return (
      <React.Fragment>
        <h2 className="m-3">{title}</h2>
        <div className="d-flex justify-content-center">
          <ListGroup
            onFilter={this.handleFilter}
            genres={genres}
            currentGenre={currentGenre}
          />
          <Movies
            movies={currentMovies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            likeData={this.state.likeData}
          />
        </div>
        {!isFiltered ? (
          <Pagination
            onPageSelect={this.handlePageSelect}
            pagination={pagination}
            currentPage={currentPage}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default App;