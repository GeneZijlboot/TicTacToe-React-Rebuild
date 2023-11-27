function Score({ currentPlayer , restart , isFinished}){

    //displays whose turn it is, when their aint no winner yet
    let message = currentPlayer === 'X' ? 'Player 1, make your move.' : 'Player 2, make your move.';
    
    //checks for winner
    if(isFinished === true && currentPlayer === null){
        message = 'Draw!';
    } else if(isFinished === true && currentPlayer === 'X'){
        message = 'Player 2 win!';
    } else if (isFinished === true && currentPlayer === 'O'){
        message = 'Player 1 win!';
    }

    return (
        <div className="flex justify-evenly p-[10px]">
            <p className="text-[snow] p-[7px]">{ message }</p>
            <button className="border-[2px] border-snow rounded-[15px] w-[100px] h-[40px] text-[black] bg-[#2cbaba] hover:bg-[#22d0d0]" onClick={restart}>Restart</button>
        </div>
    )
}

export default Score;