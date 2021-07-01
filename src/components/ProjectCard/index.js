import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import "./style.css"

export default class ProjectCard extends Component {
  // eslint-disable-next-line
  // constructor(props) {
  //   super(props);

  // }

  // getAllProj = (array) => {
  //   for (let i = 0; i < array; i++) {
  //     console.log(i)
  //   }
  // }

  render() {
    // console.log(this.props.projObj)
    if (this.props.projObj.url) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.projObj.image} />
        <Card.Body>
          <Container>
              <Card.Title>{this.props.projObj.name}</Card.Title>
              <Card.Text>
                {this.props.projObj.info}
              </Card.Text>
              <Button className="bb" href={this.props.projObj.git} target="_blank" variant="secondary" >Go To Repo</Button>
              <Button href={this.props.projObj.url} target="_blank" variant="secondary">Deployed Site</Button>
          </Container>
        </Card.Body>
      </Card>
    )
    } else if (this.props.projObj.url === null) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.projObj.image} />
          <Card.Body>
            <Container>
                <Card.Title>{this.props.projObj.name}</Card.Title>
                <Card.Text>
                  {this.props.projObj.info}
                </Card.Text>
                <Button className="bb" href={this.props.projObj.git} target="_blank" variant="secondary" >Go To Repo</Button>
                <Button href={this.props.projObj.url} target="_blank" variant="secondary">You're Already Here!</Button>
            </Container>
          </Card.Body>
        </Card>
      )
    }
  }
}