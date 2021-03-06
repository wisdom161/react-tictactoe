import React, { Component } from 'react';
import './styles/App.css';
import Status from './components/status';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
    // bind the method to change the state
    this.handeClick = this.handleClick.bind(this);
  }

  checkWinner() {
    // winning game logic
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
      let board = this.state.board;
      // [a, b, c] = [0, 1, 2] on first iteration
      // board[a] === this.state.board[0] === 'X'
      if (board[a] && board[a] === board[b] && board[a] === board[c] ) {
        // set the new state with winner; alert the winner in the callback(asynchronously)
        this.setState({winner: this.state.player}, ()=> {
          alert(`Player ${this.state.winner} has won!`);
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

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }

  render() {

    return(
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <Status 
        player={this.state.player} 
        setPlayer={(e) =>this.setPlayer(e)} 
        winner={this.state.winner}
        resetGame={() => this.resetGame()}
        />
        <div className="board">
          {this.renderBoxes()} 
        </div>
      </div>
      
    )
  }
}

export default App;