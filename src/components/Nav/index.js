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
            <Nav.Link href="#link2">LinkedIn</Nav.Link>
            <Nav.Link href="/">Github</Nav.Link>
          </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}