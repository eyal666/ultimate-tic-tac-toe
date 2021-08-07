import MainBoard from "./MainBoard";
import Header from "./Header";
import {initGameContext, useGameContext} from "../context/GameContext";
import {useEffect, useState} from "react";
import Leaderboard from "./Leaderboard";
import NameModal from "./NameModal";
import './../css/GameManager.css'

export function GameManager() {
	const {gameContext, setGameContext} = useGameContext()
	const [showLeaderboard, setShowLeaderboard] = useState(false)
	const [showNameModal, setShowNameModal] = useState(false)
	const [shouldResetGame, setShouldResetGame] = useState(false)
	
	function onSubmitPlayerName() {
		setShowNameModal(false)
		setShowLeaderboard(true)
	}
	
	function startNewGame() {
		setShouldResetGame(true)
		setShowLeaderboard(false)
		setShowNameModal(false)
		setGameContext(initGameContext())
	}
	
	function closeLeaderboard() {
		setShowLeaderboard(false)
		if (gameContext.winner) {
			startNewGame()
		}
	}
	
	useEffect(() => {
		if (gameContext.winner) {
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
			<Header startNewGame={startNewGame} showLeaderboard={() => setShowLeaderboard(true)}/>
			<NameModal onSubmitPlayerName={onSubmitPlayerName} isOpen={showNameModal}/>
			<Leaderboard isOpen={showLeaderboard} onRequestClose={closeLeaderboard}/>
			<MainBoard shouldResetGame={shouldResetGame}/>
		</div>
	)
}