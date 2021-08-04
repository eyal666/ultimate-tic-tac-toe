import {createContext, useContext} from "react";

export const PlayerContext = createContext()

export function initPlayerContext() {
	return {
		currentPlayer: 'X',
		totalPlayerMoves: 0,
		turnStage: 'tile',
		activeBoard: Math.floor(Math.random() * 9)
	}
}

export function usePlayerContext() {
	return useContext(PlayerContext)
}
