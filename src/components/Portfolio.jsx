import React, { Component } from "react";

import Toolbar from "./Toolbar";

import ProjectList from "./ProjectList";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
    };

    this.data = this.props.data;
    this.filtered = this.data;

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    this.setState({ selected: filter });
    if (filter === "All") {
      this.filtered = this.data;
    } else {
      this.filtered = this.data.filter((obj) => obj.category === filter);
    }
  }

  render() {
    return (
      <>
        <div className="mt-20">
          <Toolbar
            filters={this.state.filters}
            selected={this.state.selected}
            onSelectFilter={this.onSelectFilter}
          />
          <div class="mt-20">
            <ProjectList projects={this.filtered} />
          </div>
        </div>
      </>
    );
  }
}
