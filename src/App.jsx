import Score from './Components/Score';
import Title from './Components/Title';
import GameBoard from './Components/GameBoard';
import Copyright from './Components/Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));
  const [PlayerSwap, setPlayerSwap] = useState(false);
  const [PlayerDisplay, setPlayerDisplay] = useState('Player 1, make your move.')

  const HandleTabClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = PlayerSwap ? 'O' : 'X'; 
    PlayerSwap ? setPlayerDisplay('Player 1, make your move.') : setPlayerDisplay('Player 2, make your move.'); 
    setPlayerSwap(!PlayerSwap);
    setBoard(newBoard);
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

        {/* GameBoard */}
        <GameBoard board={board} HandleTabClick={HandleTabClick} />

        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;