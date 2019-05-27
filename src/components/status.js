import React, { Component } from 'react';
import ChoosePlayer from './choosePlayer';

class Status extends Component {
  render() {

    return (
      this.props.player ? 
      <h2>Next Player Is {this.props.player} </h2> : 
      <ChoosePlayer setPlayer={(e) => this.props.setPlayer(e)} />
    )
  }
}

export default Status;