function Score({ currentPlayer , restart }){
    const Player1 = 'Player 1, make your move.';
    const Player2 = 'Player 2, make your move.';

    if(currentPlayer === 'X'){
        currentPlayer = Player1;
    } else if(currentPlayer === 'O'){
        currentPlayer = Player2;
    }
    
    return (
        <div className="flex justify-evenly p-[10px]">
            <p className="text-[snow] p-[7px]">{ currentPlayer }</p>
            <button className="border-[2px] border-snow rounded-[15px] w-[100px] h-[40px] text-[black] bg-[#2cbaba] hover:bg-[#22d0d0]" onClick={restart}>Restart</button>
        </div>
    )
}

export default Score;