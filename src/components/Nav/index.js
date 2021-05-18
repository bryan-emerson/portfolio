import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'


export default class Nav extends Component {
  render() {
    return (
      <Navbar className="nav">
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}