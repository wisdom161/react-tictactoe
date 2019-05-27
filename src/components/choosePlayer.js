import React, { Component } from 'react';

class ChoosePlayer extends Component {

  handleForm(e) {
    e.preventDefault();
    this.props.setPlayer(e.target.player.value)
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleForm(e)}>
        <label>
          Player X
          <input type="radio" name="player" value="X"/>
        </label>
        <label>
          Player O
          <input type="radio" name="player" value="O"/>
        </label>
          <input type="submit" value="Start" />
      </form>
    )
  }
} 

export default ChoosePlayer;