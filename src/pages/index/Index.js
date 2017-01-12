import React, { Component } from 'react';
import { Link } from 'react-router'
import './Index.css';

//component imports
import Popup from '../../components/popup/Popup';

//image imports
import info from '../../media/icons/info/info.png';
import me from '../../media/icons/me_irl.png'
import palette from '../../media/icons/palette.png';
import adobe from '../../media/icons/adobe.png';
import guestbook from '../../media/guestbook.png';
import netscape from '../../media/ns_logo.png';
import ie from '../../media/ie_logo.png';

class Index extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="win-container">
          <Popup title="Welcome to Philippe Kimura-Thollander’s web portal"
                 icon={info}
                 content={
                   <p> This is the virtual information booth for everything about Philippe Kimura-Thollander: designer and programmer.<br/> <br/>
                     Please browse at your leisure. <br/> <br/>
                     このウエブサイトはフイリップ木村ートランダーに対するバーチャル情報ブースです。 <br/> <br/>
                     自由に閲覧してください。
                   </p>
                 }
          />
        </div>
        <div className="page-content">
          <div>
          <ul>
            <li>
              <Link to="/about">
                <img src={me} alt="me" width="32px" />
                <span>about me</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <img src={palette} alt="palette" width="32px"/>
                <span>portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <img src={adobe} alt="resume" width="32px"/>
                <span>resume</span>
              </Link>
            </li>
          </ul>
          </div>

          <a href="https://twitter.com/intent/tweet?text=@link_cable">
            <img src={guestbook} alt="sign our guestbook" className="badges"/>
          </a>
          <p>best viewed with</p>
          <div style={{marginBottom: 10}}>
            <a href="http://www.netscape.ca/ns/browsers/7/download/" target="_blank" style={{marginRight: 20}}>
              <img src={netscape} alt="netscape logo" className="badges"/>
            </a>
            <a href="http://www.oldversion.com/windows/internet-explorer-1-0" target="_blank">
              <img src={ie} alt="ie logo" className="badges"/>
            </a>
          </div>
          <p >
            !!! congratulations, you are the 1,000,000th visitor !!!<br/>
            <a href="https://www.youtube.com/watch?v=5v_v7SHJuw4" target="_blank" className="blink">!!! click here to redeem your prize !!!</a>
          </p>

          <p>
            <a href="http://www.philkt.me/">hate this site? click here</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Index;
