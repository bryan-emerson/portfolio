import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './style.css'


export default class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navBack">
        <Navbar.Brand href="/" className="name">Bryan Emerson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="links-container">
          <Nav className="links">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/bryanemerson-/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/bryan-emerson" target="_blank">Github</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/12CYUXDHy1HpexCoWimkxkHj8vrJjY78ds-yaDTRAZXU/edit" target="_blank">Resume</Nav.Link>
          </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}