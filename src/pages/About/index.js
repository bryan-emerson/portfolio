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
        <p>In my previous role I was one of two product lifecycle management developers for Laborie Medical Technologies; a global corporation spanning 110 countries and providing the best clinicians in the world with the technology needed to provide their patients critical care. In this role I was part of a cross functional team including two electrical engineers, two mechanical engineers, one design verification engineer, and one other software developer. My developer teammate and I were mainly responsible for integrating Laborie devices with hospital electronic medical record systems (some of our more common EMRs were Cerner and Epic). We would accomplish this by video conferencing with the client IT department, explaining how our software worked, noting their requirements, and then implementing the integration. We were also responsible for maintaining legacy device software and embedded firmware, as well as working with the other members of the cross functional team to integrate bluetooth devices and consumable RFID tags/scanners to Laborie’s medical devices. In addition, I supported the sales team as a sales engineer, and assisted the design verification engineer when their workload was heavy.</p>
        <p>My technical foundation was built on eleven years of aircraft maintenance while working as a Crew Chief in the United States Air Force. My ability to effectively  communicate comes from extensive experience in the hospitality sector, working positions ranging from bartender, to consultant, to owner/operator. These roles fortified my strong communication skills, enthusiasm for both customer and team relations, and attention to detail. These combined experiences in technical maintenance and customer relations forged an exemplary foundation for being an effective software engineer.
        </p>
        <p>When I'm not focused on work, you can find me outside hiking, biking, surfing, or collecting stamps in my passport! I am also passionate about photography and design!</p>
        </div>
      </div>
    )
  }
}