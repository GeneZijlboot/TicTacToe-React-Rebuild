import Score from './Score';
import Title from './Title';
import GameBoard from './GameBoard';
import Copyright from './Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [player, setPlayer] = useState(false);
  const [switchPlayer, setSwitchPlayer] = useState('Player 1, make your move');

  const buttonData = [
    { id: 1, mark: '' },
    { id: 2, mark: '' },
    { id: 3, mark: '' },
    { id: 4, mark: '' },
    { id: 5, mark: '' },
    { id: 6, mark: '' },
    { id: 7, mark: '' },
    { id: 8, mark: '' },
    { id: 9, mark: '' },
  ];

const handleButtonClick = (id, mark) => {
    if(!player){
      buttonData.mark = 'x';
      console.log(mark);
      setSwitchPlayer('Player 2, make your move');
      console.log(switchPlayer);
      setPlayer(true);
    } else if(player){
      mark = 'o';
      console.log(mark);
      setSwitchPlayer('Player 1, make your move');
      console.log(switchPlayer);
      setPlayer(false);
    }

    console.log(`Button ${id} clicked`);
};

  return (
    <div className='grid grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score switchPlayer={switchPlayer} />
        <GameBoard buttonData={buttonData} handleButtonClick={handleButtonClick}/>
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;