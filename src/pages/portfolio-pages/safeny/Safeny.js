 import React, { Component } from 'react';
import './Safeny.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import logos from '../../../media/portfolio/safeny/logos.png';

class Safeny extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Safeny"
        github="https://github.com/LinkCable/safeny"
        devpost="https://devpost.com/software/safeny"
        prototype="https://marvelapp.com/11d0fb8/screen/16212382"
        nextProject="/portfolio/roam"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              An iOS app that calculates the safest way for you to walk home using NYC Open Data.
            </p>
            <h2>Origins</h2>
            <p className="starting-paragraph">
             Ever felt unsafe walking around the city at night? Safeny <i>(safe-NY)</i> is an app that tries to take away the unease of going home by giving you the safest path home. (in NYC)
           </p>
            <h2>Implementation</h2>
            <p className="starting-paragraph">
              Using NYC Open Data and Google Maps a few friends and I developed an iOS app at HackNY's spring '16 hackathon that takes two destinations and uses crime statistics to determine your "safest" path home. NYCOpenData crime sets are divided into blocks on the map, and we find the "safest" route through these blocks based on their crime coefficient.
            </p>
            <h2>What I Did</h2>
            <p>I worked on designing the app icon as well the front end logic in Swift, such as integration with the Google Maps API and giving our polyline a cool custom color like Uber does.</p>

            <h2>Logo Exploration</h2>
            <img src={logos} alt="potential logos explored" className="logos"/>
            <p>I tried the all seeing eye, a parody of I &hearts; NY, but eventually settled on using an empire state building motif to drive home the fact that the app is NYC specific.</p>
            <h2>Prototype</h2>
            <iframe src="https://marvelapp.com/11d0fb8?emb=1" width="250" height="498" allowTransparency="true" frameborder="0"></iframe>
          </span>
        }
      />
    );
  }
}

export default Safeny;
