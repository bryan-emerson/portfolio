import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/index.js'

export default class Projects extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'project 1',
          info: 'bunch of text about proj',
          url: 'www.google.com'
        },
        {
          name: 'project 2',
          info: 'bunch of text about proj 2',
          url: 'www.google.com'
        },
        {
          name: 'project 3',
          info: 'bunch of text about proj',
          url: 'www.google.com'
        },
        {
          name: 'project 4',
          info: 'bunch of text about proj 2',
          url: 'www.google.com'
        },
        {
          name: 'project 5',
          info: 'bunch of text about proj',
          url: 'www.google.com'
        },
        {
          name: 'project 6',
          info: 'bunch of text about proj 2',
          url: 'www.google.com'
        },
      ]
    };
  }

  getAllProj = (array, index) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
      tempArr.push(<ProjectCard projObj={array[i]} key={i}/>)
    }
    return tempArr;
  }


  render() {
    console.log(this.state.projects)

    let allProjects = "";

    if (this.state.projects.length) {
      allProjects = this.getAllProj(this.state.projects)
    }
    return (
      <div>
        <h1>what's good</h1>
        {/* <ProjectCard projObj={this.state.projects}/> */}
        {allProjects}
      </div>
    )
  }
}