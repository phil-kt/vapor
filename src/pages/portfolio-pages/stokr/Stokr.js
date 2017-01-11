import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Stokr.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';

import leadin from '../../../media/portfolio/stokr/stokr-leadin.png';
import stokr1 from '../../../media/portfolio/stokr/stokr_1.png';
import stokr2 from '../../../media/portfolio/stokr/stokr_2.png';
import transparent from '../../../media/transparent.png';

class Stokr extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Stokr"
        github="https://github.com/LinkCable/stokr"
        devpost="https://devpost.com/software/stokr"
        prototype="http://philkt.me/stokr"
        nextProject="/portfolio/hive"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              A macOS app that allows you to play Windows exclusive Steam games on your Macbook.
            </p>
            <img src={leadin} alt="stokr sneak peak" />
            <h2>Origins</h2>
            <p className="starting-paragraph">
              Hate how so many games on Steam are limited to Windows only?? Well so did we at Hack the North 2015, so we decided to take matters into our own hands and create a MacOS app called Stokr.
            </p>
            <h2>Implementation</h2>
            <p className="starting-paragraph">
              Stokr allows you to play any Steam game in your library by abusing Steam's in house streaming feature to fool it into thinking you and an Amazon AWS instance are on the same network, therefore letting a fancy Amazon server do all the hard work of running the game and then simply streaming in to your Mac. Getting a Mac to play Crysis netted us in <a href="https://hackthenorth2015.devpost.com/submissions">the top 10 for Hack the North</a>.
            </p>
            <p>
              Check out the <a href="http://www.philkt.me/stokr">website</a>.
            </p>

            <h2>What I Did</h2>
            <p>
              I worked on creating a front-end registration site, hooking it up with a braintree backend for monetization, as well as coming up with the name and the logo. (A stoker is the person who stokes coal on a train to make steam).
            </p>
            <h2>Screenshots</h2>
            <Carousel className="carousel">
              <img src={stokr2} alt="stokr play steam games on your mac" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
              <img src={stokr1} alt="example of stokr" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
            </Carousel>
            <h2>Demo</h2>
            <div className="iframe-holder stokr-video">
              <img className="ratio" alt="ratio keeper" src={transparent}/>
              <iframe src="https://www.youtube.com/embed/16_f5k4m4UE" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
            </div>
          </span>
        }
      />
    );
  }
}

export default Stokr;
