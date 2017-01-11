import React, { Component } from 'react';
import './Marquee.css';

class Marquee extends Component {

  static propTypes = {
    img: React.PropTypes.object.isRequired,
    content: React.PropTypes.object,
    direction: React.PropTypes.string.isRequired,
    delay: React.PropTypes.number.isRequired,
    href: React.PropTypes.string
  }

  static defaultProps = {
    content: "Undefined",
    delay: 0,
    direction: "right",
    href: undefined,
    img: undefined
  }

  render() {

    return (
      <div className="marquee-container">
        <div className={"marquee marquee-"+this.props.direction} style={{animationDelay: this.props.delay + 's'}}>
          {this.props.href ?
            <a href={this.props.href} target="_blank">
              <img src={this.props.img} alt={this.props.img + " icon"} width="36px" />
            </a>
              :
            <span>
              <img src={this.props.img} alt={this.props.img + " icon"} width="24px" />
              <span>{this.props.content}</span>
            </span>
          }
        </div>
      </div>
    );
  }
}

export default Marquee;
