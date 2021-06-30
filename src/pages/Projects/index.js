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
import DadJokes from '../../images/dadJokes.png'
import GameOfWar from '../../images/gameOfWar.png'
import './style.css'

export default class Projects extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Tic Tac Toe',
          info: 'This project digital representation of the classic game . Languages used incluse Javascript, HTML, and CSS. DOM manipulation has been used to create interactive gameplay with the HTML elements. This project has been deployed using surge.',
          url: 'https://cynical-pail.surge.sh',
          git: 'https://github.com/bryan-emerson/tic-tac',
          image: TicTac
        },
        {
          name: 'Memory',
          info: 'This project is a simple game of memory. Click on cards to find matches! The project was built with a focus on functional programming as opposed to object oriented programming. Vanilla Javascript & CSS were used along with DOM manipulation to create interactive gameplay with the HTML elements.',
          url: 'https://overt-library.surge.sh',
          git: 'https://github.com/bryan-emerson/memory',
          image: Memory
        },
        {
          name: 'Manga Meat Front End',
          info: 'bunch of text about proj',
          url: 'http://mangameat.surge.sh',
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
          name: 'Random Dad Joke Generator',
          info: 'bunch of text about proj 2',
          url: 'http://cheerful-passenger.surge.sh/',
          git: 'https://github.com/bryan-emerson/dad-jokes',
          image: DadJokes
        },
        {
          name: 'Game of War',
          info: 'This is a digital representation of the card game war. It is based mainly in javascript and is built with Object Oriented Programming. It is played in the console. Game logic, ES6 classes, and methods have been used to create the playing environment.',
          url: 'https://bryan-emerson.github.io/',
          git: 'https://github.com/bryan-emerson/bryan-emerson.github.io',
          image: GameOfWar
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