import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destroyed: false
    }
  }

  static propTypes = {
    icon: React.PropTypes.object,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    title: "Undefined",
    content: "Undefined",
    icon: undefined
  }

  destroy() {
    this.setState({destroyed: true});
  }

  render() {

    return (
      <Draggable bounds="body">
        <div className={"win98 " + (this.state.destroyed ? "hidden" : "")}>
          {this.props.image ?
            <img src={this.props.icon} alt="gif" style={{width: "100%"}}/> :
            null
          }
          <div className="window">
            <div className="header">
              <img className="icon" alt="icon" src={this.props.icon}/>
              <span>{this.props.title}</span>
              <div className="buttons">
                <button onClick={this.destroy.bind(this)}>&times;</button>
              </div>
            </div>
            <div className="content">
              {this.props.content}
              <div className="buttons">
                <p className="button-container">
                  <a href="http://philkt.me/my-work" className="alternative">
                    <button>Alternative Site</button>
                  </a>
                </p>
                <p className="button-container">
                  <button onClick={this.destroy.bind(this)}>OK</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Popup;
