import React, { Component } from "react";

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list">
        {projects.map((obj) => (
          <div className="project-item" key={obj.id}>
            <img src={obj.img} alt="" />
          </div>
        ))}
      </div>
    );
  }
}
