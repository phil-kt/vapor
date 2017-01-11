import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'
import './Portfolio.css';

import PortfolioIcon from "../../components/portfolio-icon/PortfolioIcon";

import roam from '../../media/portfolio/roam_logo.png';
import stokr from '../../media/portfolio/stokr.svg';
import rendezvous from '../../media/portfolio/rendezvous.png';
import graffiti from '../../media/portfolio/graffiti.png';
import safeny from '../../media/portfolio/safeny.png';
import dots from '../../media/portfolio/dots.png';
import argon from '../../media/portfolio/argon.png';
import medi from '../../media/portfolio/medi.png';
import hive from '../../media/portfolio/hive.png';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="Portfolio">
        <nav>
          <Link to="/" className="nav">home</Link>
          <Link to="/about" className="nav">about</Link>
          <Link to="/resume" className="nav">resume</Link>
          <a href="http://philkt.me/my-work/" className="nav">escape</a>
        </nav>
        <PortfolioIcon title="dots" icon={dots} link="/portfolio/dots" delay="-5" description="art video"/>
        <PortfolioIcon title="roam" icon={roam} link="/portfolio/roam" delay="-50" description="data with no 4G/3G"/>
        <PortfolioIcon title="stokr" icon={stokr} link="/portfolio/stokr" delay="-20" description="steam games on mac"/>
        <PortfolioIcon title="rendezvous" icon={rendezvous} link="/portfolio/rendezvous" delay="-100" description="find friends with bluetooth"/>
        <PortfolioIcon title="graffiti" icon={graffiti} link="/portfolio/graffiti" delay="-135" description="ar graffiti"/>
        <PortfolioIcon title="argon" icon={argon} link="/portfolio/argon" delay="-350" description="ar storybook" />
        <PortfolioIcon title="medi" icon={medi} link="/portfolio/medi" delay="-400" description="pill reminder ecosystem"/>
        <PortfolioIcon title="the hive" icon={hive} link="/portfolio/hive" delay="-80" description="finding seats case study"/>


      </div>
    );
  }
}

export default Portfolio;
