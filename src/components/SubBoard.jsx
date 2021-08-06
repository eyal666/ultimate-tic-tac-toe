import {useEffect, useState} from "react";
import {calculateResult, changePlayer, initCells} from "../utils/game-utils";
import {useGameContext} from "../context/GameContext";
import './../css/SubBoard.css'

export default function SubBoard({
	                                 boardValue,
	                                 onResult,
	                                 isActive,
	                                 subBoardIndex,
	                                 calculateActiveBoard,
	                                 shouldResetGame
                                 }) {
	const [tiles, setTiles] = useState(() => initCells())
	const {gameContext, setGameContext} = useGameContext()
	
	function onTileClicked(index) {
		if (!isActive || tiles[index] !== null) {
			return
		}
		
		const {currentPlayer, XSteps, OSteps} = gameContext
		
		const newTiles = [...tiles]
		newTiles[index] = currentPlayer
		setTiles(newTiles)
		
		const result = calculateResult(newTiles)
		
		if (result) {
			onResult(subBoardIndex, result)
		}
		
		const playerSteps = currentPlayer === 'X' ?
			{XSteps: XSteps + 1} :
			{OSteps: OSteps + 1}
		
		setGameContext({
			...gameContext,
			...playerSteps,
			activeBoard: calculateActiveBoard(index),
			currentPlayer: changePlayer(currentPlayer),
		})
	}
	
	// function renderPlayerLogo(cellValue, size) {
	// 	if (!cellValue) {
	// 		return ''
	// 	} else {
	// 		return `/img/${cellValue}_${size}.png`
	// 	}
	// }
	
	// function calculateClassName(tileValue) {
	// 	return `tile ${isActive ? 'active-board' : 'hover-disabled'} ${tileValue ? 'hover-disabled' : ''} ${boardValue && (boardValue === 'X' ? 'x-board-color' : 'o-board-color')}`
	// }
	
	function calculateClassName(tileValue) {
		let className = 'tile '
		if (isActive) {
			className += 'active-board '
		}
		
		if (!isActive || tileValue) {
			className += 'hover-disabled '
		}
		
		if (boardValue && boardValue !== 'tie') {
			className += boardValue === 'X' ? 'x-board-color' : 'o-board-color'
		}
		
		return className
	}
	
	
	//zeroing states
	useEffect(() => {
		if (shouldResetGame) {
			setTiles(initCells())
		}
	}, [shouldResetGame])
	
	return (
		<div className="sub-board-item">
			<div className="sub-board-container">
				{boardValue && boardValue !== 'tie' && <img className="big-logo" src={`/img/${boardValue}_bg.png`}/>}
				{
					tiles.map((tileValue, index) => {
						return <div key={index}
						            className={calculateClassName(tileValue)}
						            onClick={() => onTileClicked(index)}>
							{tileValue && <img src={`/img/${tileValue}_sm.png`} alt={tileValue}/>}
						</div>
					})
				}
			</div>
		</div>
	
	)
}