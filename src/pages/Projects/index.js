import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/index.js'

export default class Projects extends Component {
  // constructor(props) {
  //   super(props);
  // }



  render() {

    let proj = {
      name: 'project 1',
      info: 'bunch of text about proj',
      url: 'www.google.com'
    }

    return (
      <div>
        <h1>what's good</h1>
        <ProjectCard projObj={proj}/>
      </div>
    )
  }
}