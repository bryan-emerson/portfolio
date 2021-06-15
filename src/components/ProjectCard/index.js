import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.projObj.name}</Card.Title>
          <Card.Text>
            {this.props.projObj.info}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere else</Button>
        </Card.Body>
      </Card>
    )
  }
}