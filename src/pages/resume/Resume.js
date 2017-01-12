import React, { Component } from 'react';
import { Link } from 'react-router'
import './Resume.css';

import resume from '../../media/resume.png';
import hamtaro from '../../media/gifs/hamtaro.gif';
import dinosaur from '../../media/gifs/dinosaur.gif';
import snorlax from '../../media/gifs/snorlax.gif';
import gun from '../../media/gifs/gun.gif';
import jazz_cups from '../../media/gifs/jazz_cups.gif';
import bopit from '../../media/gifs/bopit.gif';
import simpsons from '../../media/gifs/simpsons.gif';

class Resume extends Component {

  render() {
    return (
      <div className="Resume">
        <nav>
          <Link to="/" className="nav">home</Link>
          <Link to="/about" className="nav">about</Link>
          <Link to="/portfolio" className="nav">portfolio</Link>
          <a href="http://philkt.me/" className="nav">escape</a>
        </nav>
        <img src={hamtaro} alt="hamtaro eating noodles" id="hamtaro" />
        <img src={dinosaur} alt="rad dino on keyboard" id="dinosaur"/>
        <img src={snorlax} alt="sleepy snorlax" id="snorlax"/>
        <img src={gun} alt="pew pew gun" id="gun"/>
        <img src={jazz_cups} alt="jazzy cups" id="jazz-cups"/>
        <a href="https://www.youtube.com/watch?v=7hPX_SresUM" target="_blank">
          <img src={bopit} alt="bop it twist it pull it" id="bopit"/>
        </a>
        <a href="https://www.youtube.com/watch?v=rTfa-9aCTYg" target="_blank">
          <img src={simpsons} alt="lisa watching ralph roll away" id="simpsons"/>
        </a>
        <div className="pdf">
          <a href={process.env.PUBLIC_URL + '/philippe_kimura-thollander_resume.pdf'} target="_blank">
            <img src={resume} alt="click for my resume" />
          </a>
        </div>

      </div>
    );
  }
}

export default Resume;
