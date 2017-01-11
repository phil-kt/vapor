import React, { Component } from 'react';
import './Rendezvous.css';

import PortfolioPiece from '../../../components/portfolio-piece/PortfolioPiece';
import leadin from '../../../media/portfolio/rendezvous/rendezvous-leadin.png';
import watch from '../../../media/portfolio/rendezvous/rendezvous_apple_watch.png';
import flow from '../../../media/portfolio/rendezvous/rendezvous_flow.png';

class Rendezvous extends Component {

  render() {
    return (
      <PortfolioPiece
        title="Rendezvous"
        github="https://github.com/LinkCable/rendezvous"
        devpost="https://devpost.com/software/rendezvous-fsu7xd"
        prototype="http://share.framerjs.com/t8thbcf7jgdz/"
        nextProject="/portfolio/roam"
        content={
          <span>
            <h2>What is it?</h2>
            <p>
              An iOS app to help you find your friends in crowded places, or if left in the background, to encourage spontaneous meetings with your friends.
            </p>
            <img src={leadin} alt="rendezvous sneak peak" className="portrait"/>
            <h2>Origins</h2>
            <p className="starting-paragraph">
              Do you enjoy the joy of spontaneously encountering your friends when you're out and about? So do I! For that purpose a couple friends and I made Rendezvous.
            </p>
            <p>
              Rendezvous was inspired by the very hackathon it was created for. When our team first arrived at the huge Wells Fargo Center where PennApps XII was being held, we couldn't find each other and barely had cell service! This led us struggling for a solid hour to try and find where we as a team had settled down to work. Based on this, we thought an app which allowed you to find friends when you have no cell service would be awesome to have in certain situations.
            </p>
            <h2>Implementation</h2>
            <p className="starting-paragraph">
              At its core, Rendezvous is an app utilizing Apple's iBeacon/LBTE technology to discover friends around you who are also using it, and where you're close to each other Rendezvous will guide you to one another. Thus, when two friends happen to be close to each other, such as at the same dining hall or in the library, you can be notified that your friends are nearby! It's also useful if you lose a friend at a concert or in the woods where you have no cell service.
            </p>
            <h2>What I Did</h2>
            <p>
              For this app I made the front-end in Swift, integrated it with the backend logic, and designed all the screens you see below.
            </p>
            <h2>Wireframes</h2>
            <img src={flow} alt="wireframes for rendezvous" className="wireframes"/>
            <p>
              Simple three screen user flow, a user signs up by using either Facebook or their contacts so we can know which one of their friends is on the platform. Once they do that, they simply leave the app running and the app will notify them when someone they know is around.
            </p>
            <h2>Prototype</h2>
            <iframe className="framer-embed" src="https://framer.cloud/GrnUD" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>

            <img src={watch} alt="rendezvous on apple watch" className="watch"/>



          </span>
        }
      />
    );
  }
}

export default Rendezvous;
