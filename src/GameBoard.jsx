function GameBoard(){
    return (
        <div className="grid grid-cols-3 grid-rows-3  gap-[5px] p-[5px] rounded-[10px] bg-[snow]">
            <div className="Tabs"><p className="CenterMark">x</p></div>
            <div className="Tabs"><p className="CenterMark">o</p></div>
            <div className="Tabs"><p className="CenterMark">x</p></div>
            <div className="Tabs"><p className="CenterMark">o</p></div>
            <div className="Tabs"><p className="CenterMark">x</p></div>
            <div className="Tabs"><p className="CenterMark">o</p></div>
            <div className="Tabs"><p className="CenterMark">x</p></div>
            <div className="Tabs"><p className="CenterMark">o</p></div>
            <div className="Tabs"><p className="CenterMark">x</p></div>
        </div>
    )
}

export default GameBoard;