import {useGameContext} from "../context/GameContext";
import {useState} from "react";
import {calculateResult, changePlayer, initCells} from "../utils/game-utils";
import SubBoard from "./SubBoard";
import './../css/MainBoard.css'

export default function MainBoard() {
	const {gameContext, setGameContext} = useGameContext()
	
	const [boards, setBoards] = useState(() => initCells())

	
	function onBoardClicked(index) {
		//todo:
		if (gameContext.turnStage !== 'board' ||
			boards[index] !== null) {
			return;
		}
		
		setGameContext({...gameContext, activeBoard: index, currentPlayer: changePlayer(gameContext.currentPlayer)})
	}
	
	function onResult(subResult, index) {
		const newBoards = [...boards]
		newBoards[index] = subResult
		setBoards(newBoards)
		
		const mainResult = calculateResult(newBoards, index)
		if (mainResult) {
			setGameContext({...gameContext, winner: gameContext.currentPlayer})
		}
	}
	

	
	return (
		<div className="board-container">
			{
				boards.map((boardValue, index) => {
					return <SubBoard value={boardValue} subBoardIndex={index} key={index} onClick={() => onBoardClicked(index)}
					                 onResult={onResult}/>
					//	todo:
					// 	disable inactive sub-boards
				})
			}
			{/*
			
			*/}
		</div>
	)
}
