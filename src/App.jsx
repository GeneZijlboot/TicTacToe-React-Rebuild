import Score from './Components/Score';
import Title from './Components/Title';
import GameBoard from './Components/GameBoard';
import Copyright from './Components/Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));
  const [PlayerSwap, setPlayerSwap] = useState(false);
  const [PlayerDisplay, setPlayerDisplay] = useState('Player 1, make your move.');

  const WinChecker = (Button) => {
    const WinConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];

    for(let i = 0; i < WinConditions.length; i++){
      const [a, b, c] = WinConditions[i];
      if(Button[a] && Button[a] === Button[b] && Button[a] === Button[c]){
        return Button[a];
      }
    }
    return null
  }

  const HandleTabClick = (index) => {
    if (board[index]) {
      return; //dsisabled button, when that specific index is true --> return!
    }

    const newBoard = [...board];
    newBoard[index] = PlayerSwap ? 'O' : 'X'; 
    PlayerSwap ? setPlayerDisplay('Player 1, make your move.') : setPlayerDisplay('Player 2, make your move.'); 

    setPlayerSwap(!PlayerSwap);
    setBoard(newBoard);

    const winner = WinChecker(newBoard);

    if(winner){
      console.log('we have a winner!');
    }
  };

  const Restart = () => {
    const EmptyBoard = Array(9).fill(null);
    setPlayerDisplay('Player 1, make your move.');
    setPlayerSwap(false);
    setBoard(EmptyBoard);
  }

  return (
    <div className='grid grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score PlayerDisplay={PlayerDisplay} Restart={Restart}/>
        <GameBoard board={board} HandleTabClick={HandleTabClick} />
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;