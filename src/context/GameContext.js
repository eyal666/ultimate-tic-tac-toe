import {createContext, useContext} from "react";

export const GameContext = createContext()

export function initGameContext() {
	return {
		// 'X' or 'O'
		currentPlayer: 'X',
		//todo the next board is determind by the square the player played in the sub-board
		// 'tile' or 'board'
		turnStage: 'tile',
		//todo each prop for every player
		totalPlayerMoves: 0,
		// 0-8 or null
		//todo at the Beginning all the boards are open
		activeBoard: Math.floor(Math.random() * 9),
		// 'X', 'O', 'tie' or null
		winner: null,
		winnerName: ''
	}
}

export function useGameContext() {
	return useContext(GameContext)
}
