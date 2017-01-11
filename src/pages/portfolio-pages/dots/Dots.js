import React, { Component } from 'react';
import './Dots.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import transparent from '../../../media/transparent.png';

class Dots extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Dots"
        nextProject="/portfolio/safeny"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              An art video I made in After Effects for a class.
            </p>
            <h2>Description</h2>
            <p className="starting-paragraph">
              Made for an art class in undergraduate with after effects and inspired by the Google dots from <a href="https://design.google.com/articles/evolving-the-google-identity/">Google's branding</a>, it was <a href="http://zuccairegallery.stonybrook.edu/2016/05/senior-show-2016-awards/">bought by Stony Brook University’s president</a>. But you can watch it here on the Internet for free!
            </p>

            <div className="iframe-holder dots-video">
              <img className="ratio" alt="ratio keeper" src={transparent}/>
              <iframe src="https://www.youtube.com/embed/I1TvCtP7g0s" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
            </div>
          </span>
        }


      />
    );
  }
}

export default Dots;
