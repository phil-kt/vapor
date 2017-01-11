import React, { Component } from 'react';
import { Link } from 'react-router';
import './PortfolioPiece.css';

class Portfolio_Piece extends Component {

  constructor(props) {
    super(props);

    this.state = {
      links: false
    };

    if (this.props.github || this.props.devpost || this.props.prototype || this.props.customLinks) {
      this.state ={
        links: true
      }
    }

  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.object.isRequired,
    github: React.PropTypes.string,
    devpost: React.PropTypes.string,
    prototype: React.PropTypes.string,
    customLinks: React.PropTypes.array,
    nextProject: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
    github: undefined,
    devpost: undefined,
    prototype: undefined,
    customLinks: [],
    nextProject: undefined
  }

  render() {

    var linksLength = this.props.customLinks.length

    var linksList = this.props.customLinks.map(function(link, index){
        return (
          <span>
            <a href={link.link} key={index} target="_blank">{link.name}</a>
            {index !== linksLength - 1 ? <span key={index + link.name}>&nbsp;|&nbsp;</span> : null}
          </span>
        );
      });

    return (
      <div ref="portfolio" className={"portfolio-piece " + this.props.title}>
        <Link to="/portfolio" className="nav">portfolio</Link>
        <h1>{this.props.title}</h1>
        {this.state.links ?
          <h3>
            {this.props.github ?
              <a href={this.props.github} target="_blank">github</a>
              : null
            }

            {this.props.github && this.props.devpost ?
              <span>&nbsp;|&nbsp;</span> : null
            }

            {this.props.devpost ?
              <a href={this.props.devpost} target="_blank">devpost</a>
              : null
            }

            {(this.props.github || this.props.devpost) && this.props.prototype ?
              <span>&nbsp;|&nbsp;</span> : null
            }

            {this.props.prototype ?
              <a href={this.props.prototype} target="_blank">prototype</a>
              : null
            }

            {linksList}

          </h3> :
          null
        }
        <div className="content">
          {this.props.content}
          <Link to={this.props.nextProject} className="next">Liked this project? Check out another one.</Link>
        </div>


      </div>
    );
  }
}

export default Portfolio_Piece;
