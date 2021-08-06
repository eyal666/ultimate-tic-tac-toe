import MainBoard from "./MainBoard";
import Header from "./Header";
import {initGameContext, useGameContext} from "../context/GameContext";
import {useEffect, useState} from "react";
import Leaderboard from "./LeaderBoard";
import NameModal from "./NameModal";
import './../css/GameManager.css'

export function GameManager() {
	const {gameContext, setGameContext} = useGameContext()
	const [showLeaderBoard, setShowLeaderBoard] = useState(false)
	const [showNameModal, setShowNameModal] = useState(false)
	const [shouldResetGame, setShouldResetGame] = useState(false)
	
	// todo: should be passed to name input dialog
	function onSubmitPlayerName() {
		setShowNameModal(false)
		setShowLeaderBoard(true)
	}
	
	function startNewGame() {
		setShouldResetGame(true)
		setShowLeaderBoard(false)
		setShowNameModal(false)
		setGameContext(initGameContext())
	}
	
	useEffect(() => {
		const winner = gameContext.winner
		if (!winner) {
			return
		}
		
		if (gameContext.winner === 'tie') {
			//todo open tie modal and init all states
		}
		if (winner) {
			setShowNameModal(true)
		}
	}, [gameContext.winner])
	
	useEffect(() => {
		if (shouldResetGame) {
			setShouldResetGame(false)
		}
	}, [shouldResetGame])
	
	return (
		<div className="game-container">
			<Header startNewGame={startNewGame}/>
			{showNameModal && <NameModal onSubmitPlayerName={onSubmitPlayerName}/>}
			{showLeaderBoard && <Leaderboard/>}
			<MainBoard shouldResetGame={shouldResetGame}/>
		</div>
	)
}