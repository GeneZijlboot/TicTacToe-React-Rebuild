import Score from './Score';
import Title from './Title';
import GameBoard from './GameBoard';

import './index.css';
import Copyright from './Copyright';

function App(){
  return (
    <div className='grid grid-cols-3'>
      <div></div>
      <div>
        <Title />
        <Score />
        <GameBoard />
        <Copyright />
      </div>
      <div></div>
    </div>
  )
}

export default App;