function Score({ currentPlayer , restart }){
    return (
        <div className="flex justify-evenly p-[10px]">
            <p className="text-[snow] p-[7px]">{ currentPlayer }</p>
            <button className="border-[2px] border-snow rounded-[15px] w-[100px] h-[40px] text-[black] bg-[#2cbaba] hover:bg-[#22d0d0]" onClick={restart}>Restart</button>
        </div>
    )
}

export default Score;