function ListGroup({ onFilter, genres, currentGenre }) {
  const styles = {
    cursor: "pointer",
  };

  return (
    <ul className="list-group">
      <li
        onClick={() => onFilter({ name: "all genres" })}
        style={styles}
        className={!currentGenre ? "list-group-item active" : "list-group-item"}
      >
        All Genres
      </li>
      {genres?.map((g) => (
        <li
          key={g._id}
          onClick={() => onFilter(g)}
          style={styles}
          className={currentGenre == g._id ? "list-group-item active" : "list-group-item"}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;