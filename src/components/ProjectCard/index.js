import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css"

export default class ProjectCard extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);

  }

  getAllProj = (array) => {
    for (let i = 0; i < array; i++) {
      console.log(i)
    }
  }

  render() {
    // this.getAllProj(this.props.projObj)
    // console.log(this.props.projObj)
    return (
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={this.props.projObj.image} />
        <Card.Body>
          <Card.Title>{this.props.projObj.name}</Card.Title>
          <Card.Text>
            {this.props.projObj.info}
          </Card.Text>
          <Button variant="primary">Go To Repo</Button>
          <Button variant="primary">Deployed Site</Button>
        </Card.Body>
      </Card>
    )
  }
}