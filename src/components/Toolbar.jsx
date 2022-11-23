import React, { Component } from "react";

export default class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <ul className="sort-list">
        {filters.map((fl, i) => (
          <li
            className={selected === fl ? "sort-item active" : "sort-item"}
            onClick={() => onSelectFilter(fl)}
            key={i}
          >
            {fl}
          </li>
        ))}
      </ul>
    );
  }
}
