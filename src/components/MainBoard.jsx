import {useGameContext} from "../context/GameContext";
import {useEffect, useState} from "react";
import {calculateResult, changePlayer, initCells} from "../utils/game-utils";
import SubBoard from "./SubBoard";
import './../css/MainBoard.css'

export default function MainBoard({shouldResetGame}) {
	const {gameContext, setGameContext} = useGameContext()
	const [boards, setBoards] = useState(() => initCells())
	
	function calculateActiveBoard(index, boardsCopy) {
		return boardsCopy[index] !== null ? null : index
	}
	
	function updateMainBoard(tileIndex, subBoardIndex, subBoardResult) {
		
		const {currentPlayer, XSteps, OSteps} = gameContext
		let newBoards;
		
		if (subBoardResult) {
			newBoards = [...boards]
			newBoards[subBoardIndex] = subBoardResult
			setBoards(newBoards)
		}
		
		const playerSteps = currentPlayer === 'X' ?
			{XSteps: XSteps + 1} :
			{OSteps: OSteps + 1}
		
		setGameContext({
			...gameContext,
			...playerSteps,
			activeBoard: calculateActiveBoard(tileIndex, newBoards ?? boards),
			currentPlayer: changePlayer(currentPlayer),
		})
		
		if (subBoardResult) {
			const mainResult = calculateResult(newBoards)
			if (mainResult) {
				setGameContext({...gameContext, winner: gameContext.currentPlayer})
			}
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
					                 isActive={isSubBoardActive(index)}
					                 updateMainBoard={updateMainBoard}
					                 shouldResetGame={shouldResetGame}
					/>
				})
			}
		</div>
	)
}
