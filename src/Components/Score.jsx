function Score({ PlayerDisplay , Restart }){
    return (
        <div className="flex justify-evenly p-[10px]">
            <p className="text-[snow] p-[7px]">{PlayerDisplay}</p>
            <button className="border-[2px] border-snow rounded-[15px] w-[100px] h-[40px] text-[black] bg-[#2cbaba] hover:bg-[#22d0d0]" onClick={Restart}>Restart</button>
        </div>
    )
}

export default Score;