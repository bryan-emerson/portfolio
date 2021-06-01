import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ProjectCard extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    console.log(this.props.projObj)
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.projObj.name}</Card.Title>
          <Card.Text>
          {this.props.projObj.info}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}