/**
 * Created by phil on 9/26/16.
 */
import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
import Marquee from '../../components/marquee/Marquee';
import './About.css';

import asl from '../../media/icons/asl.png';
import nerd from '../../media/icons/nerd.png';
import shades from '../../media/icons/shades.png';
import thumbs_up from '../../media/icons/thumbs_up.png';
import envelope from '../../media/icons/envelope.png';
import script from '../../media/icons/script.png';
import camera from '../../media/icons/camera.png';
import msn from '../../media/icons/msn.png';
import network from '../../media/icons/network.png';
import gear from '../../media/icons/gear.png';
import globe from '../../media/icons/globe.png';
import cd from '../../media/icons/cd.png';
import laptop from '../../media/icons/laptop.png';

class About extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="About">
        <nav>
          <Link to="/" className="nav">home</Link>
          <Link to="/portfolio" className="nav">portfolio</Link>
          <Link to="/resume" className="nav">resume</Link>
          <a href="http://philkt.me/" className="nav">escape</a>
        </nav>
        <Marquee content="22/m/atlanta+nyc" direction="left" delay="-5" img={asl}/>
        <Marquee img={gear}
                 content="aspiring ui designer / ux engineer"
                 direction="left"
                 delay="-7"/>
        <Marquee img={nerd}
                 content="currently studying my master’s degree in hci at georgia tech"
                 direction="right"
                 delay="-8"/>
        <Marquee img={envelope}
                 href="mailto:hi@philkt.me?Subject=A E S T H E T I C"
                 direction="left"
                 delay="-35" />
        <Marquee img={shades}
                 content="did undergraduate studies in computer science at stony brook"
                 direction="right"
                 delay="-5"/>
        <Marquee img={script}
                 href="https://www.github.com/linkcable/"
                 direction="left"
                 delay="-100"/>
        <Marquee img={globe}
                 content="studied abroad in korea and france"
                 direction="left"
                 delay="-7"/>
        <Marquee img={camera}
                 href="https://www.instagram.com/link_cable/"
                 direction="right"
                 delay="-2"/>
        <Marquee img={laptop}
                 content="previously interned at HBO and Pypestream"
                 direction="left"
                 delay="-19"/>
        <Marquee img={network}
                 href="https://www.linkedin.com/in/linkcable/"
                 direction="right"
                 delay="-69"/>
        <Marquee img={thumbs_up}
                 content="like hackathons, emojis, and vaporwave"
                 direction="right"
                 delay="-8"/>
        <Marquee img={cd}
                 href="http://www.last.fm/user/LinkCable"
                 direction="right"
                 delay="-107"/>
        <Marquee img={msn}
                 href="https://www.twitter.com/link_cable/"
                 direction="left"
                 delay="-45"/>
      </div>
    );
  }
}

export default About;
