function Score({ currentPlayer , restart , playerOneWin , playerTwoWin , draw}){
    let message = currentPlayer === 'X' ? 'Player 1, make your move.' : 'Player 2, make your move.';
    if(playerOneWin === true){
        message = 'Player 1 win!';
    }
    if(playerTwoWin === true){
        message = 'Player 2 win!';
    }
    if(draw === true){
        message = 'Draw';
    }
    
    return (
        <div className="flex justify-evenly p-[10px]">
            <p className="text-[snow] p-[7px]">{ message }</p>
            <button className="border-[2px] border-snow rounded-[15px] w-[100px] h-[40px] text-[black] bg-[#2cbaba] hover:bg-[#22d0d0]" onClick={restart}>Restart</button>
        </div>
    )
}

export default Score;