import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import ProjectCard from '../../components/ProjectCard/index.js'

import TicTac from '../../images/tictac.png'

export default class Projects extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Tic Tac Toe',
          info: 'bunch of text about proj',
          url: 'cynical-pail.surge.sh',
          image: TicTac
        },
        {
          name: 'Memory',
          info: 'bunch of text about proj 2',
          url: 'overt-library.surge.sh'
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
      tempArr.push(<ProjectCard projObj={array[i]} key={i} />)
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
        {/* {allProjects} */}
        <Container fluid="md">
          <Row>
            {allProjects}
          </Row>
        </Container>
      </div>
    )
  }
}