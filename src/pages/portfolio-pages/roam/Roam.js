import React, { Component } from 'react';
import './Roam.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import leadin from '../../../media/portfolio/roam-leadin.png';

class Roam extends Component {

  render() {
    return (
        <PortfolioPiece
          title="Roam"
          github="https://github.com/sayalvarun/Roam"
          devpost="https://devpost.com/software/roam-yno5mc"
          prototype="https://marvelapp.com/235a4ad/screen/16203183"
          nextProject="/portfolio/stokr"
          content={
            <span>
              <h2>What is it?</h2>
              <p>
                An Android app that allows you to get Google Maps directions, call an Uber, or check the weather, all without using an mobile data.
              </p>
              <img src={leadin} alt="roam sneak peak" className="portrait"/>
              <h2>Origins</h2>
              <p className="starting-paragraph">
                Ever found yourself without internet in the woods or just run out of data in your data plan? Don’t fear, for now there’s roam to grab need directions, an Uber, or the weather when you have no internet on your phone!
              </p>
              <p>
                Roam came about due to the times that me and my friends found ourselves without data on our cellphones. For one friend it was when he hit his data cap, for me it was when I was out camping in Vermont. In both of these scenarios we both had basic cell service (e.g. 2G), but would have liked to have the niceties that comes with a 3G or 4G connection. So we decided to see if we could make your phone accomplish anything that it can on a data connection with just text messages. (We succeeded!)
              </p>
              <h2>Implementation</h2>
              <p className="starting-paragraph">
                Made at HackNY’s fall '15 hackathon, Roam uses SMS and text encoding to send your text to a server, which is then decoded. The server then performs the action you wanted to do using the API (Google Maps, Uber, or Accuweather), and then returns the information in encoded text. The app decodes the text, and the front end displays the text in a user readable manner.</p>
              <p>
                At then end of the day we had a working demo which could get you Google Maps directions from anywhere, get you the current and upcoming weather for your location, and call you an Uber for where you need to go, all through the power of SMS!
              </p>
              <p>To be honest it isn’t one of the prettiest things in the world, as it was one of my first forays into design. This also means I didn't keep many artifacts. We only had 24 hours, but we ended up <a href="http://hackny.org/2015/11/f2015-nytm/">winning hackNY</a>!
              </p>

              <h2>What I Did</h2>
              <p>
                I worked on the front-end logic including API integration with Google Maps and Dark Sky, as well as the UI using android xml markup and java.
              </p>
              <h2>Prototype</h2>
              <iframe src="https://marvelapp.com/235a4ad?emb=1" width="250" height="484" allowTransparency="true" frameborder="0"></iframe>
            </span>
          }
              />
    );
  }
}

export default Roam;
