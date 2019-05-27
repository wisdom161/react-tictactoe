import React, { Component } from 'react';
import './styles/App.css'
import ChoosePlayer from './components/choosePlayer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
    // bind the method to change the state
    this.handeClick = this.handleClick.bind(this)
  }

  checkWinner() {
    let winLines = 
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ]

    for(let index = 0; index < winLines.length; index += 1) {
      const [a,b,c,] = winLines[index];
      // [a, b, c] = [0, 1, 2] on first iteration
      // this.state.board[a] === this.state.board[0] === 'X'
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c] ) {
        alert(`You've won!`);
        // set the new state with winner
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  handleClick(index) {
    console.log(index)
    // pass in the index(key) of the clicked box
    // don't want to mutate state directly so we make a copy of the board(array)
    const newBoard = this.state.board;
    if(this.state.board[index] === null && !this.state.winner && this.state.player) {
      // check if there's anything in side the board, only execute if there's nothing inside; if there's something inside it wont change between X and O
      // and check if there is no winner
      newBoard[index] = this.state.player;
      // the first player will be X, so we fill the box with X(set in the state)
      this.setState({ 
        board: newBoard,
        player: this.state.player  === "X" ? "O" : "X"
        // set the new state and we check what is the current player. because of the ternary condition; the next box clicked after X will be O
      })
      this.checkWinner()
    }
  }

  setPlayer(player) {
    this.setState({
      player
    })
  }

  renderBoxes() {
    return this.state.board.map(
      (box, index) => 
      <div className="box" key={index} 
      onClick={() => this.handleClick(index)}>
      {box} </div>
    )
  }

  render() {

    let status = this.state.player ? 
    <h2>Next Player Is {this.state.player} </h2> : 
    <ChoosePlayer setPlayer={(e) => this.setPlayer(e)} />
    
    return(
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        {status}
        <div className="board">
        {this.renderBoxes()} 
        </div>
      </div>
      
    )
  }
}

export default App;