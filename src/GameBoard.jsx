import Button from "./Button";

function GameBoard({ handleButtonClick , buttonData}){
    return (
        <div className="grid grid-cols-3 grid-rows-3  gap-[5px] p-[5px] rounded-[10px] bg-[snow]">
            {buttonData.map((button) => (
                <Button
                key={button.id}
                mark={button.mark}
                onClick={() => handleButtonClick(button.id)}
                />
            ))}
        </div>
    )
}

export default GameBoard;