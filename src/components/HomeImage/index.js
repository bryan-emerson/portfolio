import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import image from './image/_DSF1713.jpg'

export default class HomeImage extends Component {
  render() {
    return (
      <Container fluid>
        <Image src={image} alt="Logo" fluid />
      </Container>
    )
  }
}