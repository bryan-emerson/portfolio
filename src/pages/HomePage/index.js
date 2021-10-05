import { Component } from 'react'
import HomeImage from '../../components/HomeImage/index.js'
import "./style.css"

export default class HomePage extends Component {
  render() {
    return (
      <div className="homeBody">
        <HomeImage />
      </div>
    )
  }
}