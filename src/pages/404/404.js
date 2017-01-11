/**
 * Created by phil on 9/26/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import './404.css';
import agent from '../../media/icons/msagent.png';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src={agent} alt="agent" width="120px"/>
        <Link to="/">forget what you saw here</Link>
      </div>
    );
  }
}

export default NotFound;
