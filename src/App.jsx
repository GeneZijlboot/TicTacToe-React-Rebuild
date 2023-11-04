import Score from './Components/Score';
import Title from './Components/Title';
import GameBoard from './Components/GameBoard';
import Copyright from './Components/Copyright';

import './index.css';
import { useState } from 'react';

function App(){

  const [board, setBoard] = useState(Array(9).fill(null));
  // BRAM: What is playerswap? The variable name can me more descriptive, for instance we can make it
  // BRAM: currentPlayer and setCurrentPlayer which can just be X or O
  const [PlayerSwap, setPlayerSwap] = useState(false);

  // BRAM: If we store 'PlayerSwap' which is essentially the player, could we potentially render this text
  // BRAM: based on the PlayerSwap variable? Try and delete this one!
  const [PlayerDisplay, setPlayerDisplay] = useState('Player 1, make your move.');
  const [gameOver, setGameOver] = useState(false);

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

    // BRAM: Nice way to see if there is a winner, but please keep 'Button' camelCase as with all JavaScript variable naming!
    // BRAM: Same goes for WinConditions ;)
    for(let i = 0; i < WinConditions.length; i++){
      const [a, b, c] = WinConditions[i];
      if(Button[a] && Button[a] === Button[b] && Button[a] === Button[c]){
        return Button[a];
      }
    }

    // BRAM: Very smart check, good stuff man!
    //Checks if there is a draw
    if (Button.every((Button) => Button)) {
      return setPlayerDisplay('Draw!'); 
    }

    return null
  }

  // BRAM: Functions (and arrow functions) in JavaScript are also done with camelCase, so in this case
  // const handleTabClick = () =>
  const HandleTabClick = (index) => {
    if (board[index] || gameOver) {
      return; //dsisabled button clicks if already marked or game over
    }

    // BRAM: Do you understand what the ... does in this case? :)
    const newBoard = [...board];
    newBoard[index] = PlayerSwap ? 'O' : 'X';

    setPlayerSwap(!PlayerSwap);
    setBoard(newBoard);

    const winner = WinChecker(newBoard);

    if (winner) {
      // BRAM: Coming back to my comment on line 17
      // BRAM: Try and remove the setPlayerDisplay here, would it be possible to still render out this text?
      setGameOver(true); // Set game over status to true
      PlayerSwap ? setPlayerDisplay('Player 2 wins!') : setPlayerDisplay('Player 1 wins!');
    } else if (newBoard.every((Button) => Button)) {
      setGameOver(true); // Set game over status to true for a draw
      setPlayerDisplay('Draw!');
    } else {
      // BRAM: What is going on here? What is this statement: "boolean ? set : set"
      // BRAM: Can you explain how they work exactly?
      PlayerSwap
        ? setPlayerDisplay('Player 1, make your move.')
        : setPlayerDisplay('Player 2, make your move.');
    }
  };

  const Restart = () => {
    const EmptyBoard = Array(9).fill(null);
    setPlayerDisplay('Player 1, make your move.');
    setPlayerSwap(false);
    setBoard(EmptyBoard);
    setGameOver(false);
  }

  return (
    <div className='md:grid md:grid-cols-3'>
      <div></div>
      <div>
        <Title />
        {/* BRAM: Also props are passed with camelCase, so playerDisplay={playerDisplay} */}
        {/* BRAM: You might think, come on man, but if you work for a company, they will never accept this code */}
        {/* BRAM: Try and fix them all! */}
        <Score PlayerDisplay={PlayerDisplay} Restart={Restart}/>
        <GameBoard board={board} HandleTabClick={HandleTabClick} />
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;