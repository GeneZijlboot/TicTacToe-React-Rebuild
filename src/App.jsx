import Score from './Components/Score';
import Title from './Components/Title';
import GameBoard from './Components/GameBoard';
import Copyright from './Components/Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerSwap, setPlayerSwap] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1, make your move.')
  const [gameOver, setGameOver] = useState(false);

  const winChecker = (button) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];

    for(let i = 0; i <  winConditions.length; i++){
      const [a, b, c] = winConditions[i];
      if(button[a] && button[a] === button[b] && button[a] === button[c]){
        return button[a];
      }
    }

    //Checks if there is a draw
    if (button.every((button) => button)) {
      return setCurrentPlayer('Draw!'); 
    }

    return null
  }

  const handleTabClick = (index) => {
    if (board[index] || gameOver) {
      return; //dsisabled button clicks if already marked or game over
    }

    const newBoard = [...board];
    newBoard[index] = playerSwap ? 'O' : 'X';

    setPlayerSwap(!playerSwap);
    setBoard(newBoard);

    const winner = winChecker(newBoard);

    if (winner) {
      setGameOver(true); // Set game over status to true
      playerSwap ? setCurrentPlayer('Player 2 wins!') : setCurrentPlayer('Player 1 wins!');
    } else if (newBoard.every((Button) => Button)) {
      setGameOver(true); // Set game over status to true for a draw
      setCurrentPlayer('Draw!');
    } else {
      playerSwap
        ? setCurrentPlayer('Player 1, make your move.')
        : setCurrentPlayer('Player 2, make your move.');
    }
  };

  const restart = () => {
    const emptyBoard = Array(9).fill(null);
    setCurrentPlayer('Player 1, make your move.');
    setPlayerSwap(false);
    setBoard(emptyBoard);
    setGameOver(false);
  }

  return (
    <div className='md:grid md:grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score currentPlayer={currentPlayer} restart={restart}/>
        <GameBoard board={board} handleTabClick={handleTabClick} />
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;