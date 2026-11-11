import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { pagination, onPageSelect, currentPage } = this.props;
    const isActive = (p) =>
      p === currentPage ? "page-item active" : "page-item";
    return (
      <nav aria-label="Page navigation example" className="container">
        <ul className="pagination">
          {pagination.map((page) => (
            <li
              onClick={() => onPageSelect(page.pageNumber)}
              key={page.pageNumber}
              className={isActive(page.pageNumber)}
            >
              <a className="page-link">{page.pageNumber}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;