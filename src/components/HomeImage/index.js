import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import image from './image/_DSF1713.jpg'

export default class HomeImage extends Component {
  render() {
    return (
      <Container fluid >
        <figure className="position-relative">
          <Image src={image} alt="portrait of Bryan" className="img-fluid" />
          <figcaption>
            Software Engineer
          </figcaption>
        </figure>
      </Container>
    )
  }
}