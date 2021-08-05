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
	
	// todo: should be passed to name input dialog
	function onSubmitPlayerName() {
		setShowNameModal(false)
		setShowLeaderBoard(true)
	}
	
	function startNewGame() {
		setGameContext(initGameContext())
		//todo: init Main Board and send boolean prop
		setShowLeaderBoard(false)
		setShowNameModal(false)
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
	
	return (
		<div className="game-container">
			<Header/>
			{showNameModal && <NameModal onSubmitPlayerName={onSubmitPlayerName}/>}
			{showLeaderBoard && <Leaderboard/>}
			<MainBoard/>
		</div>
	)
}