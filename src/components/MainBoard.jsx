import {useGameContext} from "../context/GameContext";
import {useEffect, useState} from "react";
import {calculateResult, initCells} from "../utils/game-utils";
import SubBoard from "./SubBoard";
import './../css/MainBoard.css'

export default function MainBoard({shouldResetGame}) {
	const {gameContext, setGameContext} = useGameContext()
	const [boards, setBoards] = useState(() => initCells())
	
	function calculateActiveBoard(index) {
		return boards[index] !== null ? null : index
	}
	
	function onResult(index, subResult) {
		const newBoards = [...boards]
		newBoards[index] = subResult
		setBoards(newBoards)
		
		const mainResult = calculateResult(newBoards)
		if (mainResult) {
			setGameContext({...gameContext, winner: gameContext.currentPlayer})
		}
	}
	
	function isSubBoardActive(index) {
		return boards[index] === null &&
			(gameContext.activeBoard === null || gameContext.activeBoard === index)
	}
	
	useEffect(() => {
		if (shouldResetGame) {
			setBoards(initCells())
		}
	}, [shouldResetGame])
	
	return (
		<div className="board-container">
			{
				boards.map((boardValue, index) => {
					return <SubBoard boardValue={boardValue} key={index} subBoardIndex={index}
					                 calculateActiveBoard={calculateActiveBoard}
					                 isActive={isSubBoardActive(index)}
					                 onResult={onResult}
					                 shouldResetGame={shouldResetGame}
					/>
				})
			}
		</div>
	)
}
