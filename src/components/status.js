import React, { Component } from 'react';
import ChoosePlayer from './choosePlayer';

class Status extends Component {
  
  handleReset() {
    this.props.reset()
  }

  renderHtml() {
    if (this.props.winner) {
      return <div><h2>Winner is {this.props.winner}</h2> <button onClick={() => this.props.reset()}>Reset</button></div>
    } else {
      return this.props.player ? 
        <h2>Next Player Is {this.props.player} </h2> : 
        <ChoosePlayer setPlayer={(e) => this.props.setPlayer(e)} />
    }
  }

  render() {
    return (
      <span>{this.renderHtml()}</span>
    )
  }

}

export default Status;