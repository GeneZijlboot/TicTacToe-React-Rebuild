

function GameBoard({ board , handleTabClick }){
    return (
        <div className="grid grid-cols-3 grid-rows-3  gap-[5px] p-[5px] rounded-[10px] bg-[snow]">
            {board.map((value, index) => (
                <button key={index} className='Button' onClick={() => handleTabClick(index)}>
                    <p className='CenterMark'>{value}</p>
                </button>
            ))}
        </div>
    )
}

export default GameBoard;