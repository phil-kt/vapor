/**
 * Created by phil on 11/29/16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import './PortfolioIcon.css';

class PortfolioIcon extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    delay: React.PropTypes.string,
  }

  static defaultProps = {
    icon: undefined,
    link: undefined,
    description: undefined,
    delay: "0"
  }

  render() {
    return (

      <Link to={this.props.link} className="icon bounce" style={{animationDelay: this.props.delay + "s"}}>
        <img src={this.props.icon} alt={this.props.title}  width="64px" />
        <p className="description dots-description">{this.props.description}</p>
      </Link>

    );
  }
}

export default PortfolioIcon;
