import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import ProjectCard from '../../components/ProjectCard/index.js'

import TicTac from '../../images/tictac.png'
import Memory from '../../images/memory.png'
import MangaFront from '../../images/mangaFront.png'
import MangaBack from '../../images/mangaBack.png'
import StarWars from '../../images/starWarsAPI.png'
import './style.css'

export default class Projects extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Tic Tac Toe',
          info: 'This project is the product of combining the skills we have learned in the first trimester of our software engineering bootcamp. In addition to that an emphasis was placed on self reliance as well as using available reputable documentation for learning new skills. I have created a simple game of memory. Click on cards to find matches!',
          url: 'cynical-pail.surge.sh',
          git: 'https://github.com/bryan-emerson/tic-tac',
          image: TicTac
        },
        {
          name: 'Memory',
          info: 'This project is the product of combining the skills we have learned in the first trimester of our software engineering bootcamp. In addition to that an emphasis was placed on self reliance as well as using available reputable documentation for learning new skills. I have created a simple game of memory. Click on cards to find matches!',
          url: 'overt-library.surge.sh',
          git: 'https://github.com/bryan-emerson/memory',
          image: Memory
        },
        {
          name: 'Manga Meat Front End',
          info: 'bunch of text about proj',
          url: 'http://mangameat.surge.sh/food',
          git: 'https://github.com/bryan-emerson/Manga-Meat-Front',
          image: MangaFront
        },
        {
          name: 'Manga Meat Back End',
          info: 'bunch of text about proj 2',
          url: 'https://manga-meat-back.herokuapp.com/food',
          git: 'https://github.com/bryan-emerson/Manga-Meat-Back',
          image: MangaBack
        },
        {
          name: 'Star Wars API',
          info: 'bunch of text about proj',
          url: 'https://six2121.herokuapp.com/things',
          git: 'https://github.com/bryan-emerson/star_wars_crud',
          image: StarWars
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
          <Row className="cards">
            {allProjects}
          </Row>
        </Container>
      </div>
    )
  }
}