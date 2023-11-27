import Score from './Components/Score';
import Title from './Components/Title';
import GameBoard from './Components/GameBoard';
import Copyright from './Components/Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isFinished, setIsFinished] = useState(false);

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

    return null
  }

  const handleTabClick = (index) => {
    if (board[index] || isFinished) {
      return; //dsisabled button clicks if already marked or game over
    }

    const newBoard = [...board];
    if(currentPlayer === 'X'){
      newBoard[index] = 'X';
      setCurrentPlayer('O');
    } else if(currentPlayer === 'O'){
      newBoard[index] = 'O';
      setCurrentPlayer('X');
    }
    setBoard(newBoard);

    const winner = winChecker(newBoard);

    if (winner) { 
      if(currentPlayer === 'X'){
        setIsFinished(true);
      } else if(currentPlayer === 'O'){
        setIsFinished(true);
      }
    } else if (newBoard.every((Button) => Button)) {
        setIsFinished(true); // Set game over status to true for a draw
        setCurrentPlayer(null);
    }
  };

  const restart = () => {
    const emptyBoard = Array(9).fill(null);
    setCurrentPlayer('X');
    setIsFinished(false);
    setBoard(emptyBoard);
  }

  return (
    <div className='md:grid md:grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score isFinished={isFinished} currentPlayer={currentPlayer} restart={restart}/>
        <GameBoard board={board} handleTabClick={handleTabClick} />
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;