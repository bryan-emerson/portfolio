import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/index.js'

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>what's good</h1>
        <ProjectCard />
      </div>
    )
  }
}