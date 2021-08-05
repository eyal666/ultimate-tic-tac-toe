import {useEffect, useState} from "react";
import {calculateResult, initCells} from "../utils/game-utils";
import {useGameContext} from "../context/GameContext";
import './../css/SubBoard.css'

export default function SubBoard({value, subBoardIndex, onResult}) {
	const [tiles, setTiles] = useState(() => initCells())
	const {gameContext, setGameContext} = useGameContext()
	
	function onTileClicked(index) {
		if (gameContext.turnStage !== 'tile' ||
			gameContext.activeBoard !== subBoardIndex ||
			tiles[index] !== null) {
			return
		}
		
		const newTiles = [...tiles]
		newTiles[index] = gameContext.currentPlayer
		setTiles(newTiles)
		
		const result = calculateResult(newTiles, index)
		
		if (result) {
			onResult(index, result)
		}
		
		setGameContext({
			...gameContext,
			turnStage: 'board',
			activeBoard: null,
			totalPlayerMoves: gameContext.totalPlayerMoves + 1
		})
	}
	
	//zeroing states
	useEffect(() => {
		if (value === null) {
			setTiles(initCells())
		}
	}, [value])
	
	return (
		//
		<div className="sub-board-item">
			<div className="sub-board-container">
				{
					tiles.map((tileValue, index) => {
						return <div key={index} className="tile" onClick={() => onTileClicked(index)}>
							<span>{tileValue}</span>
						</div>
						// todo:
						// 	disable inactive sub-boards
					})
				}
			</div>
		</div>
	
	)
}