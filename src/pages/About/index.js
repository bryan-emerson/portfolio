import { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import hike from '../../images/hike.jpg';
import './style.css'

export default class About extends Component {
  render() {
    return (
      <div className='body'>
        <h1>Hello!</h1>
        <h2>Thanks for checking out my webpage!</h2>
        <Container className='pic'>
        <Image src={hike} alt="portrait of Bryan" className="img-fluid" align='right'/>
        </Container>
        <div className='words'>
        <p>My Name Is Bryan Emerson! I'm a Frontend Software Engineer with a penchant for clean code and user friendly solutions. I strive to create websites that meet client needs and expectations.
        </p>
        <p>My technical foundation was built on eleven years of aircraft maintenance while working as a Crew Chief in the United States Air Force. My ability to effectively  communicate comes from extensive experience in the hospitality sector, working positions ranging from bartender, to consultant, to owner/operator. These roles fortified my strong communication skills, enthusiasm for both customer and team relations, and attention to detail. These combined experiences in technical maintenance and customer relations forged an exemplary foundation for being an effective software engineer.
        </p>
        <p>When I'm not focused on work, you can find me outside hiking, biking, surfing, or collecting stamps in my passport!</p>
        </div>
      </div>
    )
  }
}