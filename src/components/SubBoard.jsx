import {useEffect, useState} from "react";
import {calculateResult, initCells} from "../game-utils";
import Tile from "./Tile.Jsx";
import {containerStyle} from "./MainBoard";
import {usePlayerContext} from "../Player";

export default function SubBoard({value, key, onResult}) {
	const [tiles, setTiles] = useState(() => initCells())
	const {playerContext, setPlayerContext} = usePlayerContext()
	
	function onTileClicked(index) {
		if (playerContext.turnStage !== 'tile' ||
			playerContext.activeBoard !== key ||
			tiles[index] !== null) {
			return
		}
		
		const newTiles = [...tiles]
		newTiles[index] = playerContext.currentPlayer
		setTiles(newTiles)
		
		const result = calculateResult(newTiles, index)
		
		if (result) {
			onResult(index, result)
		}
		
		setPlayerContext({
			...playerContext,
			turnStage: 'board',
			activeBoard: null,
			totalPlayerMoves: playerContext.totalPlayerMoves + 1
		})
	}
	
	//zeroing states
	useEffect(() => {
		if (value === null) {
			setTiles(initCells())
		}
	}, [value])
	
	return (
		<div style={containerStyle}>
			{
				tiles.map((tileValue, index) => {
					return <Tile value={tileValue} key={index} onClick={() => onTileClicked(index)}/>
				})
			}
		</div>
	
	)
}