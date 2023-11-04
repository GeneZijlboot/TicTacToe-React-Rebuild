

// BRAM: Do you understand what is going on here, why are we doing
// BRAM: { board, handleTabClick } - before when you had a function you didn't have the {}
// BRAM: It is correct, but do you understand the why behind it ;)
function GameBoard({ board , HandleTabClick }){
    return (
        <div className="grid grid-cols-3 grid-rows-3  gap-[5px] p-[5px] rounded-[10px] bg-[snow]">
            {board.map((value, index) => (
                <button key={index} className='Button' onClick={() => HandleTabClick(index)}>
                    <p className='CenterMark'>{value}</p>
                </button>
            ))}
        </div>
    )
}

export default GameBoard;