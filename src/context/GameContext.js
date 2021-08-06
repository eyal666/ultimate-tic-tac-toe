import {createContext, useContext} from "react";

export const GameContext = createContext()

export function initGameContext() {
	return {
		// 'X' or 'O'
		currentPlayer: 'X',
		XSteps: 0,
		OSteps: 0,
		// 0-8 or null (all)
		activeBoard: null,
		// 'X', 'O', 'tie' or null
		winner: null,
		winnerName: ''
	}
}

export function useGameContext() {
	return useContext(GameContext)
}
