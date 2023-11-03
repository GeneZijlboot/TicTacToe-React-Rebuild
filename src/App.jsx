import Score from './Score';
import Title from './Title';
import GameBoard from './GameBoard';
import Copyright from './Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));

  const HandleTabClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
  };
    
  return (
    <div className='grid grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score />

        {/* GameBoard */}
        <GameBoard board={board} HandleTabClick={HandleTabClick}/>

        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;